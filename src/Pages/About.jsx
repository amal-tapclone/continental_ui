import React from "react";
import HeaderAbout from "../Components/HeaderAbout/HeaderAbout";
import useScrollToTop from "../Hooks/useScrollToTop";
import Overseas from "../Components/Overseas/Overseas";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogSection from "../Components/BlogSection/BlogSection";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";
import OurVision from "../Components/OurVision/OurVision";
import OurMission from "../Components/OurMission/OurMission";

const About = () => {
  useScrollToTop();
  return (
    <div className="mainWrapper">
      <HeaderAbout />
      <Overseas />
      <WhyChooseUs />
      <OurVision />
      <OurMission />
      <Testimonials />
      <BlogSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default About;
