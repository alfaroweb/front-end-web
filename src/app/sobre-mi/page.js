import Image from 'next/image'
import Hero from './sections/01_Hero'
import About from './sections/02_About'
import Education from './sections/03_Education'
import Specialities from './sections/04_Specialities'
import PhilosophyAndAffiliations from './sections/05_PhilosophyAndAffiliations'
import { ContactForm } from '@/app/components/ContactForm'
import Affiliations from './sections/Affiliations'
import WhiteTopWaves from '/public/home/waves/white-top-waves.webp'
import WhiteBottomWaves from '/public/home/waves/white-bottom-waves.webp'
import GrayTopWaves from '/public/home/waves/gray-top-waves.webp'
import GrayBottomWaves from '/public/home/waves/gray-bottom-waves.webp'

function page() {
  return (
    <main className='mx-auto w-full'>
      <Hero />
      <About />
      <Education
        WhiteTopWaves={WhiteTopWaves}
        WhiteBottomWaves={WhiteBottomWaves}
      />
      <Affiliations />
      <Specialities WhiteTopWaves={WhiteTopWaves} />
      <PhilosophyAndAffiliations
        GrayTopWaves={GrayTopWaves}
        WhiteBottomWaves={WhiteBottomWaves}
      />
      <section className='relative bg-white'>
        <ContactForm />
      </section>
    </main>
  )
}

export default page
