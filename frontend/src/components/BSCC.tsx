import { CheckCircle2 } from "lucide-react";

const BSCC = () => {
  const benefits = [
    {
      title: "Financial Assistance",
      desc: "Covers higher education expenses including college tuition, exam fees, hostels, books, and necessary study materials.",
    },
    {
      title: "No Collateral or Guarantor",
      desc: "Students can secure loans under this yojana without needing any collateral or property guarantees.",
    },
    {
      title: "Flexible Repayment Policies",
      desc: "Repayment begins only after the completion of the course or after securing employment, reducing immediate burden.",
    },
    {
      title: "Extremely Low Interest Rates",
      desc: "Concessional interest rates (1% for women, disabled, and transgender students; 4% for others) designed for affordability.",
    },
    {
      title: "Equal Educational Opportunities",
      desc: "Ensures financial constraints do not hold back talented students from pursuing professional courses.",
    },
    {
      title: "Holistic Career Growth",
      desc: "Enables enrollment in top technical and vocational programs, empowering students for future careers.",
    },
  ];

  return (
    <section className="py-24 bg-card border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                Bihar Student Credit Card Yojana
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Admission Via <span className="text-gradient">Student Credit Card</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              बिहार छात्र क्रेडिट कार्ड योजना (Bihar Student Credit Card Yojana) बिहार सरकार द्वारा शुरू की गई एक महत्वाकांक्षी पहल है। इस योजना का उद्देश्य आर्थिक रूप से कमजोर पृष्ठभूमि के छात्रों को वित्तीय सहायता प्रदान करना है ताकि वे बिना किसी वित्तीय बाधा के उच्च शिक्षा पूरी कर सकें।
            </p>
            <div className="bg-secondary/40 border border-border/50 rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-2">
                Eligible Professional Courses Include:
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                B.Tech, BCA, BBA, MBA, Hotel Management, Law, B.Sc Nursing, B.Pharma, GNM, and 40+ other registered professional and technical degrees in top colleges.
              </p>
            </div>
          </div>

          {/* Right Benefits Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Key Benefits of the BSCC Scheme
            </h3>
            <div className="grid gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{b.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BSCC;
