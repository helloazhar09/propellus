import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/navbar";
import BenefitsFeatures from "@/app/components/TravelAgent/BenefitFeatures";
import FAQ from "@/app/components/TravelAgent/faq";
import ProblemSolutionSection from "@/app/components/TravelAgent/ProblemSolutionSection";
import TravelAgentLove from "@/app/components/TravelAgent/travelagentslove";
import HeroSection from "@/app/components/TravelAgent/travelbanner";
import VisaProcessingSection from "@/app/components/TravelAgent/visaProcessSection";
import VisaSteps from "@/app/components/TravelAgent/visaSteps";


const TravelAgentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisaProcessingSection />
      <ProblemSolutionSection />
      <BenefitsFeatures />
      <VisaSteps />
      <TravelAgentLove />
      <FAQ />
      <Footer />
    </div>
  );
};

export default TravelAgentsPage;
