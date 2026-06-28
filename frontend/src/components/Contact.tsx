import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="white"/>
    <path d="M50 8C27.91 8 10 25.91 10 48c0 6.54 1.65 12.78 4.52 18.2L10 92l27.38-7.14C44.34 88.52 47 89 50 89c22.09 0 40-17.91 40-40S72.09 8 50 8zm0 73.5c-5.52 0-10.9-1.4-15.55-4.04l-1.12-.67-11.55 3.02 3.07-11.19-.7-1.1C16.56 60.16 15 54.38 15 48c0-19.3 15.7-35 35-35s35 15.7 35 35-15.7 35-35 35z" fill="white"/>
    <path d="M75.5 45.5c-.5-2.5-2.5-4-5-4.5-2-1-6.5-.5-8 3.5-1 2.5-.5 5.5 1 7 2 2 4 3 4 5s-1.5 3.5-3 3-2.5-.5-3.5-1-1-2-1-3 .5-2 1-3c1.5-2.5 3-4 5-5 1.5-.5 2-.5 2-2 0-1-.5-2-1.5-2s-1.5 0-2.5.5-1 1-1 2" fill="white"/>
  </svg>
);
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappText = `Hello, I am ${formData.name || "a student"}.
Email: ${formData.email}
Phone: ${formData.phone}
Interested Course: ${formData.course}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919718825874?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "WhatsApp chat opened",
      description: "The enquiry was prepared and opened in WhatsApp.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const contactInfo = [
    {
      icon: WhatsappIcon,
      title: "WhatsApp",
      value: "+91 97188 25874",
      link: "https://wa.me/919718825874",
      bgClass: "bg-green-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 97188 25874",
      link: "tel:+919718825874",
      bgClass: "bg-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "cmmmdu2980@gmail.com",
      link: "mailto:cmmmdu2980@gmail.com",
      bgClass: "bg-red-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Your City, India",
      link: "#",
      bgClass: "bg-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Your{" "}
            <span className="text-gradient">Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help. Contact us for free consultation and personalized guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start gap-5 p-6 bg-card rounded-xl border border-border/50 hover:shadow-card hover:border-accent/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${info.bgClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested Course
                  </label>
                  <Input
                    placeholder="e.g., B.Tech, MBA"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your education goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
