export default function MediaKit() {
  return (
    <section id="medias" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Espace médias</h2>
            <p className="text-lg text-gray-700 mb-6">
              Vous êtes journaliste, animateur ou influenceur local ? Voici un kit prêt à l’emploi
              pour relayer la campagne.
            </p>

            <h3 className="font-bold text-lg mb-3">Pitch email (100 mots)</h3>
            <blockquote className="border-l-4 border-ethic-red pl-4 italic text-gray-700 mb-6">
              Après la publication d’une étude des Hospices Civils de Lyon montrant une explosion
              des traumatismes crâniens graves chez les adolescents en trottinette électrique (cas
              multipliés par 25 en cinq ans), un collectif de citoyens lance la « Charte de la
              Trottinette Éthique » à Lyon. Cette campagne propose une charte de conduite
              responsable, une pétition et des propositions locales. Seriez-vous intéressés pour en
              parler à l’antenne ou dans vos colonnes ?
            </blockquote>

            <h3 className="font-bold text-lg mb-3">Idées d’objets d’email</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>▸ À Lyon, des citoyens lancent une charte de la « Trottinette Éthique »</li>
              <li>▸ De la trottinette débridée à la trottinette responsable</li>
              <li>▸ Trottinettes : des Lyonnais proposent un code éthique pour protéger les enfants</li>
            </ul>
          </div>

          <div className="bg-ethic-gray p-6 md:p-8 rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Chiffres clés à retenir</h3>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="text-ethic-red font-black">1</span>
                <span>1 cas en 2021 → 25 cas en 2025 de traumatismes crâniens graves pédiatriques (HCL).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ethic-red font-black">2</span>
                <span>20 admissions mensuelles depuis avril 2026 au service de déchocage de Bron.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ethic-red font-black">3</span>
                <span>68,2 % des accidents sans autre véhicule impliqué.</span>
              </li>
            </ul>

            <h3 className="font-bold text-xl mb-4">Contacts communautaires suggérés</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['r/Lyon', 'r/France', 'Facebook Lyon', 'RadioScoop', 'Le Progrès', 'LyonMag'].map(
                (label) => (
                  <span
                    key={label}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <a
              href="/media-kit.md"
              download
              className="inline-flex items-center px-6 py-3 bg-ethic-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
            >
              Télécharger le kit média (.md)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
