import React from "react";
import ImageSlider from "../components/Home/Slider";
import Orchids from "../components/Orchids/Orchids";
import About from "../components/Home/About";
import Photo3 from "../components/Home/Photo3";
import OrchidProcess from "../components/App/OrchidProcess";
import ThemeWrapper from "../components/ThemeWrapper";

const Home = () => {
  return (
    <ThemeWrapper>
      <ImageSlider />
      <About />
      <Photo3 />
    </ThemeWrapper>
  );
};

export default Home;
