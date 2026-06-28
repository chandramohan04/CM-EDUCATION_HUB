import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import About from "@/components/About";
import WhoWeAre from "@/components/WhoWeAre";
import BSCC from "@/components/BSCC";
import IITNITTable from "@/components/IITNITTable";
import AbroadMBBS from "@/components/AbroadMBBS";
import WhyChooseUs from "@/components/WhyChooseUs";
import TagCloud from "@/components/TagCloud";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <Courses />
      <About />
      <WhoWeAre />
      <div id="bscc">
        <BSCC />
      </div>
      <div id="colleges-table">
        <IITNITTable />
      </div>
      <div id="abroad-mbbs">
        <AbroadMBBS />
      </div>
      <WhyChooseUs />
      <TagCloud />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
