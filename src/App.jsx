import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TrustedBySection from "./components/Companies/TrustedBySection";
import TalentTransformationSection from "./components/Services/TalentTransformationSection";
import LearningDevelopmentSection from "./components/Services/LearningDevelopmentSection";
import StatsSection from "./components/StatsSection/StatsSection";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import BlogCarousel from "./components/Blogs/BlogCarousel";
import TestimonialCarousel from "./components/Testimonials/TestimonialCarousel";
import FaqSection from "./components/Faq/FaqSection";
import ContactPage from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ChroPanelSection from "./components/VideoPlayer/VideoPlayer";
import Contact from "./icons/Contact";
import Email from "./icons/Email";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";
import { Location } from "./icons/Location";
import Logo from "./icons/Logo";
import LogoIcon from "./icons/LogoIcon";
import { MainLogo } from "./icons/MainLogo";
import MessageSquare from "./icons/MessageSquare";
import { Phone } from "./icons/Phone";
import { Xlogo } from "./icons/Xlogo";
import User from "./icons/User";
import { Mail } from "./icons/Mail";

function App() {
  return (
    <div className="App">
      <Banner />
      <ChroPanelSection />
      <TrustedBySection />
      <div className="pt-12 bg-transparent" style={{
          background: `linear-gradient(87.74deg, #050A1D 1.72%, #080A13 98.22%), 
                    linear-gradient(49.31deg, rgba(0, 0, 0, 0.2) -3.28%, rgba(253, 81, 21, 0.2) -3.27%, rgba(0, 0, 0, 0) 76.93%)`,
        }}>
        <TalentTransformationSection />
        <LearningDevelopmentSection />
      </div>
      <StatsSection />
      <WhatWeDo />
      <TestimonialCarousel />
      <BlogCarousel />
      <div className="faq-section">
        <FaqSection />
      </div>
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
