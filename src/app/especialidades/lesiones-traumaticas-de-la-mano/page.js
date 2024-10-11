import AppointmentButton from '@/app/components/AppointmentButton'
import Fracturas from './sections/Fracturas'
import LesionesFibrocartilagoTriangular from './sections/LesionesFibrocartilagoTriangular'
import LesionesLigamentosas from './sections/LesionesLigamentosas'
import LesionesTendinosas from './sections/LesionesTendinosas'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'
import Book from '/public/home/medicine-book.svg'

const lesiones = [
  {
    id: '#fracturas',
    categoryTitle: 'Fracturas',
    subcategories: [
      {
        subcategorie: 'Fracturas de metacarpianos',
        id: '#fracturas-metacarpianos'
      },
      {
        subcategorie: 'Fracturas de falanges (Dedos de la mano)',
        id: '#fracturas-falanges'
      },
      {
        subcategorie: 'Fracturas de Radio Distal (Muñeca)',
        id: '#fracturas-radio-distal'
      },
      {
        subcategorie: 'Fracturas de Escafoides',
        id: '#fracturas-escafoides'
      }
    ]
  },
  {
    id: '#lesiones-ligamentosas',
    categoryTitle: 'Lesiones ligamentosas (inestabilidades carpianas)',
    subcategories: null
  },
  {
    id: '#lesiones-tendinosas',
    categoryTitle: 'Lesiones tendinosas',
    subcategories: null
  },
  {
    id: '#lesiones-fibrocartilago-triangular',
    categoryTitle: 'Lesiones fibrocartílago triangular',
    subcategories: null
  }
]

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'), // Reemplaza con la URL de tu sitio web
  alternates: {
    canonical: '/especialidades/lesiones-traumaticas-mano-albacete'
  },
  title:
    'Lesiones Traumáticas de la Mano en Albacete | Dr. Joaquín Alfaro Micó',
  description:
    'Tratamiento especializado de fracturas de mano, lesiones ligamentosas, tendinosas y del fibrocartílago triangular. Atención en Albacete por el Dr. Joaquín Alfaro Micó.',
  keywords: [
    'lesiones traumáticas mano Albacete',
    'fracturas de metacarpianos',
    'fracturas de falanges dedos mano',
    'fractura de radio distal',
    'fractura de escafoides',
    'lesiones ligamentosas mano',
    'inestabilidades carpianas',
    'lesiones tendinosas',
    'lesiones fibrocartílago triangular',
    'cirugía de mano Albacete',
    'traumatólogo de mano Albacete',
    'recuperación de lesiones mano'
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
      'Lesiones Traumáticas de la Mano en Albacete | Dr. Joaquín Alfaro Micó',
    description:
      'El Dr. Joaquín Alfaro Micó ofrece un tratamiento especializado para fracturas de mano, lesiones ligamentosas, tendinosas y del fibrocartílago triangular en Albacete.',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/lesiones-traumaticas-mano-albacete', // Reemplaza con la URL de la página
    image: '',
    type: 'website'
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title:
  //     'Lesiones Traumáticas de la Mano en Albacete | Dr. Joaquín Alfaro Micó',
  //   description:
  //     'Especialista en tratamiento de fracturas, lesiones tendinosas, ligamentosas y del fibrocartílago triangular en Albacete.',
  //   image: ''
  // },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Lesiones Traumáticas de la Mano',
    description:
      'Tratamiento de fracturas de la mano, lesiones tendinosas, ligamentosas y del fibrocartílago triangular.',
    image: '',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/lesiones-traumaticas-mano-albacete',
    medicalSpecialty: [
      'Fracturas de mano',
      'Lesiones tendinosas',
      'Lesiones ligamentosas',
      'Lesiones del fibrocartílago triangular'
    ],
    medicalCode: 'S62' // Código ICD-10 para lesiones de la mano
  }
}

function LesionesTraumaticas() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en Lesiones Traumáticas de la Mano en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufriste una caída o golpe en la mano? En nuestra clínica en{' '}
            <strong>Albacete</strong>, ofrecemos diagnóstico y tratamiento
            <strong> especializado</strong> para todo tipo de fracturas y
            lesiones de
            <strong> muñeca y mano</strong>. Desde{' '}
            <strong>fracturas simples</strong> hasta
            <strong> lesiones complejas</strong> en tendones y ligamentos,
            contamos con la experiencia y tecnología necesaria para{' '}
            <strong>restaurar la funcionalidad</strong> de tu mano y muñeca.
            Ofrecemos
            <strong> soluciones personalizadas</strong> para cada paciente, con
            el objetivo de que puedas volver a realizar tus{' '}
            <em>actividades diarias</em> con normalidad.
          </p>
          <AppointmentButton />
        </div>
      </div>

      {/* <TablaDeContenidos /> */}
      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full bg-white py-[50px] lg:w-2/3'>
            <Fracturas Book={Book} />
            <LesionesLigamentosas Book={Book} />
            <LesionesTendinosas Book={Book} />
            <LesionesFibrocartilagoTriangular Book={Book} />
            <div className='mx-auto mb-16 w-[90%]'>
              <h2 className='mb-4 text-center text-3xl font-bold tracking-wide'>
                Conclusión
              </h2>
              <p className='mb-4'>
                Las lesiones traumáticas de la mano, como fracturas, luxaciones,
                lesiones tendinosas y ligamentosas, pueden tener un impacto
                significativo en la función y calidad de vida. En Albacete,
                nuestro equipo especializado está comprometido en ofrecer el
                mejor tratamiento y rehabilitación para asegurar una
                recuperación efectiva. Si experimentas síntomas de alguna de
                estas lesiones, te recomendamos buscar atención médica
                profesional para obtener un diagnóstico preciso y un plan de
                tratamiento adecuado.
              </p>
              <p className='mb-4'>
                Para una evaluación exhaustiva y un tratamiento personalizado,{' '}
                <a href='#' className='text-custom-blue-light hover:underline'>
                  contacta a nuestros especialistas en cirugía de la mano en
                  Albacete
                </a>
                .
              </p>
            </div>
          </main>
          <aside className='md:block lg:w-1/3'>
            <TablaDeContenidos categories={lesiones} />
          </aside>
        </div>
      </div>
    </>
  )
}

export default LesionesTraumaticas
