import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charte de la Trottinette Éthique — Lyon',
  description:
    'À Lyon, la Charte de la Trottinette Éthique propose un code citoyen pour sécuriser les trottinettes électriques, après l\'alerte des HCL sur l\'explosion des traumatismes chez les enfants.',
  keywords: [
    'trottinette électrique Lyon accident',
    'charte trottinette Lyon',
    'trottinette éthique',
    'débridage trottinette Lyon',
    'accident trottinette HCL',
  ],
  openGraph: {
    title: 'Charte de la Trottinette Éthique — Lyon',
    description:
      'Un code citoyen pour des trottinettes électriques responsables à Lyon.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Qu\'est-ce que la Trottinette Éthique ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'La Trottinette Éthique est une charte citoyenne qui invite les usagers de trottinettes électriques à Lyon à adopter des comportements responsables : respect des vitesses, port du casque, respect des piétons, stationnement ordonné, etc.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Pourquoi signer la charte du Trottinetteur Responsable à Lyon ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Signer la charte, c\'est afficher son engagement pour un usage responsable de la trottinette électrique et soutenir une campagne locale de sensibilisation après l\'alerte des HCL sur l\'augmentation des accidents graves.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Que prévoit la loi française pour les trottinettes électriques ?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Le plan national de 2023 relève l\'âge minimum à 14 ans, interdit le transport de passager, le débridage et limite la vitesse à 25 km/h. Il renforce aussi les sanctions : jusqu\'à 1 500 € pour un engin débridé.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-ethic-black">{children}</body>
    </html>
  )
}
