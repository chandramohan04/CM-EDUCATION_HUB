import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const courseData: { [key: number]: any } = {
    1: {
      name: "B.Tech",
      fullName: "Bachelor of Technology",
      duration: "4 Years",
      students: "500+ Enrolled",
      details: "B.Tech is a 4-year undergraduate engineering program that covers core engineering disciplines including Civil, Mechanical, Electrical, Electronics, Computer Science, and more. Students gain hands-on experience with industry-standard tools and participate in internships with leading companies.",
      overview: "The Bachelor of Technology (B.Tech) is an engineering degree program that prepares students for careers in various engineering fields. The program combines theoretical knowledge with practical skills through laboratories, workshops, and real-world projects.",
      specializations: [
        "Civil Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Electronics Engineering",
        "Computer Science Engineering",
        "Information Technology"
      ],
      eligibility: "12th Pass (PCM) with at least 50% marks",
      career: "Software Engineer, Mechanical Engineer, Electrical Engineer, Product Manager, Technical Lead, Consultant",
      colleges: "IITs, NITs, Top Private Engineering Colleges"
    },
    2: {
      name: "MBA",
      fullName: "Master of Business Administration",
      duration: "2 Years",
      students: "300+ Enrolled",
      details: "MBA is a 2-year postgraduate program designed to develop business leaders and entrepreneurs. It covers management, finance, marketing, operations, and business strategy. Students have opportunities for internships in top companies.",
      overview: "The Master of Business Administration (MBA) is a postgraduate degree that equips professionals with management and business skills. It's designed for working professionals and fresh graduates looking to advance their careers in business and management.",
      specializations: [
        "Finance",
        "Marketing",
        "Operations",
        "Human Resources",
        "International Business",
        "Entrepreneurship"
      ],
      eligibility: "Bachelor's degree with at least 50% marks + Valid CAT/MAT Score",
      career: "Business Manager, Finance Manager, Marketing Manager, Operations Manager, Consultant, Entrepreneur",
      colleges: "IIMs, XLRI, ISB, Top B-Schools"
    },
    3: {
      name: "BCA",
      fullName: "Bachelor of Computer Applications",
      duration: "3 Years",
      students: "400+ Enrolled",
      details: "BCA is a 3-year undergraduate program focused on computer science and applications. It covers programming, databases, web development, software engineering, and IT management. Ideal for IT career aspirants.",
      overview: "Bachelor of Computer Applications (BCA) is a 3-year undergraduate program focused on computing and information technology. It provides students with skills in programming, web development, databases, and IT management.",
      specializations: [
        "Web Development",
        "Mobile App Development",
        "Database Management",
        "Cloud Computing",
        "Cybersecurity",
        "Data Science"
      ],
      eligibility: "12th Pass (Any Stream) with at least 45% marks",
      career: "Software Developer, Web Developer, Database Administrator, System Administrator, IT Consultant",
      colleges: "Top Private Colleges, University Departments"
    },
    4: {
      name: "HM",
      fullName: "Hotel Management",
      duration: "3 Years",
      students: "200+ Enrolled",
      details: "Hotel Management is a 3-year program preparing students for careers in hospitality. It covers hotel operations, food service, guest relations, event management, and tourism. Graduates work in 5-star hotels and resorts worldwide.",
      overview: "Hotel Management is a specialized 3-year program that trains professionals for the hospitality and tourism industry. It covers various aspects of hotel operations, customer service, and tourism management.",
      specializations: [
        "Front Office Management",
        "Housekeeping Management",
        "Food & Beverage Service",
        "Event Management",
        "Tourism Management",
        "Resort Management"
      ],
      eligibility: "12th Pass (Any Stream) with at least 50% marks",
      career: "Hotel Manager, Front Office Manager, Food & Beverage Manager, Event Manager, Resort Manager",
      colleges: "Institute of Hotel Management, Private Hospitality Colleges"
    },
    5: {
      name: "B.SC NURSING",
      fullName: "Bachelor of Science in Nursing",
      duration: "4 Years",
      students: "250+ Enrolled",
      details: "B.SC Nursing is a 4-year program that trains healthcare professionals. It includes theory and practical training in patient care, medical procedures, and health management. Students complete internships in reputed hospitals.",
      overview: "Bachelor of Science in Nursing (B.SC Nursing) is a 4-year program that trains compassionate healthcare professionals. It combines theoretical knowledge with hands-on clinical experience in leading hospitals.",
      specializations: [
        "Medical-Surgical Nursing",
        "Pediatric Nursing",
        "Psychiatric Nursing",
        "Community Health Nursing",
        "Obstetric Nursing"
      ],
      eligibility: "12th Pass (PCB) with at least 50% marks",
      career: "Registered Nurse, Hospital Staff Nurse, Community Health Nurse, Nursing Educator, Health Administrator",
      colleges: "Top Nursing Colleges, University Departments"
    },
    6: {
      name: "BPT",
      fullName: "Bachelor of Physiotherapy",
      duration: "4.5 Years",
      students: "180+ Enrolled",
      details: "BPT is a 4.5-year program including internship, training physiotherapists to rehabilitate patients with physical disabilities. It covers anatomy, physiology, rehabilitation techniques, and sports medicine.",
      overview: "Bachelor of Physiotherapy (BPT) is a 4.5-year program that trains healthcare professionals in rehabilitation and physical therapy. It combines theory with extensive practical training in hospitals and rehabilitation centers.",
      specializations: [
        "Orthopedic Physiotherapy",
        "Neurological Physiotherapy",
        "Sports Physiotherapy",
        "Cardiopulmonary Physiotherapy",
        "Pediatric Physiotherapy"
      ],
      eligibility: "12th Pass (PCB) with at least 50% marks",
      career: "Physiotherapist, Sports Therapist, Rehabilitation Specialist, Health Educator, Hospital Manager",
      colleges: "Top Physiotherapy Colleges, University Departments"
    },
    7: {
      name: "BA",
      fullName: "Bachelor of Arts",
      duration: "3 Years",
      students: "350+ Enrolled",
      details: "BA is a 3-year undergraduate program offering diverse subjects including History, Politics, Economics, Psychology, and Social Sciences. It develops critical thinking and communication skills.",
      overview: "Bachelor of Arts (BA) is a versatile 3-year undergraduate program offering diverse subjects in humanities and social sciences. It develops critical thinking, communication, and analytical skills.",
      specializations: [
        "History",
        "Political Science",
        "Economics",
        "Psychology",
        "Sociology",
        "Geography"
      ],
      eligibility: "12th Pass (Any Stream) with at least 45% marks",
      career: "Civil Service Officer, Journalist, Researcher, Teacher, Lawyer, Counselor",
      colleges: "University Colleges, Top Private Colleges"
    },
    8: {
      name: "B.SC",
      fullName: "Bachelor of Science",
      duration: "3 Years",
      students: "380+ Enrolled",
      details: "B.SC is a 3-year undergraduate program in Pure Sciences covering Physics, Chemistry, Biology, Mathematics, and Botany. It prepares students for research, teaching, and technical careers.",
      overview: "Bachelor of Science (B.SC) is a 3-year undergraduate program in pure sciences. It provides strong foundation in scientific principles and prepares students for research, teaching, or technical careers.",
      specializations: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Botany",
        "Zoology"
      ],
      eligibility: "12th Pass (PCM/PCB) with at least 50% marks",
      career: "Scientist, Researcher, Teacher, Laboratory Technician, Quality Analyst, Environmental Specialist",
      colleges: "University Departments, Top Science Colleges"
    }
  };

  const [course, setCourse] = useState<any>(location.state?.course || null);
  const [isLoading, setIsLoading] = useState(!course);

  useEffect(() => {
    if (!course) {
      fetchCourseDetail();
    }
  }, [id]);

  const fetchCourseDetail = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    } catch (error) {
      console.error("Error fetching course detail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigate_enquiry = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-12 bg-background flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Course not found</h2>
            <Button onClick={() => navigate("/courses")} className="gradient-accent">
              Back to Courses
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </button>

          {/* Course Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-start justify-between gap-8 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {course.fullName}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {course.details}
                </p>
              </div>
              <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Duration</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{course.duration}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Students</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{course.students}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Certification</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{course.name}</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="gradient-accent text-accent-foreground font-semibold px-8 py-6 text-lg"
              onClick={() => navigate_enquiry("/enquiry", { state: { courseName: course.name } })}
            >
              Get Free Consultation for {course.name}
            </Button>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">Course Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {course.overview}
                </p>
              </div>

              {/* Eligibility */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
                <p className="text-muted-foreground">{course.eligibility}</p>
              </div>

              {/* Specializations */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">Specializations</h2>
                <div className="grid grid-cols-2 gap-3">
                  {course.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Career Prospects */}
              <div className="bg-gradient-to-b from-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4">Career Prospects</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.career}
                </p>
              </div>

              {/* Top Colleges */}
              <div className="bg-gradient-to-b from-accent/5 to-primary/5 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4">Top Colleges</h3>
                <p className="text-muted-foreground text-sm">
                  {course.colleges}
                </p>
              </div>

              {/* Consultation CTA */}
              <Button
                size="lg"
                className="gradient-accent text-accent-foreground font-semibold w-full"
                onClick={() => navigate_enquiry("/enquiry", { state: { courseName: course.name } })}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
