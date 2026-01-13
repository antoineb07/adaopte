import Button from "./Button";
import { Link } from "react-router-dom";


export default function ReadyToALife() {
  return (
    <nav className="ready-to-a-life pb-5 md:pb-15 md:pt-10 bg-primary">
      <h2 className="font-heading items-center flex justify-center text-xl md:text-6xl pb-10">
        PRÊT•E À CHANGER UNE VIE?
      </h2>
      <p className="text-deep-grey text-center text-xs md:text-xl pb-10">
        Adoptez, parrainez, soutenez. Chaque geste compte. Que vous ouvriez
        votre porte ou votre coeur,
        <br /> vous pouvez offrir une seconde chance à un animal abandonné.
      </p>
      <nav className="btn flex justify-center gap-6">
        <div className="btnadop">
          <Link to="/research">
            <Button variant="primary" size="responsive">Adopter un animal</Button>
          </Link>
        </div>
        <div className="btnDon">
          <Link to="">
            <Button variant="secondary" size="responsive">Faire un don 🫶</Button>
          </Link>
        </div>
        <div className="btnVolunteering">
          <Link to="/volunteering">
            <Button variant="accent" size="responsive">Devenir bénévole</Button>
          </Link>
        </div>
      </nav>
    </nav>
  );
}
