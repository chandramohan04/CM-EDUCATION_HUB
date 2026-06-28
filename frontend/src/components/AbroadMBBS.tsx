import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const AbroadMBBS = () => {
  const destinations = [
    {
      country: "MBBS IN NEPAL",
      desc: "Best opportunities for Indian medical aspirants. No visa requirement, food and culture similar to India, NMC approved colleges.",
      fee: "Starting ₹40 Lakhs",
      tag: "Nepal",
    },
    {
      country: "MBBS IN RUSSIA",
      desc: "Top government medical universities offering bilingual/English courses. Low living cost, global exposure, high FMGE success.",
      fee: "Starting ₹25 Lakhs",
      tag: "Russia",
    },
    {
      country: "MBBS IN BANGLADESH",
      desc: "Identical syllabus and disease patterns to India. Excellent clinical exposure and passing rate in screening tests.",
      fee: "Starting ₹32 Lakhs",
      tag: "Bangladesh",
    },
    {
      country: "MBBS IN CHINA",
      desc: "World-class university infrastructure, high-tech research labs, WHO recognized programs, affordable academic costs.",
      fee: "Starting ₹28 Lakhs",
      tag: "China",
    },
    {
      country: "MBBS IN PHILIPPINES",
      desc: "BS-MD English medium courses. American education structure, friendly tropical climate, and highly qualified English faculties.",
      fee: "Starting ₹22 Lakhs",
      tag: "Philippines",
    },
    {
      country: "MBBS IN ARMENIA",
      desc: "Peaceful European country, safe and secure environment. Affordable fee structures, globally recognized medical degrees.",
      fee: "Starting ₹18 Lakhs",
      tag: "Armenia",
    },
    {
      country: "MBBS IN INDIA",
      desc: "Consultation guidance for government and private colleges through NEET Counselling (AIQ and State quotas).",
      fee: "Based on NEET Rank",
      tag: "India",
    },
  ];

  return (
    <section className="py-24 bg-card border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Abroad Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Study MBBS <span className="text-gradient">Abroad & India</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Get direct admission to world-class medical universities recognized by WHO and NMC (National Medical Commission). Embark on your medical journey with affordable budgets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <div
              key={d.country}
              className="bg-secondary/20 rounded-2xl p-6 border border-border/50 flex flex-col justify-between group hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/20 text-accent">
                    {d.tag}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{d.fee}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {d.country}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {d.desc}
                </p>
              </div>

              <a
                href="tel:+919718825874"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-4 h-4" />
                Call +91-97188-25874
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbroadMBBS;
