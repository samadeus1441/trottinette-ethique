export default function ExistingCharters() {
  return (
    <section id="chartes-existantes" className="py-20 bg-ethic-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
          Les chartes existantes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Lyon — Charte de bonne conduite (2019)</h3>
            <p className="text-gray-700 mb-4">
              Signée avec les opérateurs de trottinettes en libre-service, cette charte impose :
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>▸ Bridage technique selon les secteurs</li>
              <li>▸ Stationnement interdit sur les places emblématiques</li>
              <li>▸ Maintenance et enlèvement des engins défectueux</li>
              <li>▸ Assurance pour dommages corporels et matériels</li>
              <li>▸ Cooperation lors des grands événements lyonnais</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Paris — Charte des opérateurs (2019)</h3>
            <p className="text-gray-700 mb-4">
              Modèle pionnier qui a inspiré la charte nationale du plan Beaune :
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>▸ Bridage automatique et identification des engins</li>
              <li>▸ Limitation des flottes et zones de stationnement dédiées</li>
              <li>▸ Partage des données d’usage avec les collectivités</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">
            Ces chartes s’adressent aux <strong>opérateurs</strong>. Aucune ne s’adresse directement
            aux <strong>usagers propriétaires</strong> de trottinettes. La Charte du Trottinetteur
            Responsable comble ce vide.
          </p>
        </div>
      </div>
    </section>
  )
}
