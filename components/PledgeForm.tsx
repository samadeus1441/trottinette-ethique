'use client'

import { useEffect, useState } from 'react'

interface Signature {
  prenom: string
  nom: string
  commune: string
  statut: string
  date: string
}

export default function PledgeForm() {
  const [count, setCount] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    commune: '',
    statut: 'citoyen',
  })

  useEffect(() => {
    const stored = localStorage.getItem('trottinette-ethique-signatures')
    if (stored) {
      const signatures: Signature[] = JSON.parse(stored)
      setCount(signatures.length)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const stored = localStorage.getItem('trottinette-ethique-signatures')
    const signatures: Signature[] = stored ? JSON.parse(stored) : []
    signatures.push({ ...form, date: new Date().toISOString() })
    localStorage.setItem('trottinette-ethique-signatures', JSON.stringify(signatures))
    setCount(signatures.length)
    setSubmitted(true)
    setForm({ prenom: '', nom: '', commune: '', statut: 'citoyen' })
  }

  return (
    <section id="engagement" className="py-20 bg-ethic-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Je m’engage</h2>
            <p className="text-lg text-gray-300 mb-6">
              Signer cette charte, c’est afficher publiquement son choix d’une trottinette
              responsable. Chaque signature renforce le poids de notre démarche auprès des médias
              et des décideurs.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-ethic-red">{count}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide font-bold">
                signatures<br />collectées
              </div>
            </div>
          </div>

          <div className="bg-white text-ethic-black p-6 md:p-8 rounded-2xl shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🛴</div>
                <h3 className="text-2xl font-black mb-2">Merci pour votre engagement !</h3>
                <p className="text-gray-600 mb-6">
                  Votre signature compte. Partagez la charte autour de vous pour amplifier l’impact.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-ethic-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
                >
                  Signer à nouveau
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-bold mb-1">
                      Prénom
                    </label>
                    <input
                      id="prenom"
                      required
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ethic-red"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-bold mb-1">
                      Nom
                    </label>
                    <input
                      id="nom"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ethic-red"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="commune" className="block text-sm font-bold mb-1">
                    Commune / quartier
                  </label>
                  <input
                    id="commune"
                    required
                    value={form.commune}
                    onChange={(e) => setForm({ ...form, commune: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ethic-red"
                    placeholder="Lyon 7e, Villeurbanne, Bron..."
                  />
                </div>
                <div>
                  <label htmlFor="statut" className="block text-sm font-bold mb-1">
                    Vous êtes
                  </label>
                  <select
                    id="statut"
                    value={form.statut}
                    onChange={(e) => setForm({ ...form, statut: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ethic-red"
                  >
                    <option value="citoyen">Citoyen(ne)</option>
                    <option value="usager">Usager de trottinette</option>
                    <option value="parent">Parent</option>
                    <option value="enseignant">Enseignant(e)</option>
                    <option value="elu">Élu(e) / agent public</option>
                    <option value="pro">Professionnel(le) de la mobilité</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-ethic-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Signer la charte
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Les données sont stockées localement sur votre navigateur. Aucune information
                  n’est transmise à un serveur.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
