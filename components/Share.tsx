'use client'

export default function Share() {
  const url = typeof window !== 'undefined' ? window.location.href : 'https://trottinette-ethique.vercel.app'
  const text =
    'Je viens de signer la Charte de la Trottinette Éthique à Lyon. Rejoins le mouvement pour une mobilité responsable !'

  const shareLinks = [
    {
      name: 'Twitter / X',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      color: 'bg-black',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'bg-blue-600',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-blue-700',
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodeURIComponent('Charte de la Trottinette Éthique — Lyon')}&body=${encodeURIComponent(text + '\n\n' + url)}`,
      color: 'bg-ethic-red',
    },
  ]

  return (
    <section id="partager" className="py-20 bg-ethic-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Partager la campagne</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Plus nous serons nombreux à afficher notre engagement, plus la charte aura d’impact
          médiatique et politique.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${link.color} text-white font-bold rounded-full hover:opacity-90 transition-opacity`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
