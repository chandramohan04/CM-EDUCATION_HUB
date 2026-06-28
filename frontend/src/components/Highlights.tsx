import { BookOpen, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-secondary/20 relative z-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Engineering Courses Highlight */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all group duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Top Engineering Disciplines
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Computer Science Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Mechanical Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Electrical & Electronics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Civil Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Electronics & Comm.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> B.Tech Biotechnology
              </li>
            </ul>
            <Button
              onClick={() => navigate("/courses")}
              variant="link"
              className="text-blue-500 hover:text-blue-600 p-0 h-auto font-semibold flex items-center gap-1"
            >
              View All Courses &rarr;
            </Button>
          </div>

          {/* Featured Colleges Highlight */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all group duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Featured Admission Programs
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Noida International University
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Maharishi Markandeshwar Univ.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Shobhit Deemed University
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> GNIOT Group of Institutions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> NIET Greater Noida
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Mangalmay Group of Institutions
              </li>
            </ul>
            <Button
              onClick={() => navigate("/colleges")}
              variant="link"
              className="text-orange-500 hover:text-orange-600 p-0 h-auto font-semibold flex items-center gap-1"
            >
              Explore Colleges &rarr;
            </Button>
          </div>

          {/* Student Services Highlight */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all group duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Student Admission Services
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> One-on-one Expert Counselling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> College & University Selection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Student Credit Card Loan Guidance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Documentation & Application Review
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Virtual & Physical Counselling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Post-Admission Onboarding Support
              </li>
            </ul>
            <a
              href="tel:+919718825874"
              className="text-emerald-500 hover:text-emerald-600 font-semibold flex items-center gap-1 text-sm transition-colors"
            >
              Talk to Our Experts &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;
