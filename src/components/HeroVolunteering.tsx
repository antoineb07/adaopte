export default function HeroVolunteering() {
  return (
    <section
      aria-label="Section principale de présentation"
      className="relative h-125 w-full bg-[url('/alin-luna-8LfPXM6abRk-unsplash.jpg')] bg-cover bg-center bg-no-repeat py-24"
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
          Devenir bénévole
        </h1>

        <p className="max-w-2xl text-base sm:text-lg whitespace-normal">
          Offrez votre temps, changez des vies. Chez adaopte, chaque bénévole
          contribue à redonner espoir aux animaux en attente d'un foyer.
        </p>
      </div>
    </section>
  );
}
