import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Charter from '@/components/Charter'
import PledgeForm from '@/components/PledgeForm'
import Petition from '@/components/Petition'
import MediaKit from '@/components/MediaKit'
import Sources from '@/components/Sources'
import Share from '@/components/Share'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Charter />
        <PledgeForm />
        <Petition />
        <MediaKit />
        <Sources />
        <Share />
      </main>
      <Footer />
    </>
  )
}
