'use client'

const principles = [
  {
    title: 'Je respecte les limites de vitesse et je ne débride pas mon engin.',
    body: 'Je roule à 25 km/h maximum et j’adapte ma vitesse en fonction de la densité de piétons, des intersections et des conditions météorologiques.',
  },
  {
    title: 'Je porte un casque et je me rends visible.',
    body: 'Le soir et sur les axes rapides, je choisis le port du casque, d’un équipement rétro-réfléchissant et d’un éclairage fonctionnel.',
  },
  {
    title: 'Je roule seul sur ma trottinette.',
    body: 'Je n’embarque pas de passager, même sur de courtes distances, afin de ne pas compromettre la stabilité ni la sécurité de l’engin.',
  },
  {
    title: 'Je respecte les piétons et les cyclistes.',
    body: 'Je ralentis à l’approche des piétons, je ne slalome pas entre eux et je cède le passage lorsque la situation l’exige.',
  },
  {
    title: 'Je plie ma trottinette lorsque je pénètre dans un espace clos.',
    body: 'Dans les commerces, les halls, les transports ou les événements, je plie mon engin et le garde près de moi.',
  },
  {
    title: 'Je stationne de manière ordonnée.',
    body: 'Je gare ma trottinette contre un mur ou un mobilier dédié, sans gêner les poussettes, fauteuils roulants ni la circulation des piétons.',
  },
  {
    title: 'Je ne conduis pas sous l’effet de l’alcool ni de stupéfiants.',
    body: 'Je considère ma trottinette comme un véhicule à part entière et j’applique les mêmes règles de prudence que pour un deux-roues motorisé.',
  },
  {
    title: 'Je contribue à une culture de la Trottinette Éthique.',
    body: 'J’encourage mes proches à adopter ces pratiques et je participe à la diffusion de cette charte dans mon quartier, mon entreprise, mon école.',
  },
]

export default function Charter() {
  return (
    <section id="charte" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Charte du Trottinetteur Responsable
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En signant cette charte, je m’engage, en tant qu’usager de trottinette électrique à Lyon
            et dans sa métropole, à adopter une conduite éthique, responsable et respectueuse de
            l’espace public.
          </p>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center px-5 py-2.5 border-2 border-ethic-black text-ethic-black font-bold rounded-full hover:bg-ethic-black hover:text-white transition-colors"
          >
            Imprimer la charte
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="manifesto-principle"
              data-number={`0${index + 1}`}
            >
              <h3 className="text-lg font-bold mb-2 leading-snug">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
