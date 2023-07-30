import React from "react";
import HeaderContact from "../Components/HeaderContact/HeaderContact";
import GetInTouchForm from "../Components/GetInTouchForm/GetInTouchForm";
import ContactDetails from "../Components/ContactDetails/ContactDetails";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";

function Contact() {
  return (
    <div className="mainWrapper">
      <HeaderContact />
      <GetInTouchForm />  
      <ContactDetails />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Contact;
