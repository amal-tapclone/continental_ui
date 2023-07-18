import React from "react";
import "../global.css";
import Header from "../Components/Header/Header";
import Destination from "../Components/Destination/Destination";

const Index = () => {
  return (
    <>
      <div className="mainWrapper">
        <Header />
        <Destination />
      </div>
    </>
  );
};

export default Index;
