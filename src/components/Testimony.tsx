export default function Testimony() {
  return (
    <nav className="md:pb-8 pt-6 md:pt-15 bg-light">
      <h2 className="font-heading items-center flex justify-center text-xl md:text-6xl">
        Témoignages de bénévoles
      </h2>
      <p className=" mx-auto max-w-3xl text-center text-xs md:text-xl text-deep-grey p-4 md:p-12 leading-relaxed">
        Découvrez ce que nos bénévoles partagent de leur expérience avec Adaopte
      </p>
      <div className="felx justify-center">
        <div className="shadow-lg bg-primary p-5 m-5 md:p-10 md:m-10 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
          <img
            src="/images/omid-armin-yisZonvqh54-unsplash.jpg"
            alt="photo femme bénévole"
            className="w-10 h-10 md:w-15 md:h-15 rounded-full object-cover"
          />
          <div>
          <h3 className="text-xs md:text-lg mx-auto font-bold ">
            Claire M.
          </h3>
          <p className="text-xs md:text-lg text-deep-grey">Bénévole depuis 1 an</p>
          </div>
          </div>

          <p className="italic text-xs md:text-lg">
            "J'ai commencé à m'occuper de Louna, une chienne timide arrivée au
            refuge. Petit à petit, elle m'a fait confiance. Aujourd'hui, elle a
            été adoptée, mais je garde un souvenir inoubliable de notre
            complicité. Être bénévole chez Adaopte, c'est offrir de l'amour... et
            en recevoir énormément."
          </p>
        </div>
      </div>

      <div className="felx justify-center">
        <div className="shadow-lg bg-primary p-5 m-5 md:p-10 md:m-10  rounded-lg">
            <div className="flex items-start gap-6 mb-6">
          <img
            src="/images/christian-buehner-DItYlc26zVI-unsplash.jpg"
            alt="photo homme bénévole"
            className="w-10 h-10 md:w-15 md:h-15  rounded-full object-cover"
          />
          <div>
          <h3 className="text-xs md:text-lg mx-auto title-etape font-bold ">
            Juan R.
          </h3>
          <p className="text-xs md:text-lg text-deep-grey">Bénévole depuis 8 mois</p>
          </div>
          </div>

          <p className="italic text-xs md:text-lg">
            "Je voulais m'investir concrètement pour une cause qui me tient à coeur. Avec Adaopte, j'ai découvert le refuge, les histoires de chaque animal, et une équipe soudée. Marcher avec les chiens, jouer avec les chats, les voir progresser... C'est profondément gratifiant."
          </p>
        </div>
      </div>
    </nav>
  );
}
