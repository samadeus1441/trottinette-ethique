export default function EthicalFraming() {
  return (
    <section id="ethique" className="py-20 bg-ethic-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Pourquoi parler d’<span className="text-ethic-red">éthique</span> ?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Dans plusieurs domaines, l’adjectif « éthique » requalifie une pratique potentiellement
              risquée en l’encadrant par des règles consenties. L’éthique, c’est l’autolimitation
              choisie.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">🛴</div>
                <div>
                  <h4 className="font-bold">Engagement civique, pas moralisation</h4>
                  <p className="text-sm text-gray-400">
                    « Je choisis » plutôt que « tu dois ». Le signataire est un citoyen responsable,
                    pas un censeur.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h4 className="font-bold">Universel et inclusif</h4>
                  <p className="text-sm text-gray-400">
                    La charte s’adresse à tous : jeunes, parents, salariés, retraités, quel que soit
                    le quartier.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🦁</div>
                <div>
                  <h4 className="font-bold">Fierté lyonnaise</h4>
                  <p className="text-sm text-gray-400">
                    Pour des quais du Rhône, des pentes de la Croix-Rousse et des places partagées
                    en sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <blockquote className="text-2xl md:text-3xl font-black italic leading-tight mb-6">
              « On peut aimer la trottinette et vouloir la pratiquer de manière civile. »
            </blockquote>
            <p className="text-gray-400">
              La Trottinette Éthique, ce n’est pas une interdiction de plus. C’est une fierté
              partagée.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
