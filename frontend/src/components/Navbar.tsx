import { useState } from "react";
import { Menu, X, Instagram, Mail, Phone, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="white"/>
    <path d="M50 8C27.91 8 10 25.91 10 48c0 6.54 1.65 12.78 4.52 18.2L10 92l27.38-7.14C44.34 88.52 47 89 50 89c22.09 0 40-17.91 40-40S72.09 8 50 8zm0 73.5c-5.52 0-10.9-1.4-15.55-4.04l-1.12-.67-11.55 3.02 3.07-11.19-.7-1.1C16.56 60.16 15 54.38 15 48c0-19.3 15.7-35 35-35s35 15.7 35 35-15.7 35-35 35z" fill="white"/>
    <path d="M75.5 45.5c-.5-2.5-2.5-4-5-4.5-2-1-6.5-.5-8 3.5-1 2.5-.5 5.5 1 7 2 2 4 3 4 5s-1.5 3.5-3 3-2.5-.5-3.5-1-1-2-1-3 .5-2 1-3c1.5-2.5 3-4 5-5 1.5-.5 2-.5 2-2 0-1-.5-2-1.5-2s-1.5 0-2.5.5-1 1-1 2" fill="white"/>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("studentToken");

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentData");
    navigate("/student/login");
  };

  const aboutLinks = [
    { name: "About CM Education Hub", href: "/#about" },
    { name: "Mission & Vision", href: "/#about" },
    { name: "Our Values", href: "/#why-us" },
  ];

  const coursesLinks = [
    { name: "Engineering Courses", href: "/#courses" },
    { name: "Medical / MBBS Courses", href: "/#abroad-mbbs" },
    { name: "Management Courses", href: "/#courses" },
    { name: "Law Courses", href: "/#courses" },
    { name: "Bihar Student Credit Card", href: "/#bscc" },
  ];

  const servicesLinks = [
    { name: "Career Counseling", href: "/#services" },
    { name: "University Selection Guidance", href: "/#services" },
    { name: "Admission Guidance", href: "/#services" },
    { name: "Virtual Counselling", href: "/#services" },
  ];

  const examsLinks = [
    "JEE-MAIN", "JEE-ADVANCE", "CMAT-Management", "COMEDK", "CUSAT",
    "EAMCET", "CMC Vellore", "GATE", "GMAT", "JIPMER", "CAT", "NEET-Exam"
  ];

  const colleges = [
    { id: "noida-international-university", name: "Noida International University" },
    { id: "maharishi-markandeshwar-university", name: "Maharishi Markandeshwar University" },
    { id: "shobhit-university", name: "Shobhit University" },
    { id: "gniot-noida", name: "GNIOT Noida" },
    { id: "niet-noida", name: "NIET Noida" },
    { id: "vgu-jaipur", name: "VGU Jaipur" },
    { id: "guru-kashi-university", name: "Guru Kashi University" },
    { id: "bharath-university", name: "Bharath University" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-soft">
      {/* Top Header Bar */}
      <div className="bg-[#efefef] border-b border-border/40 py-2.5 text-foreground/80 text-xs">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:cmmmdu2980@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent" /> admission@cmeducationhub.com
            </a>
            <a href="tel:+919718825874" className="flex items-center gap-1.5 hover:text-primary transition-colors font-bold">
              <Phone className="w-3.5 h-3.5 text-accent" /> +91-97188-25874
            </a>
            <a href="tel:+917669238872" className="flex items-center gap-1.5 hover:text-primary transition-colors font-bold">
              <Phone className="w-3.5 h-3.5 text-accent" /> +91-76692-38872
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">
              JustDial rated ★★★★★
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919718825874"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-lg hover:bg-green-700 transition-colors font-medium text-[11px]"
              >
                <WhatsappIcon className="w-3.5 h-3.5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/#home" className="flex items-center">
              <div className="mr-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 p-1 flex items-center justify-center shadow-md border border-border/30">
                  <img src="/logo.png" alt="CM Education Hub" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-primary tracking-wide">CM EDUCATION</span>
                <span className="block text-xs font-semibold text-accent tracking-widest uppercase">HUB</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* Home */}
              <a href="/#home" className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200">
                HOME
              </a>

              {/* About Us Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200 focus:outline-none">
                  ABOUT US
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[14rem]">
                  {aboutLinks.map((link) => (
                    <DropdownMenuItem asChild key={link.name} className="rounded-lg p-2 hover:bg-accent/10">
                      <a href={link.href} className="block w-full text-sm font-medium text-foreground">
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Courses Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200 focus:outline-none">
                  COURSES
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[16rem]">
                  {coursesLinks.map((link) => (
                    <DropdownMenuItem asChild key={link.name} className="rounded-lg p-2 hover:bg-accent/10">
                      <a href={link.href} className="block w-full text-sm font-medium text-foreground">
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200 focus:outline-none">
                  SERVICES
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[16rem]">
                  {servicesLinks.map((link) => (
                    <DropdownMenuItem asChild key={link.name} className="rounded-lg p-2 hover:bg-accent/10">
                      <a href={link.href} className="block w-full text-sm font-medium text-foreground">
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Exam Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200 focus:outline-none">
                  EXAMS
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 grid grid-cols-2 gap-1 min-w-[20rem]">
                  {examsLinks.map((exam) => (
                    <DropdownMenuItem asChild key={exam} className="rounded-lg p-2 hover:bg-accent/10">
                      <a href="/#courses" className="block w-full text-xs font-semibold text-foreground/90">
                        {exam}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Colleges Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200 focus:outline-none">
                  COLLEGES
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[18rem] max-h-[30rem] overflow-y-auto">
                  {colleges.map((c) => (
                    <DropdownMenuItem asChild key={c.id} className="rounded-lg p-2 hover:bg-accent/10">
                      <a href={`/colleges#${c.id}`} className="block w-full">
                        <div className="text-sm font-semibold text-foreground">{c.name}</div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* NIRF */}
              <a href="/#colleges-table" className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200">
                NIRF
              </a>

              {/* Contact */}
              <a href="/#contact" className="text-foreground/80 hover:text-primary font-semibold text-sm transition-colors duration-200">
                CONTACT US
              </a>

              {/* Action Button */}
              {isLoggedIn ? (
                <div className="flex items-center gap-3 ml-4">
                  <Button 
                    onClick={() => navigate("/student/dashboard")}
                    className="bg-accent text-accent-foreground font-bold text-sm px-5"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    onClick={handleLogout}
                    variant="outline"
                    className="px-4"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => navigate("/student/login")}
                  className="gradient-accent text-accent-foreground font-bold text-sm px-6 hover:opacity-90 transition-opacity ml-4"
                >
                  Student Login
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[75vh] overflow-y-auto bg-card">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <a
                href="/#home"
                className="text-foreground/85 hover:text-primary font-bold py-2 border-b border-border/50 text-sm"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </a>
              
              <div className="py-2 border-b border-border/50">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">ABOUT US</span>
                <div className="pl-4 flex flex-col gap-2">
                  {aboutLinks.map((l) => (
                    <a key={l.name} href={l.href} className="text-sm font-medium text-foreground hover:text-primary py-1" onClick={() => setIsOpen(false)}>{l.name}</a>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-border/50">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">COURSES</span>
                <div className="pl-4 flex flex-col gap-2">
                  {coursesLinks.map((l) => (
                    <a key={l.name} href={l.href} className="text-sm font-medium text-foreground hover:text-primary py-1" onClick={() => setIsOpen(false)}>{l.name}</a>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-border/50">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">COLLEGES</span>
                <div className="pl-4 flex flex-col gap-2 max-h-[12rem] overflow-y-auto">
                  {colleges.map((l) => (
                    <a key={l.id} href={`/colleges#${l.id}`} className="text-sm font-medium text-foreground hover:text-primary py-1" onClick={() => setIsOpen(false)}>{l.name}</a>
                  ))}
                </div>
              </div>

              <a
                href="/#contact"
                className="text-foreground/85 hover:text-primary font-bold py-2 border-b border-border/50 text-sm"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </a>

              {isLoggedIn ? (
                <div className="flex flex-col gap-2 mt-2">
                  <Button 
                    onClick={() => { setIsOpen(false); navigate("/student/dashboard"); }}
                    className="bg-accent text-accent-foreground font-bold"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    onClick={() => { setIsOpen(false); handleLogout(); }}
                    variant="outline"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => { setIsOpen(false); navigate("/student/login"); }}
                  className="gradient-accent text-accent-foreground font-bold mt-2"
                >
                  Student Login
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
