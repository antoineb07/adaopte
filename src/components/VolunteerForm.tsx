export default function VolunteerForm() {
  return (
    <div className="px-4 pb-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-heading font-heading uppercase">
            Formulaire d'inscription
          </h2>

          <p className="text-center text-deep-grey mb-8 text-sm leading-relaxed">
            Remplissez ce formulaire pour rejoindre notre réseau de bénévoles.
            Nous vous contacterons rapidement pour vous présenter les prochaines
            étapes.
          </p>

          <form className="space-y-5">
            {/* Prénom et Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-heading mb-1.5"
                >
                  Prénom <span className="text-secondary">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
                  className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark placeholder:text-deep-grey bg-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-heading mb-1.5"
                >
                  Nom <span className="text-secondary">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Votre nom"
                  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
                  className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark placeholder:text-deep-grey bg-white"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-heading mb-1.5"
              >
                Adresse email <span className="text-secondary">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark placeholder:text-deep-grey bg-white"
                required
              />
            </div>

            {/* Ville et Code postal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-heading mb-1.5"
                >
                  Ville <span className="text-secondary">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Votre ville"
                  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$"
                  className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark placeholder:text-deep-grey bg-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-heading mb-1.5"
                >
                  Code postal <span className="text-secondary">*</span>
                </label>
                <input
                  id="zipcode"
                  type="text"
                  placeholder="Code postal"
                  pattern="^\d{5}$"
                  inputMode="numeric"
                  className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark placeholder:text-deep-grey bg-white"
                  required
                />
              </div>
            </div>

            {/* Disponibilités */}
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-heading mb-1.5"
              >
                Disponibilités <span className="text-secondary">*</span>
              </label>
              <select
                id="availability"
                className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all text-dark bg-white appearance-none cursor-pointer"
                required
              >
                <option value="">Sélectionnez vos disponibilités...</option>
                <option value="week">En semaine</option>
                <option value="weekend">Le week-end</option>
                <option value="both">Semaine et week-end</option>
                <option value="punctual">Ponctuellement</option>
              </select>
            </div>

            {/* Motivation */}
            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-heading mb-1.5"
              >
                Votre motivation <span className="text-secondary">*</span>
              </label>
              <textarea
                id="motivation"
                rows={5}
                placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte..."
                className="w-full px-4 py-2.5 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary resize-none transition-all text-dark placeholder:text-deep-grey bg-white"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-btn-accent hover:bg-opacity-90 text-primary font-semibold py-3 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Envoyer ma candidature
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
