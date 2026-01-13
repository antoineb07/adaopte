import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Masonry from "../components/Masonry";
import HowItWorks from "../components/HowItWorks";
import ReadyToALife from "../components/ReadyToALife";
import SearchBar from "../components/SearchBar";
import BottomNav from "../components/BottomNav";
import TopBarMobile from "../components/TopBarMobile";

function Home() {
  const navigate = useNavigate();

  const handleSearch = (type: string, location: string) => {
    navigate(`/research?type=${encodeURIComponent(type)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <>
      <NavBar />
      <TopBarMobile />
      <Hero />
      
      {/* SearchBar positionnée sur le Hero */}
      <div className="relative -mt-24 z-20 pb-12">
        <SearchBar 
          onSearch={handleSearch}
          onResetFilters={() => {}}
          showResultsCount={false}
        />
      </div>

      <Masonry />
      <HowItWorks />
      <ReadyToALife />
      <BottomNav />
      <Footer />
      
    </>
  );
}

export default Home;