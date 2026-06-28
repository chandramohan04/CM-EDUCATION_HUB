import { Shield, Clock, Wallet, Users, HeadphonesIcon, FileCheck } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Years of experience in education counseling with proven track record of successful admissions.",
    },
    {
      icon: Clock,
      title: "Time-Saving Process",
      description: "We handle all paperwork and coordination, saving you time and reducing stress.",
    },
    {
      icon: Wallet,
      title: "Affordable Services",
      description: "Transparent pricing with no hidden charges. Quality guidance at reasonable fees.",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "One-on-one counseling sessions to understand your goals and recommend best options.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance for any queries throughout your admission journey.",
    },
    {
      icon: FileCheck,
      title: "End-to-End Support",
      description: "From course selection to final admission - we're with you at every step.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Makes Us{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just help you get admission - we help you make the right decision for your future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
