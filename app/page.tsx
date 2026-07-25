import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import EthicalFraming from '@/components/EthicalFraming'
import Charter from '@/components/Charter'
import LegalFramework from '@/components/LegalFramework'
import ExistingCharters from '@/components/ExistingCharters'
import PledgeForm from '@/components/PledgeForm'
import Petition from '@/components/Petition'
import MediaKit from '@/components/MediaKit'
import Sources from '@/components/Sources'
import FAQ from '@/components/FAQ'
import Share from '@/components/Share'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <EthicalFraming />
        <Charter />
        <LegalFramework />
        <ExistingCharters />
        <PledgeForm />
        <Petition />
        <MediaKit />
        <Sources />
        <FAQ />
        <Share />
      </main>
      <Footer />
    </>
  )
}
