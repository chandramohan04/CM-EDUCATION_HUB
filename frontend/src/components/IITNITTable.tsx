import { useState } from "react";
import { GraduationCap, Award, ShieldAlert } from "lucide-react";

const IITNITTable = () => {
  const [activeTab, setActiveTab] = useState<"iit" | "nit" | "iiit">("iit");

  const iits = [
    { rank: "01", name: "Indian Institute of Technology, Madras (IITM)", location: "Chennai, Tamil Nadu" },
    { rank: "02", name: "Indian Institute of Technology, Delhi (IITD)", location: "New Delhi, Delhi" },
    { rank: "03", name: "Indian Institute of Technology, Bombay (IITB)", location: "Mumbai, Maharashtra" },
    { rank: "04", name: "Indian Institute of Technology, Kanpur (IITK)", location: "Kanpur, Uttar Pradesh" },
    { rank: "05", name: "Indian Institute of Technology, Kharagpur (IITKGP)", location: "Kharagpur, West Bengal" },
    { rank: "06", name: "Indian Institute of Technology, Roorkee (IITR)", location: "Roorkee, Uttarakhand" },
    { rank: "07", name: "Indian Institute of Technology, Guwahati (IITG)", location: "Guwahati, Assam" },
    { rank: "08", name: "Indian Institute of Technology, Hyderabad (IITH)", location: "Hyderabad, Telangana" },
  ];

  const nits = [
    { rank: "01", name: "National Institute of Technology, Tiruchirappalli (NITT)", location: "Tiruchirappalli, Tamil Nadu" },
    { rank: "02", name: "National Institute of Technology, Rourkela (NITR)", location: "Rourkela, Odisha" },
    { rank: "03", name: "National Institute of Technology, Surathkal (NITK)", location: "Mangalore, Karnataka" },
    { rank: "04", name: "National Institute of Technology, Warangal (NITW)", location: "Warangal, Telangana" },
    { rank: "05", name: "Motilal Nehru National Institute of Technology (MNNIT)", location: "Allahabad, Uttar Pradesh" },
    { rank: "06", name: "Visvesvaraya National Institute of Technology (VNIT)", location: "Nagpur, Maharashtra" },
    { rank: "07", name: "National Institute of Technology, Calicut (NITC)", location: "Calicut, Kerala" },
    { rank: "08", name: "Sardar Vallabhbhai National Institute of Technology (SVNIT)", location: "Surat, Gujarat" },
  ];

  const iiits = [
    { rank: "01", name: "Atal Bihari Vajpayee Indian Institute of Information Technology (ABV-IIITM)", location: "Gwalior, Madhya Pradesh" },
    { rank: "02", name: "Indian Institute of Information Technology, Kota (IIITK)", location: "Kota, Rajasthan" },
    { rank: "03", name: "Indian Institute of Information Technology, Guwahati (IIITG)", location: "Guwahati, Assam" },
    { rank: "04", name: "Indian Institute of Information Technology, Kalyani (IIITK)", location: "Kalyani, West Bengal" },
    { rank: "05", name: "Indian Institute of Information Technology, Sonepat (IIITS)", location: "Sonepat, Haryana" },
    { rank: "06", name: "Indian Institute of Information Technology, Una (IIITU)", location: "Una, Himachal Pradesh" },
    { rank: "07", name: "Indian Institute of Information Technology, Sri City (IIITS)", location: "Sri City, Andhra Pradesh" },
    { rank: "08", name: "Indian Institute of Information Technology, Vadodara (IIITV)", location: "Vadodara, Gujarat" },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "iit":
        return iits;
      case "nit":
        return nits;
      case "iiit":
        return iiits;
    }
  };

  const currentList = getActiveData();

  return (
    <section className="py-24 bg-secondary/35 border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Top Ranking Colleges in India
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Explore <span className="text-gradient">IITs, NITs & IIITs</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A comprehensive reference list of top ranking engineering institutes in India based on academic excellence, placement statistics, and infrastructure.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("iit")}
            className={`px-6 py-2.5 rounded-xl font-semibold border transition-all ${
              activeTab === "iit"
                ? "bg-accent border-accent text-accent-foreground shadow-md"
                : "bg-card border-border hover:bg-secondary/40 text-foreground/80"
            }`}
          >
            IIT List
          </button>
          <button
            onClick={() => setActiveTab("nit")}
            className={`px-6 py-2.5 rounded-xl font-semibold border transition-all ${
              activeTab === "nit"
                ? "bg-accent border-accent text-accent-foreground shadow-md"
                : "bg-card border-border hover:bg-secondary/40 text-foreground/80"
            }`}
          >
            NIT List
          </button>
          <button
            onClick={() => setActiveTab("iiit")}
            className={`px-6 py-2.5 rounded-xl font-semibold border transition-all ${
              activeTab === "iiit"
                ? "bg-accent border-accent text-accent-foreground shadow-md"
                : "bg-card border-border hover:bg-secondary/40 text-foreground/80"
            }`}
          >
            IIIT List
          </button>
        </div>

        {/* Table View */}
        <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/40 border-b border-border/50 text-foreground font-semibold text-sm">
                  <th className="py-4 px-6 w-20">Rank</th>
                  <th className="py-4 px-6">Institute Name</th>
                  <th className="py-4 px-6">Location</th>
                </tr>
              </thead>
              <tbody>
                {currentList.map((item, idx) => (
                  <tr
                    key={item.name}
                    className="border-b border-border/50 hover:bg-secondary/15 transition-colors text-sm last:border-none"
                  >
                    <td className="py-4 px-6 font-mono text-accent font-bold">{item.rank}</td>
                    <td className="py-4 px-6 font-medium text-foreground">{item.name}</td>
                    <td className="py-4 px-6 text-muted-foreground">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advisory Box */}
        <div className="max-w-4xl mx-auto mt-8 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex gap-4 items-start">
          <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground text-sm">Admissions Advisory</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Admissions into IITs, NITs, and IIITs are strictly handled through centralized counselling (JoSAA / CSAB) based on JEE Main and Advanced ranks. CM Education Hub provides comprehensive counselling guidelines, documentation assistance, and college preferences support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IITNITTable;
