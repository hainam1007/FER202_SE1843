import React from "react";
import ImageSlider from "../components/Home/Slider";
import Orchids from "../components/Orchids/Orchids";
import ImagePhoto2 from "../components/Contact/Photo2";
import FormContact from "../components/Contact/FormContact";
import OurContact from "../components/Contact/OurContact";
import ThemeWrapper from "../components/ThemeWrapper";

const Contact = () => {
  return (
    <ThemeWrapper>
      <ImagePhoto2 />
      <OurContact />
      <FormContact />
    </ThemeWrapper>
  );
};

export default Contact;
