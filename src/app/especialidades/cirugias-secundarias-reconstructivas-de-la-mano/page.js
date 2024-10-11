import AppointmentButton from '@/app/components/AppointmentButton'
import CirugiaDeSecuelas from './sections/CirugiaDeSecuelas'
import InjertosTendinosos from './sections/InjertosTendinosos'
import Osteotomias from './sections/Osteotomias'
import Pseudoartrosis from './sections/Pseudoartrosis'
import TransferenciasTendinosas from './sections/TransferenciasTendinosas'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#pseudoartrosis-escafoides',
    categoryTitle: 'Pseudoartrosis de Escafoides',
    subcategories: null
  },
  ,
  {
    id: '#osteotomias-mala-consolidacion',
    categoryTitle: 'Osteotomías por Mala Consolidación',
    subcategories: null
  },
  {
    id: '#injertos-tendinosos',
    categoryTitle: 'Injertos Tendinosos',
    subcategories: null
  },
  {
    id: '#transferencias-tendinosas',
    categoryTitle: 'Transferencias Tendinosas',
    subcategories: null
  }
]

export const metadata = {
  metadataBase: new URL('https://www.cirugiadelamanoalbacete.es/'),
  alternates: {
    canonical: '/especialidades/cirugia-secundaria-reconstructiva-mano-albacete'
  },
  title:
    'Cirugía Secundaria Reconstructiva de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
  description:
    'Especialista en cirugía secundaria reconstructiva de la mano, con procedimientos como pseudoartrosis de escafoides, osteotomías, injertos y transferencias tendinosas en Albacete.',
  keywords: [
    'cirugía secundaria reconstructiva mano',
    'pseudoartrosis de escafoides',
    'osteotomías mala consolidación',
    'injertos tendinosos',
    'transferencias tendinosas',
    'cirugía mano Albacete',
    'tratamiento pseudoartrosis escafoides',
    'cirugía osteotomías',
    'reconstrucción tendones mano',
    'traumatólogo mano Albacete',
    'cirujano reconstructivo mano',
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
      'Cirugía Secundaria Reconstructiva de la Mano | Dr. Joaquín Alfaro Micó en Albacete',
    description:
      'Tratamiento especializado en cirugía secundaria reconstructiva de la mano, incluyendo pseudoartrosis de escafoides, osteotomías, injertos y transferencias tendinosas en Albacete.',
    url: 'https://www.cirugiadelamanoalbacete.es/',
    image: '',
    type: 'website'
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Cirugía Secundaria Reconstructiva de la Mano',
    description:
      'Especializado en la cirugía reconstructiva de la mano, incluyendo pseudoartrosis de escafoides, osteotomías, injertos y transferencias tendinosas.',
    image: '',
    url: 'https://www.cirugiadelamanoalbacete.es/especialidades/cirugia-secundaria-reconstructiva-mano-albacete',
    medicalSpecialty: [
      'Pseudoartrosis de escafoides',
      'Osteotomías por mala consolidación',
      'Injertos tendinosos',
      'Transferencias tendinosas'
    ],
    medicalCode: 'M84.1'
  }
}

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en Cirugía Secundaria Reconstructiva en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Necesitas una <strong>cirugía reconstructiva de mano</strong> en{' '}
            <strong>Albacete</strong>? En nuestra clínica, contamos con{' '}
            <strong>especialistas altamente cualificados </strong>
            en el tratamiento de complicaciones como <em>
              pseudoartrosis
            </em>, <em>consolidaciones viciosas </em>y{' '}
            <em>lesiones tendinosas</em>. Ofrecemos{' '}
            <strong>soluciones personalizadas</strong> para cada paciente, con
            el objetivo de restablecer la <strong>funcionalidad</strong> y{' '}
            <strong>movilidad </strong>
            de tu mano.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <Pseudoartrosis Book={Book} />
            <Osteotomias Book={Book} />
            <InjertosTendinosos Book={Book} />
            <TransferenciasTendinosas Book={Book} />
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
