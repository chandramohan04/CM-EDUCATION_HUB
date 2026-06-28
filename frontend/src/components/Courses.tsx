import { Laptop, Briefcase, Code, Scale, Heart, Building2, GraduationCap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      icon: Laptop,
      title: "B.Tech",
      description: "Bachelor of Technology in various specializations including CSE, ECE, Mechanical & more",
      duration: "4 Years",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Briefcase,
      title: "BBA",
      description: "Bachelor of Business Administration - Build strong foundation in business management",
      duration: "3 Years",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Code,
      title: "BCA",
      description: "Bachelor of Computer Applications - Start your journey in IT & software development",
      duration: "3 Years",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "MBA",
      description: "Master of Business Administration - Advance your career with executive education",
      duration: "2 Years",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Building2,
      title: "Hotel Management",
      description: "Learn hospitality management and prepare for careers in hotels & tourism",
      duration: "3-4 Years",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Scale,
      title: "LAW",
      description: "LLB & Integrated Law programs - Build a career in legal profession",
      duration: "3-5 Years",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: Heart,
      title: "B.Sc Nursing",
      description: "Bachelor of Science in Nursing - Join the noble healthcare profession",
      duration: "4 Years",
      color: "from-red-500 to-red-600",
    },
    {
      icon: GraduationCap,
      title: "Other Courses",
      description: "B.Com, BA, B.Sc, Diploma programs & more - We guide you for all courses",
      duration: "Varies",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Courses We Help You{" "}
            <span className="text-gradient">Enroll In</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From engineering to management, healthcare to law - we guide students to get admission in top colleges across India.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className="group gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground">
                    Duration
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {course.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
