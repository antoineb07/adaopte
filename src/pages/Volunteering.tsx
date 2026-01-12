import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import HeroVolunteering from "../components/HeroVolunteering";
import VolunteerForm from "../components/VolunteerForm";

function Volunteering() {
  return (
    <>
      <NavBar />
      <HeroVolunteering />
      
      <div className="relative -mt-20 z-20">
        <VolunteerForm />
      </div>

      <Footer />
    </>
  );
}

export default Volunteering;