import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Masonry from "../components/Masonry";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Masonry />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default Home;
