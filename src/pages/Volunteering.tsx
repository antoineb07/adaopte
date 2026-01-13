import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import HeroVolunteering from "../components/HeroVolunteering";
import BecomeVolunteer from "../components/BecomeVolunteer";
import VolunteerForm from "../components/VolunteerForm";
import Testimony from "../components/Testimony";
import AnyQuestion from "../components/AnyQuestion";
import BottomNav from "../components/BottomNav";
import TopBarMobile from "../components/TopBarMobile";

function Volunteering() {
  return (
    <>
      <NavBar />
      <TopBarMobile />
      <HeroVolunteering />
      <div className="relative -mt-32 z-20">
      <VolunteerForm />
      </div>
      <BecomeVolunteer />
      <Testimony />
      <AnyQuestion />
      <BottomNav />
      <Footer />
    </>
  );
}

export default Volunteering;