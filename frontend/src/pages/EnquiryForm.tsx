import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen } from "lucide-react";

const EnquiryForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const prefilledCourse = location.state?.courseName || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: prefilledCourse,
    qualification: "",
    message: "",
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const studentData = localStorage.getItem("studentData");
    if (studentData) {
      const parsed = JSON.parse(studentData);
      setStudent(parsed);
      setFormData((prev) => ({
        ...prev,
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
      }));
    }
  }, []);

  const courses = [
    "B.Tech",
    "MBA",
    "BCA",
    "HM",
    "B.SC NURSING",
    "BPT",
    "BA",
    "B.SC",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        student: student ? student.id : undefined,
      };

      const response = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      const data = await response.json();
      const enquiryId = data.enquiry?._id || data.enquiry?.id || data.id;

      toast({
        title: "Enquiry Submitted!",
        description: `Your reference ID is: ${enquiryId}. Our team will contact you within 24 hours.`,
      });

      setSubmittedId(enquiryId);
      setFormData((prev) => ({
        ...prev,
        message: "",
        qualification: "",
      }));

      setTimeout(() => {
        setSubmittedId(null);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem submitting your enquiry. Please try again later.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Header Section */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Book Free Consultation
                  </h1>
                  <p className="text-muted-foreground">
                    Fill in your details and our admission counselors will contact you within 24 hours to discuss your educational goals and guide you through the admission process.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What You'll Get:</h3>
                <div className="space-y-3">
                  {[
                    "Personalized course recommendations",
                    "Admission guidance and support",
                    "College selection assistance",
                    "Career planning advice",
                    "Scholarship information",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                {/* Success Message */}
                {submittedId && (
                  <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                    <p className="text-accent font-semibold">✓ Thank you for your enquiry!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Reference ID: <span className="font-mono text-foreground">{submittedId}</span>
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interested Course *
                    </label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Qualification */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Qualification *
                    </label>
                    <select
                      required
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({ ...formData, qualification: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select your qualification</option>
                      <option value="10th Pass">10th Pass</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your education goals and any specific questions you have..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-accent text-accent-foreground font-semibold w-full"
                >
                  Submit Enquiry
                </Button>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By submitting this form, you agree to our terms and conditions and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnquiryForm;
