import Hero from './home/sections/01_Hero'
import Specialties from './home/sections/03_Specialties'
import LastNews from './home/sections/06_LastNews'
import Doctor from './home/sections/04_Doctor'
import OurTeam from './home/sections/02_OurTeam'
import Testimonials from './home/sections/05_Testimonials'
import WhiteTopWaves from '/public/waves/white-top-waves.webp'
import WhiteBottomWaves from '/public/waves/white-bottom-waves.webp'
import WhiteBottomWaves2 from '/public/waves/white-bottom-waves-2.webp'

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'),
  alternates: {
    canonical: '/'
  },
  title:
    'Dr. Joaquín Alfaro Micó | Cirujano de Mano y Traumatólogo en Albacete | Tratamiento de Lesiones y Recuperación Funcional',
  description:
    'Experto en cirugía de mano y traumatólogo en Albacete. Tratamiento especializado de fracturas, artrosis, túnel carpiano y más. Recuperación de la funcionalidad de tu mano. Solicita tu cita.',
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
    'recuperación de la mano',
    'tratamiento túnel carpiano',
    'cirugía ortopédica mano',
    'Albacete'
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
      'Dr. Joaquín Alfaro Micó | Cirujano de Mano y Traumatólogo en Albacete',
    description:
      'Especialista en cirugía de mano en Albacete. Tratamientos personalizados para fracturas, artrosis y túnel carpiano. Resultados duraderos para la salud de tu mano.',
    url: '',
    image: '',
    type: 'website'
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
      'Artroscopia de muñeca'
    ],
    priceRange: '€',
    openingHours: 'Mo-Fr 10:00-14:00'
  }
}

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
      <LastNews />
    </main>
  )
}
