import AppointmentButton from '@/app/components/AppointmentButton'
import CoberturasDeLaMano from './sections/CoberturasDeLaMano'
import NeuromasYTumoresNerviosos from './sections/NeuromasYTumoresNerviosos'
import ReparacionDeNervios from './sections/ReparacionDeNervios'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#reparacion-nervios',
    categoryTitle: 'Reparación de Nervios',
    subcategories: null
  },
  {
    id: '#neuromas-tumores',
    categoryTitle: 'Neuromas y Tumores Nerviosos',
    subcategories: null
  },
  {
    id: '#coberturas-mano',
    categoryTitle: 'Coberturas de la Mano',
    subcategories: null
  }
]

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-3xl font-bold text-slate-50'>
            Especialistas en Microcirugía de la Mano en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufriste una lesión que afectó la sensibilidad o el movimiento de
            <strong> tu mano</strong>? En nuestra clínica en{' '}
            <strong>Albacete</strong>, ofrecemos tratamientos
            <strong> especializados</strong> y <strong> personalizados</strong>{' '}
            para <em>lesiones nerviosas</em>, <em>neuromas</em>,{' '}
            <em>tumores</em> y <em>defectos de tejidos blandos</em>.{' '}
            <strong>Con años de experiencia</strong>, utilizamos{' '}
            <strong>técnicas quirúrgicas microquirúrgicas</strong> y
            procedimientos de reconstrucción avanzados para{' '}
            <strong>restaurar la función</strong> y sensibilidad de tu mano,
            mejorando tu calidad de vida.
          </p>
          <AppointmentButton />
        </div>
      </div>
      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <ReparacionDeNervios Book={Book} />
            <NeuromasYTumoresNerviosos Book={Book} />
            <CoberturasDeLaMano Book={Book} />
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
