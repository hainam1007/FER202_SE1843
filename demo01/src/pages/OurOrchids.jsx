import React from "react";
import ImageSlider from "../components/Home/Slider";
import Orchids from "../components/Orchids/Orchids";
import ImagePhoto from "../components/Orchids/Photo";
import ThemeWrapper from "../components/ThemeWrapper";

const OurOrchids = () => {
  return (
    <ThemeWrapper>
      <ImagePhoto />
      <Orchids />
    </ThemeWrapper>
  );
};

export default OurOrchids;
