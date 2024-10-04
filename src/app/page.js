import Hero from './home/sections/01_Hero'
import Specialties from './home/sections/03_Specialties'
import LastPosts from './home/sections/06_LastPosts'
import Doctor from './home/sections/04_Doctor'
import OurTeam from './home/sections/02_OurTeam'
import Testimonials from './home/sections/05_Testimonials'
import WhiteTopWaves from '/public/waves/white-top-waves.webp'
import WhiteBottomWaves from '/public/waves/white-bottom-waves.webp'
import WhiteBottomWaves2 from '/public/waves/white-bottom-waves-2.webp'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <OurTeam />
      <Specialties
        WhiteTopWaves={WhiteTopWaves}
        WhiteBottomWaves={WhiteBottomWaves}
      />
      <Doctor />
      <Testimonials
        WhiteTopWaves={WhiteTopWaves}
        WhiteBottomWaves2={WhiteBottomWaves2}
      />
    </main>
  )
}
