export default function HowItWorks() {
  return (
    <nav className="howItWorks pb-8 pt-15 ">
      <h2 className="title font-heading items-center flex justify-center text-6xl">
        Comment ça marche ?
      </h2>
      <p className="texte font-heading text-center text-xl">
        adopter un animal est un engagement sérieux et a long terme. voici notre
        processus d'adoption en <br />
        quelques étapes simples.
      </p>
      <div className="Etape flex justify-between gap-3 align-center text-center mx-15 ">
        <div className="etape1 shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">🔍</h3>
          <h3 className="title-etape font-bold text-2xl mb-6">
            1.Trouver votre <br />
            compagnon
          </h3>
          <p>
            Parcourez notre base de données d'animaux disponible et utiliser nos
            filtres pour trouver celui qui correspond à votre mode de vie.
          </p>
        </div>
        <div className="etape2 shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">📝</h3>
          <h3 className="title-etape font-bold text-2xl mb-6">
            2.Remplir une <br />
            demande
          </h3>
          <p>
            Soumettez votre formulaire d'adoption pour l'animal qui vous
            intéresse. Nous examinons chaque demande avec soin
          </p>
        </div>
        <div className="etape3 shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">👋</h3>
          <h3 className="title-etape font-bold text-2xl mb-6">
            3. Rencontrez <br />
            l'animal
          </h3>
          <p>
            Visitez le refuge pour rencontrer l'animal et voir si vous êtes
            compatibles. C'est une étape essentielle du processus
          </p>
        </div>
        <div className="etape4 shadow-lg p-10 m-10 rounded-lg">
          <h3 className="emoji text-6xl mb-10">🏠</h3>
          <h3 className="title-etape font-bold text-2xl mb-6">
            4. Bienvenue à la <br />
            maison
          </h3>
          <p>
            Une fois votre demande approuvée, vous pouvez accueillir votre
            nouvel ami chez vous. Nous restons disponibles pour vous conseiller
          </p>
        </div>
      </div>
    </nav>
  );
}
