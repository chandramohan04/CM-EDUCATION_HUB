import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const colleges = [
  {
    id: "noida-international-university",
    name: "Noida International University",
    location: "Greater Noida, Uttar Pradesh",
    description:
      "A private university offering strong programs in engineering, management, law, pharmacy, and architecture.",
    details:
      "Noida International University emphasizes industry partnerships, modern campus facilities, and practical learning for career-ready graduates.",
  },
  {
    id: "maharishi-markandeshwar-university",
    name: "Maharishi Markandeshwar University",
    location: "Ambala, Haryana",
    description:
      "A leading private university known for engineering, medical, pharmacy, management, and law courses.",
    details:
      "Maharishi Markandeshwar University provides strong academic infrastructure, campus research labs, and placements across core industries.",
  },
  {
    id: "shobhit-university",
    name: "Shobhit University",
    location: "Meerut, Uttar Pradesh",
    description:
      "A deemed university offering programs in engineering, law, management, agriculture, and skill-based education.",
    details:
      "Shobhit University focuses on practical education, entrepreneurship, and regional industry collaboration.",
  },
  {
    id: "gniot-noida",
    name: "GNIOT Noida",
    location: "Noida, Uttar Pradesh",
    description:
      "A popular institute for engineering and management with a strong placement record.",
    details:
      "GNIOT Noida offers B.Tech, MBA, MCA, and other professional programs with campus training and corporate tie-ups.",
  },
  {
    id: "niet-noida",
    name: "NIET Noida",
    location: "Noida, Uttar Pradesh",
    description:
      "Noida Institute of Engineering and Technology is known for its engineering and computer science programs.",
    details:
      "NIET Noida has a strong academic curriculum, practical labs, and regular industry interaction for students.",
  },
  {
    id: "vgu-jaipur",
    name: "VGU Jaipur",
    location: "Jaipur, Rajasthan",
    description:
      "Vivekananda Global University offers multidisciplinary programs across engineering, law, pharmacy, and management.",
    details:
      "VGU Jaipur emphasizes holistic learning, research, and international collaborations for modern careers.",
  },
  {
    id: "guru-kashi-university",
    name: "Guru Kashi University",
    location: "Talwandi Sabo, Punjab",
    description:
      "A private university offering engineering, agriculture, management, law, and pharmacy programs.",
    details:
      "Guru Kashi University blends traditional values with modern campus education and practical industry training.",
  },
  {
    id: "bharath-university",
    name: "Bharath University",
    location: "Chennai, Tamil Nadu",
    description:
      "A respected university known for engineering, architecture, pharmacy, and science programs.",
    details:
      "Bharath University focuses on research, global exposure, and strong placement support in technical fields.",
  },
  {
    id: "shri-ram-group-of-college",
    name: "Shri Ram Group of College",
    location: "Muzaffarnagar, Uttar Pradesh",
    description:
      "A group of professional colleges offering engineering, management, and career-focused programs.",
    details:
      "Shri Ram Group of College provides industry-aligned curriculum, campus mentoring, and good placement opportunities.",
  },
  {
    id: "mangalmay-group",
    name: "Mangalmay Group of Institution",
    location: "Greater Noida, Uttar Pradesh",
    description:
      "A premier group of institutions offering engineering, pharmacy, management, and professional courses.",
    details:
      "Mangalmay Group is recognized for quality education, modern infrastructure, research opportunities, and strong industry connections with 100+ recruiters visiting campus annually.",
  },
  {
    id: "gulzar-group",
    name: "Gulzar Group of Institution",
    location: "Khimsar, Rajasthan",
    description:
      "A leading educational group providing quality education in engineering, management, and technical fields.",
    details:
      "Gulzar Group emphasizes experiential learning, innovation, and entrepreneurship with dedicated placement cells and excellent corporate tie-ups.",
  },
  {
    id: "jbit-group",
    name: "JBIT Group of Institution",
    location: "Agra, Uttar Pradesh",
    description:
      "A renowned institute group offering excellence in engineering, IT, and management education.",
    details:
      "JBIT Group provides cutting-edge curriculum, hands-on training, certified faculty, and consistent placements in top companies across the IT and engineering sectors.",
  },
  {
    id: "ganga-institute",
    name: "Ganga Institute of Technology",
    location: "Kablana, Punjab",
    description:
      "A technical institute known for quality engineering programs and strong industry partnerships.",
    details:
      "Ganga Institute of Technology focuses on technical excellence, laboratory-based learning, and real-world project exposure with partnerships from leading tech companies.",
  },
  {
    id: "rit-roorkie",
    name: "RIT Roorkie",
    location: "Roorkie, Uttarakhand",
    description:
      "A prestigious engineering institute in Roorkie with focus on technical excellence and innovation.",
    details:
      "RIT Roorkie offers world-class engineering education, state-of-the-art facilities, research opportunities, and strong alumni network in the tech industry.",
  },
  {
    id: "gandhi-institute",
    name: "Gandhi Institute of Technology",
    location: "Hyderabad, Telangana",
    description:
      "A modern technical institution providing comprehensive engineering and technology programs.",
    details:
      "Gandhi Institute of Technology combines cutting-edge technology curriculum, industry collaboration, internship opportunities, and career counseling for holistic student development.",
  },
];

const Colleges = () => {
  const [collegesList, setCollegesList] = useState<any[]>(colleges);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/colleges");
      if (response.ok) {
        const data = await response.json();
        setCollegesList(data);
      }
    } catch (error) {
      console.error("Failed to fetch colleges:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Partner Colleges
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              College List & Details
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore the colleges we work with and learn more about their strengths, locations, and programs.
            </p>
          </div>

          <div className="grid gap-6">
            {collegesList.map((college) => (
              <section
                id={college.slug || college.id}
                key={college.slug || college.id}
                className="bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {college.name}
                    </h2>
                    <p className="text-sm uppercase tracking-[0.2em] text-accent mt-2">
                      {college.location}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="text-lg font-semibold text-foreground">Overview</p>
                  <p>{college.description}</p>
                  <p>{college.details}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Colleges;
