import Image from 'next/image'
import Hero from './sections/01_Hero'
import About from './sections/02_About'
import Education from './sections/03_Education'
import Specialities from './sections/04_Specialities'
import PhilosophyAndAffiliations from './sections/05_PhilosophyAndAffiliations'
import { ContactForm } from '@/app/components/ContactForm'
import Affiliations from './sections/Affiliations'
import WhiteTopWaves from '/public/waves/white-top-waves.webp'
import WhiteBottomWaves from '/public/waves/white-bottom-waves.webp'
import GrayTopWaves from '/public/waves/gray-top-waves.webp'
import GrayBottomWaves from '/public/waves/gray-bottom-waves.webp'

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'),
  alternates: {
    canonical: '/'
  },
  title:
    'Dr. Joaquín Alfaro Micó | Cirujano de Mano y Traumatólogo en Albacete | Atención Personalizada en Quirónsalud y Hospital General Universitario',
  description:
    'Conoce al Dr. Joaquín Alfaro Micó, cirujano de mano en Albacete. Especialista en cirugía de mano y traumatología con atención personalizada en Quirónsalud y Hospital General Universitario. ¡Solicita tu cita!',
  keywords: [
    'cirujano de mano albacete',
    'traumatólogo albacete',
    'fracturas de mano',
    'artrosis de muñeca',
    'túnel carpiano',
    'artroscopia de muñeca',
    'cirugía de la mano',
    'lesiones deportivas de la mano',
    'enfermedades de la mano',
    'microcirugía de la mano',
    'Hospital Quirónsalud Albacete',
    'Hospital General Universitario Albacete',
    'Albacete',
    'cirugía ortopédica',
    'salud de la mano',
    'tratamiento de mano',
    'recuperación de la mano',
    'cirugía ortopédica de mano',
    'especialista en traumatología'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'standard',
      'max-image-preview': 'large',
      'max-snippet': 160
    }
  },
  og: {
    title:
      'Dr. Joaquín Alfaro Micó | Cirujano de mano en Albacete | Experiencia y trayectoria',
    description:
      'Descubre la experiencia y dedicación del Dr. Joaquín Alfaro Micó en cirugía de mano. Atención personalizada en Quirónsalud y Hospital General Universitario de Albacete.',
    url: 'https://www.cirugiadelamanoalbacete.es/',
    image: '',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Dr. Joaquín Alfaro Micó | Cirujano y Traumatólogo de Mano en Albacete',
    description:
      'Especialista en cirugía y traumatología de mano. Tratamiento personalizado y recuperación rápida.',
    image: ''
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Dr. Joaquín Alfaro Micó',
    image: '',
    url: 'https://www.cirugiadelamanoalbacete.es/',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pl. del Madroño, 11',
      addressLocality: 'Albacete',
      addressRegion: 'Castilla-La Mancha',
      postalCode: '02008',
      countryName: 'España'
    },
    speciality: 'Cirugía de la mano',
    medicalSpecialty: [
      'Fracturas de mano',
      'Artrosis de muñeca',
      'Túnel carpiano',
      'Artroscopia de muñeca',
      'Cirugía de la mano'
    ],
    priceRange: '€',
    openingHours: 'Mo-Fr 10:00-14:00',
    sameAs: [
      'https://www.quironsalud.com/albacete/es/cuadro-medico/joaquin-alfaro-mico'
    ]
  }
}

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
