export default function Hero() {
  return (
    <section
      aria-label="Section principale de présentation"
      className="relative h-125 w-full bg-[url('./images/background.jpg')] bg-cover bg-center bg-no-repeat py-24"
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
          Donnons-leur autant qu'ils nous apportent
        </h1>

        <p className="max-w-2xl text-base sm:text-lg">
          Chaque jour, des milliers d'animaux attendent une famille aimante.
          Trouvez votre compagnon idéal parmi nos animaux disponibles à
          l'adoption.
        </p>
      </div>
    </section>
  );
}
