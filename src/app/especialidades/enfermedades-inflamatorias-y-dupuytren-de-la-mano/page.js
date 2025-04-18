import AppointmentButton from '@/app/components/AppointmentButton'
import ArtroscopiaMuneca from './sections/ArtroscopiaMuneca'
import EnfermedadDupuytren from './sections/EnfermedadDupuytren'
import ManoReumatica from './sections/ManoReumatica'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#mano-reumatica',
    categoryTitle: 'Mano reumática',
    subcategories: null
  },
  ,
  {
    id: '#artroscopia-muneca',
    categoryTitle: 'Artroscopia de muñeca',
    subcategories: null
  },
  {
    id: '#enfermedad-dupuytren',
    categoryTitle: 'Enfermedad de Dupuytren',
    subcategories: null
  }
]

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'),
  alternates: {
    canonical:
      '/especialidades/enfermedades-inflamatorias-dupuytren-mano-albacete'
  },
  title:
    'Enfermedades Inflamatorias y Dupuytren de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
  description:
    'Tratamiento especializado de enfermedades inflamatorias de la mano, como la mano reumática, artroscopia de muñeca y la enfermedad de Dupuytren. Consulta en Albacete.',
  keywords: [
    'enfermedades inflamatorias de la mano',
    'mano reumática',
    'artroscopia de muñeca',
    'enfermedad de Dupuytren',
    'tratamiento Dupuytren Albacete',
    'cirugía de mano Albacete',
    'traumatólogo de mano Albacete',
    'cirugía artroscópica muñeca',
    'enfermedades inflamatorias mano',
    'Albacete',
    'tratamiento enfermedades inflamatorias',
    'Dupuytren mano'
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
      'Enfermedades Inflamatorias y Dupuytren de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
    description:
      'El Dr. Joaquín Alfaro Micó ofrece tratamiento especializado para enfermedades inflamatorias de la mano, incluyendo mano reumática, artroscopia de muñeca y enfermedad de Dupuytren en Albacete.',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/enfermedades-inflamatorias-dupuytren-mano-albacete',
    image: '',
    type: 'website'
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Enfermedades Inflamatorias y Dupuytren de la Mano',
    description:
      'Tratamiento de mano reumática, artroscopia de muñeca y enfermedad de Dupuytren.',
    image: '',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/enfermedades-inflamatorias-dupuytren-mano-albacete',
    medicalSpecialty: [
      'Mano reumática',
      'Artroscopia de muñeca',
      'Enfermedad de Dupuytren'
    ],
    medicalCode: 'M72.0' // Código ICD-10 específico para la enfermedad de Dupuytren
  }
}

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en Enfermedades Inflamatorias y Dupuytren de la Mano
            en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres <strong>dolor</strong>, <strong>rigidez</strong> o{' '}
            <strong>deformidad</strong> en las manos? En nuestra clínica en{' '}
            <strong>Albacete</strong>, ofrecemos tratamientos{' '}
            <strong>especializados</strong> para diversas afecciones de la mano,
            como la <em>artritis reumatoide</em>, la{' '}
            <em>enfermedad de Dupuytren</em> y las
            <em> lesiones de muñeca</em>. Con técnicas quirúrgicas{' '}
            <strong>mínimamente invasivas</strong> como la
            <em> artroscopia</em>, podemos aliviar tus síntomas y mejorar tu{' '}
            <strong>calidad de vida</strong>.
          </p>
          <AppointmentButton />
        </div>
      </div>
      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <ManoReumatica Book={Book} />
            <ArtroscopiaMuneca Book={Book} />
            <EnfermedadDupuytren Book={Book} />
          </main>
          <aside className='md:block lg:w-1/3'>
            <TablaDeContenidos categories={lesiones} />
          </aside>
        </div>
      </div>
    </>
  )
}

export default page
