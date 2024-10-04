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
