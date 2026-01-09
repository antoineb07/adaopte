import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Masonry from "../components/Masonry";
import HowItWorks from "../components/HowItWorks";
import ReadyToALife from "../components/ReadyToALife";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Masonry />
      <HowItWorks />
      <ReadyToALife />
      <Footer />
    </>
  );
}

export default Home;
