const faqs = [
  {
    question: 'Qu’est-ce que la Trottinette Éthique ?',
    answer:
      'C’est une charte citoyenne qui invite les usagers de trottinettes électriques à Lyon à adopter des comportements responsables : respect des vitesses, port du casque, respect des piétons, stationnement ordonné, etc.',
  },
  {
    question: 'Pourquoi signer la charte ?',
    answer:
      'Signer, c’est afficher son engagement pour un usage responsable et soutenir une campagne locale de sensibilisation après l’alerte des HCL sur l’augmentation des accidents graves.',
  },
  {
    question: 'Que dit la loi française ?',
    answer:
      'Le plan national de 2023 relève l’âge minimum à 14 ans, interdit le transport de passager, le débridage et limite la vitesse à 25 km/h. Il renforce aussi les sanctions : jusqu’à 1 500 € pour un engin débridé.',
  },
  {
    question: 'Le casque est-il obligatoire ?',
    answer:
      'Non, il n’est pas obligatoire en agglomération pour les trottinettes électriques, sauf arrêté local. C’est pourquoi notre pétition demande de l’imposer pour les moins de 18 ans à Lyon.',
  },
  {
    question: 'Comment participer si je n’ai pas de trottinette ?',
    answer:
      'Tout le monde peut signer en tant que citoyen, parent ou piéton. Vous pouvez aussi partager la charte dans vos réseaux et relayer le kit média.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-ethic-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-gray-200 open:ring-2 open:ring-ethic-red/20"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-lg">
                {faq.question}
                <span className="text-ethic-red text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-700 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
