import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBare from "../components/navbare";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <NavBare />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default Home;
