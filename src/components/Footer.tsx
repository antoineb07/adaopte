import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light ">
      <div className="grid grid-cols-3 gap-4 px-4 py-1 text-sm md:gap-12 md:px-20 md:py-12 md:text-l md:leading-relaxed">
        <div>
          <h2 className="text-secondary font-heading text-l py-2 md:text-3xl md:py-4">
            ADAOPTE
          </h2>
          <p className="text-[8px] md:text-base md:leading-relaxed">
            Notre mission est de trouver des foyers aimants pour chaque animal
            abandonné et de promouvoir le bien-être animal.
          </p>

          <div className="flex gap-2 mt-4 md:gap-4 md:mt-6 ">
            <a
              className="rounded-full w-4 h-4 md:w-8 md:h-8 bg-deep-grey flex items-center justify-center text-[8px] md:text-base"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="rounded-full w-4 h-4 md:w-8 md:h-8 bg-deep-grey flex items-center justify-center text-[8px] md:text-base"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="rounded-full w-4 h-4 md:w-8 md:h-8 bg-deep-grey flex items-center justify-center text-[8px] md:text-base"
              href="#"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="rounded-full w-4 h-4 md:w-8 md:h-8 bg-deep-grey flex items-center justify-center text-[8px] md:text-base"
              href="#"
            >
              <FaTwitch />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-l py-2 md:text-3xl md:py-4">
            INFORMATIONS UTILES
          </h2>
          <ul className="space-y-1 md:space-y-3 text-light-grey text-[8px] md:text-base md:leading-relaxed">
            <li>FAQs</li>
            <li>Conseils d'adoption</li>
            <li>
              <a href="mailto:contact@adaopte.fr"> Nous contacter</a>
            </li>
            <li>Mentions légales</li>
          </ul>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-l py-2 md:text-3xl md:py-4">
            CONTACT
          </h2>
          <p className="text-[8px] md:text-base md:leading-relaxed">
            116 Rue du Faubourg Saint-Martin
          </p>
          <p className="text-[8px] md:text-base md:leading-relaxed">
            75010 Paris, France
          </p>
          <p className="text-[8px] md:text-base md:leading-relaxed">
            Email : contact@adaopte.fr
          </p>
          <p className="text-[8px] md:text-base md:leading-relaxed">
            Tél : +33 1 23 45 67 89
          </p>
        </div>
      </div>
      <div className="border-t border-y-deep-grey py-4 md:py-6 text-center text-[8px] md:text-sm md:leading-relaxed text-deep-grey">
        <p>© 2025 Adaopte. Tous droits réservés.</p>
        <p>
          Ce site a été développé dans le cadre d'un projet pour ADA Tech
          School.
        </p>
      </div>
    </footer>
  );
}
