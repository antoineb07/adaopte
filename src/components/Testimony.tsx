export default function Testimony() {
  return (
    <nav className="howItWorks pb-8 pt-15 bg-light">
      <h2 className="title font-bold font-heading text-center text-6xl">
        Témoignages de bénévoles
      </h2>
      <p className=" mx-auto text-center text-l text-deep-grey p-12 leading-relaxed">
        Découvrez ce que nos bénévoles partagent de leur expérience avec Adaopte
      </p>
      <div className="felx justify-center">
        <div className="shadow-lg bg-primary p-10 m-10 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
          <img
            src="/images/omid-armin-yisZonvqh54-unsplash.jpg"
            alt="photo femme bénévole"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div>
          <h3 className=" mx-auto title-etape font-bold ">
            Claire M.
          </h3>
          <p className="text-deep-grey">Bénévole depuis 1 an</p>
          </div>
          </div>

          <p className="italic text-m">
            "J'ai commencé à m'occuper de Louna, une chienne timide arrivée au
            refuge. Petit à petit, elle m'a fait confiance. Aujourd'hui, elle a
            été adoptée, mais je garde un souvenir inoubliable de notre
            complicité. Être bénévole chez Adaopte, c'est offir de l'amour... et
            en recevoir énormément."
          </p>
        </div>
      </div>

      <div className="felx justify-center">
        <div className="shadow-lg bg-primary p-10 m-10 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
          <img
            src="/images/christian-buehner-DItYlc26zVI-unsplash.jpg"
            alt="photo homme bénévole"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div>
          <h3 className=" mx-auto title-etape font-bold ">
            Juan R.
          </h3>
          <p className="text-deep-grey">Bénévole depuis 8 mois</p>
          </div>
          </div>

          <p className="italic text-m">
            "Je voulais m'investir concrètement pour une cause qui me tient à coeur. Avec Adaopte, j'ai découvert le refuge, les hisroires de chaque animal, et une équipe soudée. Marcher avec les chiens, jouer avec les chats, les voir progresser... C'est profondément gratifiant."
          </p>
        </div>
      </div>
    </nav>
  );
}
