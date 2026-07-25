const sources = [
  {
    title: 'HCL — Étude Neurosurgery (juillet 2026)',
    description:
      'Explosion des traumatismes crâniens graves chez les enfants et adolescents en trottinette électrique.',
    href: 'https://www.hcl.fr/',
  },
  {
    title: 'Registre des victimes d’accidents de la circulation du Rhône',
    description: 'Données exhaustives sur les blessés de la route pris en charge à l’hôpital.',
    href: 'https://www.umrestte.fr/',
  },
  {
    title: 'Plan national trottinettes électriques — Clément Beaune (2023)',
    description:
      'Relèvement de l’âge à 14 ans, durcissement des sanctions, charte des opérateurs.',
    href: 'https://www.ecologie.gouv.fr/',
  },
  {
    title: 'Charte de bonne conduite — Ville de Lyon (2019)',
    description: 'Engagements des opérateurs de trottinettes en libre-service.',
    href: 'https://www.lyon.fr/',
  },
  {
    title: 'Santé publique France — Accidents d’EDP (2015-2019)',
    description: 'Évolution des victimes d’engins de déplacement personnel motorisés ou non.',
    href: 'https://www.santepubliquefrance.fr/',
  },
]

export default function Sources() {
  return (
    <section id="sources" className="py-20 bg-ethic-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">Sources et contexte</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sources.map((source) => (
            <a
              key={source.title}
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-ethic-red transition-colors group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-ethic-red transition-colors">
                {source.title}
              </h3>
              <p className="text-sm text-gray-600">{source.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
