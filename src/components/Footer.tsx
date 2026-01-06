export default function Footer() {
  return (
    <footer className="bg-dark text-light ">
      <div className="grid grid-cols-3 justify-items-center text-center">
        <div>
          <h2 className="text-secondary font-heading text-2xl ">ADAOPTE</h2>
          <p>
            Notre mission est de trouver des foyers aimants pour chasue animal
            abandonnée et de promouvoir le bien-être animal
          </p>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-2xl">
            INFORMATIONS UTILES
          </h2>
          <p>FAQS</p>
          <p>Conseils d'adoption</p>
          <p>Nous contacter</p>
          <p>Mentions légales</p>
        </div>

        <div>
          <h2 className="text-secondary font-heading text-2xl">CONTACT</h2>
          <p>116 Rue du Faubourg Saint-Martin</p>
          <p>75010 Paris, France</p>
          <p>Email:contact@adaopte.fr</p>
          <p>Tél: +33 1 23 45 67 89</p>
        </div>
      </div>
    </footer>
  );
}
