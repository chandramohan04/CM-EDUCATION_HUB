import { CheckCircle2, Target, Eye } from "lucide-react";

const About = () => {
  const highlights = [
    "Personalized career counseling",
    "Direct college tie-ups",
    "Scholarship assistance",
    "Documentation support",
    "Admission follow-up",
    "Post-admission guidance",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Education Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                CM Education Hub is a premier education consultancy dedicated to helping students achieve their academic dreams. With years of experience and strong relationships with top colleges and universities, we provide comprehensive guidance for higher education admissions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower students with the right guidance and support to secure admissions in their desired courses and colleges, making quality higher education accessible to all.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted education consultancy, known for transforming students' lives through expert guidance and successful placements in top institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
