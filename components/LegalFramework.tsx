export default function LegalFramework() {
  return (
    <section id="cadre-legal" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          Cadre légal national
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-ethic-gray p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Plan national 2023</h3>
            <p className="text-gray-700 mb-4">
              Le 29 mars 2023, Clément Beaune a présenté un plan pour mieux réguler les
              trottinettes électriques, articulé autour de trois objectifs : protéger, sensibiliser
              et responsabiliser.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>▸ Âge minimum relevé de 12 à 14 ans</li>
              <li>▸ 135 € pour transport de passager ou débridage</li>
              <li>▸ 1 500 € pour un engin dépassant 25 km/h</li>
              <li>▸ Feux stop / clignotants obligatoires</li>
              <li>▸ Équipement rétro-réfléchissant la nuit</li>
            </ul>
          </div>

          <div className="bg-ethic-gray p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Code de la route — EDPM</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>Voies :</strong> interdiction des trottoirs, circulation sur pistes
                cyclables ou routes limitées à 50 km/h en agglomération.
              </li>
              <li>
                <strong>Usage :</strong> strictement individuel, pas de passager.
              </li>
              <li>
                <strong>Équipement :</strong> bridage à 25 km/h, assurance obligatoire.
              </li>
              <li>
                <strong>Comportement :</strong> interdiction de téléphone tenu en main, d’écouteurs
                ou de conduite sous l’effet de l’alcool.
              </li>
              <li>
                <strong>Casque :</strong> recommandé, mais pas obligatoire en agglomération sauf
                arrêté local.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 border-l-4 border-ethic-red bg-red-50 rounded-r-xl">
          <p className="text-gray-800">
            <strong>Le fossé entre la loi et la réalité :</strong> malgré ces règles, le débridage,
            la double montée et la circulation sur les trottoirs restent fréquents à Lyon. C’est
            précisément ce vide que la charte citoyenne cherche à combler par l’engagement
            volontaire.
          </p>
        </div>
      </div>
    </section>
  )
}
