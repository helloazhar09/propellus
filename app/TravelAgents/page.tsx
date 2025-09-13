import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar";
import BenefitsFeatures from "../components/TravelAgent/BenefitFeatures";
import FAQ from "../components/TravelAgent/faq";
import ProblemSolutionSection from "../components/TravelAgent/ProblemSolutionSection";
import TravelAgentLove from "../components/TravelAgent/travelagentslove";
import TravelAgentsHero from "../components/TravelAgent/travelbanner";
import VisaProcessingSection from "../components/TravelAgent/visaProcessSection";
import VisaSteps from "../components/TravelAgent/visaSteps";

const TravelAgentsPage = () => {
  return (
    <div className="min-h-screen">
        <Navbar/>
      <TravelAgentsHero/>
      <VisaProcessingSection/>
      <ProblemSolutionSection/>
      <BenefitsFeatures/>
      <VisaSteps/>
      <TravelAgentLove/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default TravelAgentsPage;
