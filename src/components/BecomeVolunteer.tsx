export default function BecomeVolunteer() {
  return (
    <nav className="howItWorks pb-8 pt-15 ">
      <h2 className="title font-bold font-heading items-center flex justify-center text-6xl">
        Pourquoi devenir bénévole ?
      </h2>
      <p className=" mx-auto max-w-3xl text-center text-xl text-deep-grey p-12 leading-relaxed">
        Être bénévole chez Adaopte, c'est bien plus qu'un coup de main : c'est un engagement du coeur, qui change des vies - humaines et animales.
      </p>
      <div className="flex justify-between gap-3 align-center text-center mx-15 ">
        <div className="etape1 shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">🌱</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            Agir concrètement pour le bien être animal
          </h3>
          <p>
            Chaque geste compte : un regard, une caresse, une balade... Vous
            contribuez à redonner confiance aux animaux abandonés et à leur
            offrir une seconde chance.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">🧠</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            Développer des
            compétences précieuses
          </h3>
          <p>
            Apprenez à mieux comprendre les comportements animaux, renforcez
            votre patience, votre sens de l'observation et vitre capacité à
            prendre soin.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">👥</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            Rejoindre une communauté engagée
          </h3>
          <p>
            Intégrez un réseau solidaire de passionné・e・s, participez à des actions collectives et partagez des moments forts autour d'une cause essentielle.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">🌟</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            Donner du sens à votre temps libre
          </h3>
          <p>
         En vous impliquant chez Adaopte, vous transformez votre temps en véritable acte d'amour, de respect et de solidarité envers les animaux.
          </p>
        </div>
      </div>
    </nav>
  );
}
