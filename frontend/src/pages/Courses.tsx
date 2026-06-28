import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    courseId: 1,
    name: "B.Tech",
    fullName: "Bachelor of Technology",
    duration: "4 Years",
    students: "500+ Enrolled",
    description: "Bachelor of Technology in various specializations including CSE, ECE, Mechanical & more",
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
  {
    id: 2,
    courseId: 2,
    name: "MBA",
    fullName: "Master of Business Administration",
    duration: "2 Years",
    students: "300+ Enrolled",
    description: "Master of Business Administration - Advance your career with executive education",
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
  {
    id: 3,
    courseId: 3,
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "3 Years",
    students: "400+ Enrolled",
    description: "Bachelor of Computer Applications - Start your journey in IT & software development",
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
  {
    id: 4,
    courseId: 4,
    name: "HM",
    fullName: "Hotel Management",
    duration: "3 Years",
    students: "200+ Enrolled",
    description: "Learn hospitality management and prepare for careers in hotels & tourism",
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
  {
    id: 5,
    courseId: 5,
    name: "B.SC NURSING",
    fullName: "Bachelor of Science in Nursing",
    duration: "4 Years",
    students: "250+ Enrolled",
    description: "Bachelor of Science in Nursing - Join the noble healthcare profession",
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
  {
    id: 6,
    courseId: 6,
    name: "BPT",
    fullName: "Bachelor of Physiotherapy",
    duration: "4.5 Years",
    students: "180+ Enrolled",
    description: "Bachelor of Physiotherapy - Get training to rehabilitate patients",
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
  {
    id: 7,
    courseId: 7,
    name: "BA",
    fullName: "Bachelor of Arts",
    duration: "3 Years",
    students: "350+ Enrolled",
    description: "Bachelor of Arts - Explore diverse subjects in humanities and social sciences",
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
  {
    id: 8,
    courseId: 8,
    name: "B.SC",
    fullName: "Bachelor of Science",
    duration: "3 Years",
    students: "380+ Enrolled",
    description: "Bachelor of Science - Pure science courses including Physics, Chemistry, Mathematics",
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
];

const Courses = () => {
  const navigate = useNavigate();
  const [coursesList, setCoursesList] = useState<any[]>(courses);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/courses");
      if (response.ok) {
        const data = await response.json();
        setCoursesList(data);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Programs
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our{" "}
              <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose from a wide range of undergraduate and postgraduate programs designed to shape your future career.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesList.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {course.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="flex-grow" />
                <Button
                  onClick={() => navigate(`/course/${course.courseId || course.id}`, { state: { course } })}
                  className="gradient-accent text-accent-foreground font-semibold w-full"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
