const stats = [
  {
    value: '×25',
    label: 'Multiplication des traumatismes crâniens graves chez les enfants entre 2021 et 2025 (HCL).',
  },
  {
    value: '20',
    label: 'Admissions mensuelles depuis avril 2026 au service de déchocage de l&apos;hôpital Femme Mère Enfant de Bron.',
  },
  {
    value: '68%',
    label: 'Des accidents de trottinette se produisent sans qu&apos;un autre véhicule ne soit impliqué.',
  },
  {
    value: '1',
    label: 'Seul enfant portait un casque dans la cohorte HCL étudiée.',
  },
]

export default function Stats() {
  return (
    <section id="constat" className="py-20 bg-ethic-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Le constat</h2>
            <p className="text-lg text-gray-700 mb-6">
              Les trottinettes électrices ont envahi l&apos;espace public lyonnais. Avec elles, une
              explosion des accidents graves, en particulier chez les adolescents. Les Hospices
              Civils de Lyon tirent la sonnette d&apos;alarme.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-ethic-red font-bold">▸</span>
                <span>
                  <strong>Juin 2026 :</strong> un homme de 43 ans perd la vie avenue du 25e régiment
                  de Tirailleurs Sénégalais.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ethic-red font-bold">▸</span>
                <span>
                  <strong>Mai 2026 :</strong> incendie majeur rue Lacouture à Bron, immeuble
                  évacué.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-ethic-red font-bold">▸</span>
                <span>
                  <strong>Rhône 2019 :</strong> 1 186 accidents de trottinettes recensés, 1 197
                  victimes.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-black text-ethic-red mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
