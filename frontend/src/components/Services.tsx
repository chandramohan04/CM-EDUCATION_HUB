const services = [
  {
    id: "counselling",
    title: "Career Counselling",
    desc: "Personalized guidance to choose the best course and college based on your profile.",
  },
  {
    id: "applications",
    title: "Application Assistance",
    desc: "End-to-end application support, documentation and submission tracking.",
  },
  {
    id: "test-prep",
    title: "Test Preparation",
    desc: "Coaching and resources for entrance exams and aptitude tests.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-accent font-semibold uppercase tracking-wider">Our Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Comprehensive support across admissions, test preparation and career guidance to help you secure admissions in top colleges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="bg-card p-6 rounded-2xl shadow-card border border-border/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
