import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, User, Mail, Phone, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/config";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  message: string;
  timestamp: string;
  status: "Pending" | "Verified" | "Rejected";
}

interface StudentInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    if (!token) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Please login to view your dashboard.",
      });
      navigate("/student/login");
      return;
    }

    fetchDashboardData(token);
  }, []);

  const fetchDashboardData = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/student/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          handleLogout();
          return;
        }
        throw new Error("Failed to load dashboard data");
      }

      const data = await response.json();
      setStudent(data.student);
      setEnquiries(data.enquiries);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard data.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentData");
    setStudent(null);
    setEnquiries([]);
    navigate("/student/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border/50 sticky top-28">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{student?.name}</h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary mt-1.5">
                    Student Account
                  </span>
                </div>

                <div className="space-y-4 border-t border-border/50 pt-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div className="overflow-hidden text-ellipsis">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium truncate">{student?.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">{student?.phone}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full mt-6 text-red-500 border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                >
                  Logout
                </Button>
              </div>
            </div>

            {/* Enquiries Section */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Applications</h1>
              <p className="text-muted-foreground mb-6">
                Track your admission consultation status
              </p>

              {enquiries.length === 0 ? (
                <div className="bg-card rounded-2xl p-12 text-center border border-border/50">
                  <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg mb-4">
                    You have not submitted any enquiries yet.
                  </p>
                  <Button
                    onClick={() => navigate("/enquiry")}
                    className="gradient-accent text-accent-foreground font-semibold"
                  >
                    Submit New Enquiry
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {enquiries.map((enquiry) => (
                    <div
                      key={enquiry.id}
                      className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-md transition-all p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-foreground">
                              Application for {enquiry.course}
                            </h3>
                            <span
                              className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                                enquiry.status === "Verified"
                                  ? "bg-green-500/20 text-green-500"
                                  : enquiry.status === "Rejected"
                                  ? "bg-red-500/20 text-red-500"
                                  : "bg-yellow-500/20 text-yellow-500"
                              }`}
                            >
                              {enquiry.status || "Pending"}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Reference ID:{" "}
                            <span className="font-mono text-accent">{enquiry.id}</span>
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-muted-foreground text-xs">Applicant Name</p>
                          <p className="text-foreground font-medium">{enquiry.name}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Mobile Number</p>
                          <p className="text-foreground font-medium">{enquiry.phone}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Qualification</p>
                          <p className="text-foreground font-medium">{enquiry.qualification}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Submitted On</p>
                          <p className="text-foreground font-medium">
                            {new Date(enquiry.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {enquiry.message && (
                        <div className="bg-secondary/20 rounded-lg p-3 text-sm">
                          <p className="text-xs text-muted-foreground mb-1">Message / Query</p>
                          <p className="text-muted-foreground leading-relaxed">{enquiry.message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
