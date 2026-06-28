import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left — Photo with blue background + decorative dots */}
          <div className="relative flex items-center justify-center">
            {/* Blue background card */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-[#0a2a6e] rounded-2xl overflow-hidden w-full" style={{ minHeight: "420px" }}>
                <img
                  src="/founder.jpg"
                  alt="CM Education Hub Founder"
                  className="w-full h-full object-cover object-center block"
                  style={{ display: "block", width: "100%", height: "100%", minHeight: "420px", objectFit: "cover", objectPosition: "center top" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-6 right-8 w-6 h-6 rounded-full border-2 border-white/40" />
              <div className="absolute bottom-10 right-6 w-5 h-5 rounded-full border-2 border-white/30" />

              {/* Decorative plus signs */}
              <div className="absolute top-1/3 -left-5 text-yellow-400 text-2xl font-bold select-none">+</div>
              <div className="absolute bottom-1/4 right-0 translate-x-4 text-yellow-400 text-2xl font-bold select-none">+</div>

              {/* Subtle grid overlay background behind card */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl scale-110 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>

          {/* Right — Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Who{" "}
              <span className="underline underline-offset-4 decoration-accent text-primary">
                We are
              </span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Our expertise in education counseling will provide you with all the options and
              opportunities that you have globally. We have successfully placed many students in
              various leading universities in the world. So you can trust the consistency of our
              service without an ounce of doubt.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              The experts are all former college admissions officers from highly selective colleges
              and universities. They have worked with thousands of students, offering individualized
              guidance to help them navigate the admissions process and achieve their educational
              goals. Our admissions consultants can answer complicated questions from students and
              parents.
            </p>

            <button
              onClick={() => navigate("/enquiry")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
