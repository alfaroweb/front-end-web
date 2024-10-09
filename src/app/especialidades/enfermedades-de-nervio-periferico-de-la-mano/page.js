import AppointmentButton from '@/app/components/AppointmentButton'
import CompresionNervioCubital from './sections/CompresionNervioCubital'
import SindromeTunelCarpiano from './sections/SindromeTunelCarpiano'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#sindrome-tunel-carpiano',
    categoryTitle: 'Síndrome del túnel carpiano',
    subcategories: null
  },
  ,
  {
    id: '#compresion-nervio-cubital',
    categoryTitle: 'Compresión del nervio cubital',
    subcategories: null
  }
]

export const metadata = {
  metadataBase: new URL('https://www.tudominio.es'), // Reemplaza con la URL de tu sitio web
  alternates: {
    canonical: '/especialidades/enfermedades-nervio-periferico-mano-albacete'
  },
  title:
    'Enfermedades de Nervio Periférico de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
  description:
    'Tratamiento especializado de enfermedades de nervio periférico de la mano como el síndrome del túnel carpiano y la compresión del nervio cubital. Atención en Albacete.',
  keywords: [
    'enfermedades nervio periférico mano',
    'síndrome del túnel carpiano Albacete',
    'compresión nervio cubital Albacete',
    'tratamiento túnel carpiano',
    'tratamiento compresión nervio cubital',
    'cirugía de mano Albacete',
    'traumatólogo de mano Albacete',
    'enfermedades nerviosas mano',
    'nervio periférico mano',
    'síntomas túnel carpiano',
    'compresión nerviosa mano',
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
      'Enfermedades de Nervio Periférico de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
    description:
      'El Dr. Joaquín Alfaro Micó ofrece tratamiento especializado para el síndrome del túnel carpiano y la compresión del nervio cubital en Albacete.',
    url: 'https://www.tudominio.es/especialidades/enfermedades-nervio-periferico-mano-albacete', // Reemplaza con la URL de la página
    image: 'https://www.tudominio.es/tufoto.jpg', // Reemplaza con la URL de tu imagen
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Enfermedades de Nervio Periférico de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
    description:
      'Tratamiento especializado para el síndrome del túnel carpiano y compresión del nervio cubital por el Dr. Joaquín Alfaro Micó en Albacete.',
    image: 'https://www.tudominio.es/tufoto.jpg'
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Enfermedades de Nervio Periférico de la Mano',
    description:
      'Tratamiento de síndrome del túnel carpiano y compresión del nervio cubital.',
    image: 'https://www.tudominio.es/tufoto.jpg',
    url: 'https://www.tudominio.es/especialidades/enfermedades-nervio-periferico-mano-albacete',
    medicalSpecialty: [
      'Síndrome del túnel carpiano',
      'Compresión del nervio cubital'
    ],
    medicalCode: 'G56' // Código ICD-10 para lesiones de nervios periféricos como el túnel carpiano y compresión cubital
  }
}

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold tracking-wide text-slate-50'>
            Especialistas en Enfermedades de Nervio Periférico de la Mano en
            Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres de <strong>dolor</strong>, <strong>entumecimiento</strong> y{' '}
            <strong>debilidad</strong> en la mano? Podrías tener{' '}
            <strong className='font-bold'>síndrome del túnel carpiano</strong> o{' '}
            <strong className='font-bold'>compresión del nervio cubital</strong>
            . En nuestra{' '}
            <strong className='font-bold'>clínica en Albacete</strong>,
            diagnosticamos y tratamos estas
            <em> neuropatías</em> de forma personalizada, ofreciéndote{' '}
            <strong>soluciones efectivas</strong> para recuperar la
            <strong> funcionalidad</strong> de tu mano y mejorar tu{' '}
            <strong>calidad de vida</strong>.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <SindromeTunelCarpiano Book={Book} />
            <CompresionNervioCubital Book={Book} />
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
