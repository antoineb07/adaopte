export default function HowItWorks() {
  return (
    <nav className="howItWorks pb-8 pt-15 ">
      <h2 className="font-heading items-center flex justify-center text-xl md:text-6xl">
        Comment ça marche ?
      </h2>
      <p className=" mx-auto max-w-3xl text-center text-xs md:text-xl text-deep-grey p-4 md:p-12 leading-relaxed">
        Adopter un animal est un engagement sérieux et à long terme. voici notre
        processus d'adoption en quelques étapes simples.
      </p>
      <div className="flex justify-between gap-3 align-center text-center mx-15 ">
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="text-6xl mb-10">🔍</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            1. Trouver votre compagnon
          </h3>
          <p>
            Parcourez notre base de données d'animaux disponibles et utilisez nos
            filtres pour trouver celui qui correspond à votre mode de vie.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="text-6xl mb-10">📝</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            2. Remplir une demande
          </h3>
          <p>
            Soumettez votre formulaire d'adoption pour l'animal qui vous
            intéresse. Nous examinons chaque demande avec soin.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="text-6xl mb-10">👋</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            3. Rencontrez l'animal
          </h3>
          <p>
            Visitez le refuge pour rencontrer l'animal et voir si vous êtes
            compatibles. C'est une étape essentielle du processus.
          </p>
        </div>
        <div className="shadow-lg p-10 m-10 rounded-lg">
          <h3 className="text-6xl mb-10">🏠</h3>
          <h3 className=" mx-auto title-etape font-bold text-2xl mb-6">
            4. Bienvenue à la maison
          </h3>
          <p>
            Une fois votre demande approuvée, vous pouvez accueillir votre
            nouvel ami chez vous. Nous restons disponibles pour vous conseiller.
          </p>
        </div>
      </div>
    </nav>
  );
}
