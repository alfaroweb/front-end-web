import AppointmentButton from '@/app/components/AppointmentButton'
import ArtrosisDedos from './sections/ArtrosisDedos'
import ArtrosisMuñeca from './sections/ArtrosisMuñeca'
import Rizartrosis from './sections/Rizartrosis'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#artrosis-dedos',
    categoryTitle: 'Artrosis en dedos',
    subcategories: null
  },
  ,
  {
    id: '#artrosis-muneca',
    categoryTitle: 'Artrosis de muñeca',
    subcategories: null
  },
  {
    id: '#rizartrosis',
    categoryTitle: 'Rizartrosis',
    subcategories: null
  }
]

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'),
  alternates: {
    canonical: '/especialidades/enfermedades-degenerativas-mano-albacete'
  },
  title:
    'Tratamiento de Enfermedades Degenerativas de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
  description:
    'Especialista en el tratamiento de enfermedades degenerativas de la mano como la artrosis en dedos, artrosis de muñeca y rizartrosis. Consulta en Albacete.',
  keywords: [
    'enfermedades degenerativas de la mano',
    'tratamiento de artrosis en dedos',
    'artrosis de muñeca Albacete',
    'rizartrosis Albacete',
    'cirugía de mano Albacete',
    'traumatólogo de mano Albacete',
    'tratamiento artrosis de la mano',
    'enfermedades degenerativas mano',
    'especialista artrosis en la mano',
    'Albacete',
    'salud de la mano'
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
      'Tratamiento de Enfermedades Degenerativas de la Mano | Dr. Joaquín Alfaro Micó',
    description:
      'El Dr. Joaquín Alfaro Micó está especializado en el tratamiento de artrosis en los dedos, artrosis de muñeca y rizartrosis en Albacete.',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/enfermedades-degenerativas-mano-albacete',
    image: '',
    type: 'website'
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Enfermedades Degenerativas de la Mano',
    description:
      'Tratamiento de la artrosis en los dedos, muñeca y rizartrosis.',
    image: '',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/enfermedades-degenerativas-mano-albacete',
    medicalSpecialty: [
      'Artrosis en dedos',
      'Artrosis de muñeca',
      'Rizartrosis'
    ],
    medicalCode: 'M15'
  }
}

function EnfermedadesDegenerativas() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en el Tratamiento de Enfermedades Degenerativas de la
            Mano en Albacete{' '}
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres de <strong>dolor</strong>, <strong>rigidez</strong> y{' '}
            <strong>dificultad</strong> para mover los dedos o la muñeca?
            Podrías tener <strong>artrosis</strong>. En nuestra clínica en{' '}
            <strong>Albacete</strong>, diagnosticamos y tratamos diferentes
            tipos de artrosis, como la <em>artrosis de dedos</em>,{' '}
            <em>muñeca</em> y<em> rizartrosis</em>. Ofrecemos soluciones{' '}
            <strong>personalizadas</strong> para aliviar el dolor y mejorar tu
            <strong> calidad de vida</strong>.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <ArtrosisDedos Book={Book} />
            <ArtrosisMuñeca Book={Book} />
            <Rizartrosis Book={Book} />
          </main>
          <aside className='md:block lg:w-1/3'>
            <TablaDeContenidos categories={lesiones} />
          </aside>
        </div>
      </div>
    </>
  )
}

export default EnfermedadesDegenerativas
