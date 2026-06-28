import { Badge } from "@/components/ui/badge";

const TagCloud = () => {
  const colleges = [
    "Delhi University",
    "Galgotias University",
    "G.L. Bajaj Greater Noida",
    "J.S.S. Academy Noida",
    "KIET Group Ghaziabad",
    "NIET Greater Noida",
    "AKGEC Ghaziabad",
    "K.N. Modi University",
    "GNIOT Greater Noida",
    "Mangalmay Institute",
    "L.N.C.T. Bhopal",
    "Oriental College Bhopal",
    "JECRC University Jaipur",
    "Poornima University",
    "DIT Dehradun",
    "Graphic Era Dehradun",
    "I.E.M. Kolkata",
    "Techno India Salt Lake",
    "CEC Mohali",
    "L.P.U. Phagwara",
    "MIT WPU Pune",
    "Dr. D.Y. Patil Pune",
    "R.V. College Bangalore",
    "P.E.S. University Bangalore",
    "M.S. Ramaiah Bangalore",
    "B.M.S. College Bangalore",
  ];

  const courses = [
    "MBA (Master of Business Administration)",
    "BBA (Bachelor of Business Administration)",
    "BCA (Bachelor of Computer Applications)",
    "B.Sc. (Bachelor of Science)",
    "B.Com (Bachelor of Commerce)",
    "LL.B (Bachelor of Laws)",
    "B.Tech (Bachelor of Technology)",
    "B.A (Bachelor of Arts)",
    "Computer Science Engineering",
    "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
    "B.Ed (Bachelor of Education)",
    "Bachelor of Pharmacy (B.Pharma)",
    "B.Sc Nursing",
    "Paramedical Sciences",
    "Hotel Management",
  ];

  return (
    <section className="py-20 bg-background border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        
        {/* Colleges Cloud */}
        <div className="mb-12 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Top Colleges & Universities
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {colleges.map((c) => (
              <Badge
                key={c}
                variant="outline"
                className="px-3.5 py-1.5 text-sm font-medium border-border/80 hover:border-accent/50 hover:bg-secondary/40 text-foreground/80 hover:text-foreground cursor-pointer transition-all"
              >
                {c}
              </Badge>
            ))}
          </div>
        </div>

        {/* Courses Cloud */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Top Professional Courses
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {courses.map((c) => (
              <Badge
                key={c}
                variant="outline"
                className="px-3.5 py-1.5 text-sm font-medium border-border/80 hover:border-accent/50 hover:bg-secondary/40 text-foreground/80 hover:text-foreground cursor-pointer transition-all"
              >
                {c}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TagCloud;
