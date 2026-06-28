import { GraduationCap, Instagram, Linkedin } from "lucide-react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="white"/>
    <path d="M50 8C27.91 8 10 25.91 10 48c0 6.54 1.65 12.78 4.52 18.2L10 92l27.38-7.14C44.34 88.52 47 89 50 89c22.09 0 40-17.91 40-40S72.09 8 50 8zm0 73.5c-5.52 0-10.9-1.4-15.55-4.04l-1.12-.67-11.55 3.02 3.07-11.19-.7-1.1C16.56 60.16 15 54.38 15 48c0-19.3 15.7-35 35-35s35 15.7 35 35-15.7 35-35 35z" fill="white"/>
    <path d="M75.5 45.5c-.5-2.5-2.5-4-5-4.5-2-1-6.5-.5-8 3.5-1 2.5-.5 5.5 1 7 2 2 4 3 4 5s-1.5 3.5-3 3-2.5-.5-3.5-1-1-2-1-3 .5-2 1-3c1.5-2.5 3-4 5-5 1.5-.5 2-.5 2-2 0-1-.5-2-1.5-2s-1.5 0-2.5.5-1 1-1 2" fill="white"/>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const courses = [
    "B.Tech",
    "BBA",
    "BCA",
    "MBA",
    "Hotel Management",
    "LAW",
    "B.Sc Nursing",
  ];

  const socials = [
    { icon: WhatsappIcon, href: "https://wa.me/919718825874", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/cmeducationhub", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/cmeducationhub", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div>
                <span className="text-xl font-bold">CM EDUCATION</span>
                <span className="block text-xs font-medium text-accent">HUB</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your trusted partner for higher education admissions. Helping students achieve their dreams since day one.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const isWhatsApp = social.label === "WhatsApp";
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isWhatsApp
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <strong className="text-primary-foreground">Phone:</strong>
                <br />
                +91 97188 25874
              </li>
              <li>
                <strong className="text-primary-foreground">Email:</strong>
                <br />
                cmmmdu2980@gmail.com
              </li>
              <li>
                <strong className="text-primary-foreground">Address:</strong>
                <br />
                Your City, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} CM Education Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
