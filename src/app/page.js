import Image from 'next/image'
import Hero from './home/sections/01_Hero'
import Specialties from './home/sections/03_Specialties'
import LastPosts from './home/sections/06_LastPosts'
import Doctor from './home/sections/04_Doctor'
import OurTeam from './home/sections/02_OurTeam'
import Testimonials from './home/sections/05_Testimonials'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <OurTeam />
      <Specialties />
      <Doctor />
      <Testimonials />
    </main>
  )
}
