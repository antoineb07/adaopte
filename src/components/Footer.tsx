import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light ">
      <div className="grid grid-cols-3 gap-12 px-20 py-12 text-l leading-relaxed">
        <div>
          <h2 className="text-secondary font-heading text-3xl py-4">ADAOPTE</h2>
          <p>
            Notre mission est de trouver des foyers aimants pour chaque animal
            abandonnée et de promouvoir le bien-être animal.
          </p>

          <div className="flex gap-4 mt-6 ">
            <a className="rounded-full w-8 h-8 bg-deep-grey flex items-center justify-center" href="#">
              <FaFacebookF />
            </a>
            <a className="rounded-full w-8 h-8 bg-deep-grey flex items-center justify-center" href="#">
              <FaInstagram />
            </a>
            <a className="rounded-full w-8 h-8 bg-deep-grey flex items-center justify-center" href="#">
              <FaLinkedinIn />
            </a>
            <a className="rounded-full w-8 h-8 bg-deep-grey flex items-center justify-center" href="#">
              <FaTwitch />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-3xl py-4">
            INFORMATIONS UTILES
          </h2>
          <ul className="space-y-3 text-light-grey">
            <li>FAQS</li>
            <li>Conseils d'adoption</li>
            <li>Nous contacter</li>
            <li>Mentions légales</li>
          </ul>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-3xl py-4">CONTACT</h2>
          <p>116 Rue du Faubourg Saint-Martin</p>
          <p>75010 Paris, France</p>
          <p>Email:contact@adaopte.fr</p>
          <p>Tél: +33 1 23 45 67 89</p>
        </div>
      </div>
<div className="border-t border-y-deep-grey py-6 text-center text-s text-deep-grey">
  <p>© 2025 Adaopte. tous droits réservés.</p>
  <p>Ce site a été développé dans le casre d'un projet pour ADA Tech School.</p>

</div>

    </footer>
  );
}
