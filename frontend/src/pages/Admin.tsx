import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Trash2,
  ChevronDown,
  ChevronUp,
  Users,
  FileText,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { API_BASE_URL } from "@/config";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  message: string;
  status: "Pending" | "Verified" | "Rejected";
  timestamp: string;
}

interface StudentEnquiry {
  id: string;
  course: string;
  qualification: string;
  status: string;
  timestamp: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
  enquiries: StudentEnquiry[];
}

type Tab = "enquiries" | "students";

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    Verified: "bg-green-500/20 text-green-600",
    Rejected: "bg-red-500/20 text-red-500",
    Pending: "bg-yellow-500/20 text-yellow-600",
  };
  return `inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${map[status] ?? map.Pending}`;
};

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auth state
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("adminToken")
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // Data
  const [tab, setTab] = useState<Tab>("enquiries");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [dataLoading, setDataLoading] = useState(false);

  const isLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      fetchEnquiries(token);
      fetchStudents(token);
    }
  }, [token]);

  // ── API calls ──────────────────────────────────────────────

  const fetchEnquiries = async (authToken: string) => {
    setDataLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.status === 401 || res.status === 403) { handleLogout(); return; }
      const data = await res.json();
      setEnquiries(Array.isArray(data) ? data : []);
    } catch {
      toast({ variant: "destructive", title: "Error", description: "Failed to load enquiries." });
    } finally {
      setDataLoading(false);
    }
  };

  const fetchStudents = async (authToken: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/students`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setStudents(Array.isArray(data) ? data : []);
      }
    } catch {
      // silent — students tab will just show empty
    }
  };

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      toast({ variant: "destructive", title: "Error", description: "Enter username and password." });
      return;
    }
    setLoginLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid credentials");
      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setUsername("");
      setPassword("");
      toast({ title: "Logged in", description: "Welcome, Admin!" });
    } catch (err: any) {
      toast({ variant: "destructive", title: "Login Failed", description: err.message });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setEnquiries([]);
    setStudents([]);
  };

  const updateStatus = async (id: string, status: "Pending" | "Verified" | "Rejected") => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status } : e))
      );
      toast({ title: `Application ${status}`, description: `The enquiry has been marked as ${status}.` });
    } catch {
      toast({ variant: "destructive", title: "Error", description: "Failed to update status." });
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!window.confirm("Delete this enquiry permanently?")) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      toast({ title: "Deleted", description: "Enquiry removed." });
    } catch {
      toast({ variant: "destructive", title: "Error", description: "Failed to delete." });
    }
  };

  // ── Login screen ───────────────────────────────────────────

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-12 bg-background flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-md">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
                  <p className="text-xs text-muted-foreground">Authorised access only</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Username
                  </label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter admin username"
                    className="bg-background border-border focus:border-primary"
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="bg-background border-border focus:border-primary pr-10"
                      onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleLogin}
                  disabled={loginLoading}
                  className="gradient-accent text-accent-foreground font-semibold w-full mt-2"
                >
                  {loginLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────

  const pendingCount = enquiries.filter((e) => e.status === "Pending").length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Manage student enquiries and profiles
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 text-red-500 border-red-500/30 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Enquiries", value: enquiries.length, color: "text-primary" },
              { label: "Pending", value: pendingCount, color: "text-yellow-600" },
              { label: "Verified", value: enquiries.filter((e) => e.status === "Verified").length, color: "text-green-600" },
              { label: "Students", value: students.length, color: "text-accent" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4 border border-border/50 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setTab("enquiries")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "enquiries"
                  ? "gradient-accent text-accent-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="w-4 h-4" />
              Enquiries
              {pendingCount > 0 && (
                <span className="bg-yellow-500 text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
                  {pendingCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setTab("students")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "students"
                  ? "gradient-accent text-accent-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Students
            </button>
          </div>

          {/* ── Enquiries Tab ── */}
          {tab === "enquiries" && (
            <>
              {dataLoading ? (
                <div className="text-center py-16 text-muted-foreground">Loading enquiries…</div>
              ) : enquiries.length === 0 ? (
                <div className="bg-card rounded-2xl p-12 text-center border border-border/50">
                  <FileText className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">No enquiries submitted yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-md transition-all"
                    >
                      {/* Summary row */}
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() =>
                          setExpandedId(expandedId === enq.id ? null : enq.id)
                        }
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-base font-bold text-foreground">
                                {enq.name}
                              </h3>
                              <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full gradient-accent text-accent-foreground">
                                {enq.course}
                              </span>
                              <span className={statusBadge(enq.status)}>
                                {enq.status}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                              <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="font-medium text-foreground truncate">{enq.email}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="font-medium text-foreground">{enq.phone}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Qualification</p>
                                <p className="font-medium text-foreground">{enq.qualification || "—"}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 flex-shrink-0">
                            <p className="text-xs font-mono text-accent">{enq.id.slice(-8)}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(enq.timestamp).toLocaleDateString()}
                            </p>
                            {expandedId === enq.id ? (
                              <ChevronUp className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded */}
                      {expandedId === enq.id && (
                        <div className="px-6 pb-6 border-t border-border/50 pt-4 space-y-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Full Reference ID</p>
                            <p className="text-sm font-mono text-foreground">{enq.id}</p>
                          </div>

                          {enq.message && (
                            <div className="bg-secondary/20 rounded-lg p-3">
                              <p className="text-xs text-muted-foreground mb-1">Message</p>
                              <p className="text-sm text-foreground leading-relaxed">{enq.message}</p>
                            </div>
                          )}

                          <p className="text-xs text-muted-foreground">
                            Submitted: {new Date(enq.timestamp).toLocaleString()}
                          </p>

                          {/* Action buttons */}
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                            {enq.status !== "Verified" && (
                              <Button
                                size="sm"
                                onClick={(e) => { e.stopPropagation(); updateStatus(enq.id, "Verified"); }}
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                              >
                                <ShieldCheck className="w-4 h-4 mr-1" />
                                Verify
                              </Button>
                            )}
                            {enq.status !== "Rejected" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => { e.stopPropagation(); updateStatus(enq.id, "Rejected"); }}
                                className="text-red-500 border-red-500/30 hover:bg-red-500/10"
                              >
                                Reject
                              </Button>
                            )}
                            {enq.status !== "Pending" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => { e.stopPropagation(); updateStatus(enq.id, "Pending"); }}
                                className="text-yellow-600 border-yellow-500/30 hover:bg-yellow-500/10"
                              >
                                Reset to Pending
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => { e.stopPropagation(); deleteEnquiry(enq.id); }}
                              className="ml-auto text-muted-foreground hover:text-destructive hover:border-destructive/30"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* ── Students Tab ── */}
          {tab === "students" && (
            <>
              {students.length === 0 ? (
                <div className="bg-card rounded-2xl p-12 text-center border border-border/50">
                  <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">No registered students yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {students.map((stu) => (
                    <div
                      key={stu.id}
                      className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-md transition-all"
                    >
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() =>
                          setExpandedId(expandedId === stu.id ? null : stu.id)
                        }
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                <Users className="w-4 h-4 text-accent" />
                              </div>
                              <h3 className="text-base font-bold text-foreground">{stu.name}</h3>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                {stu.enquiries.length} enquir{stu.enquiries.length === 1 ? "y" : "ies"}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="font-medium text-foreground truncate">{stu.email}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Phone</p>
                                <p className="font-medium text-foreground">{stu.phone}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <p className="text-xs text-muted-foreground">
                              Registered {new Date(stu.registeredAt).toLocaleDateString()}
                            </p>
                            {expandedId === stu.id ? (
                              <ChevronUp className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded student detail */}
                      {expandedId === stu.id && (
                        <div className="px-6 pb-6 border-t border-border/50 pt-4">
                          <p className="text-sm font-semibold text-foreground mb-3">
                            Enquiries submitted
                          </p>
                          {stu.enquiries.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No enquiries yet.</p>
                          ) : (
                            <div className="space-y-2">
                              {stu.enquiries.map((enq) => (
                                <div
                                  key={enq.id}
                                  className="flex items-center justify-between bg-secondary/20 rounded-lg px-4 py-3 text-sm"
                                >
                                  <div>
                                    <span className="font-semibold text-foreground">
                                      {enq.course}
                                    </span>
                                    <span className="text-muted-foreground ml-2">
                                      · {enq.qualification || "—"}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className={statusBadge(enq.status)}>{enq.status}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {new Date(enq.timestamp).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
