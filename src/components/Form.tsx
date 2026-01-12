export default function VolunteerForm() {
  return (
    <div className="px-4 pb-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 font-heading">
            FORMULAIRE D'INSCRIPTION
          </h2>

          <p className="text-center text-gray-600 mb-8 text-sm">
            Remplissez ce formulaire pour rejoindre notre réseau de bénévoles.
            Nous vous contacterons rapidement pour vous présenter les prochaines
            étapes.
          </p>

          <form className="space-y-6">
            {/* Prénom et Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Adresse email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Ville et Code postal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ville <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Votre ville"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Code postal <span className="text-red-500">*</span>
                </label>
                <input
                  id="zipcode"
                  type="text"
                  placeholder="Code postal"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Disponibilités */}
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Disponibilités <span className="text-red-500">*</span>
              </label>
              <select
                id="availability"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Votre motivation <span className="text-red-500">*</span>
              </label>
              <textarea
                id="motivation"
                rows={5}
                placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
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
