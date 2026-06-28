import { useState, useEffect } from "react";
import { ArrowRight, Users, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Become a Medical Professional",
      title: "Pursue MBBS / Medical Admissions",
      subtitle: "NMC & WHO Approved Universities",
      description: "Get expert counselling for MBBS, BDS, BHMS, BAMS, B.Sc Nursing, and Pharmacy admissions in top colleges across India and abroad (Nepal, Russia, Bangladesh, Georgia, and more).",
      ctaLabel: "Start Consultation",
      colorClass: "text-[#34d399]",
      bgClass: "gradient-hero-medical", // We can use dynamic gradients
    },
    {
      badge: "Technical & Management Excellence",
      title: "Secure Admission in B.Tech & MBA",
      subtitle: "Top-Tier Professional Programs",
      description: "Step into your dream career with direct admissions in B.Tech (CSE, AI/ML, Cyber Security), MBA, BCA, BBA, Law, and Hotel Management in top corporate-connected universities.",
      ctaLabel: "Apply for Counselling",
      colorClass: "text-[#60a5fa]",
      bgClass: "gradient-hero-tech",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Successful Careers Guided" },
    { icon: Award, value: "99.2%", label: "Admission Success Rate" },
    { icon: BookOpen, value: "150+", label: "Recognized Partner Colleges" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Dynamic dark bg gradients */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              idx === 0
                ? "from-[#022c22] via-[#064e3b] to-[#0f172a]"
                : "from-[#0f172a] via-[#1e3a8a] to-[#1e1b4b]"
            }`}
          />
          {/* Overlay grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-25" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-3xl" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-xs font-semibold uppercase tracking-wider">
              {slides[currentSlide].badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight max-w-4xl">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className={`text-2xl md:text-4xl font-bold mb-6 ${slides[currentSlide].colorClass}`}>
            {slides[currentSlide].subtitle}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <Button
              size="lg"
              className="gradient-accent text-accent-foreground font-bold px-8 py-6 text-base hover:opacity-95 transition-all hover:scale-105 shadow-elevated w-full sm:w-auto"
              onClick={() => navigate("/enquiry")}
            >
              {slides[currentSlide].ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-base w-full sm:w-auto"
              onClick={() => {
                const target = document.getElementById("courses");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Courses
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/20">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
