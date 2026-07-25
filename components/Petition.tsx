export default function Petition() {
  return (
    <section id="petition" className="py-20 bg-ethic-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
            Pétition pour une campagne « Trottinette Éthique » à Lyon
          </h2>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              Nous, usagers de trottinettes, parents, habitants et citoyennes/citoyens de la
              métropole de Lyon, constatons une augmentation préoccupante des accidents graves et
              des traumatismes crâniens liés aux trottinettes électriques, en particulier chez les
              adolescents.
            </p>

            <h3 className="font-bold text-lg mb-3">Nous demandons à la Métropole de Lyon, à la Ville de Lyon et à l’État :</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
              <li>
                <strong>De rendre obligatoire le port du casque</strong> pour les usagers de
                trottinettes électriques de moins de 18 ans sur le territoire métropolitain, par
                arrêté local.
              </li>
              <li>
                <strong>De renforcer les contrôles de vitesse et de débridage</strong> dans les
                zones piétonnes et les axes accidentogènes, en particulier autour des établissements
                scolaires.
              </li>
              <li>
                <strong>De lancer une campagne de sensibilisation « Trottinette Éthique »</strong>{' '}
                dans les collèges, lycées et espaces publics, en s’appuyant sur la présente charte
                citoyenne.
              </li>
            </ol>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#engagement"
                className="inline-flex items-center justify-center px-6 py-4 bg-ethic-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
              >
                Soutenir la pétition
              </a>
              <a
                href="https://www.change.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border-2 border-ethic-black text-ethic-black font-bold rounded-full hover:bg-ethic-black hover:text-white transition-colors"
              >
                Voir sur Change.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
