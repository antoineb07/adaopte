import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBare from "../components/Navbare";
import Masonry from "../components/Masonry";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <NavBare />
      <Hero />
      <Masonry />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default Home;
