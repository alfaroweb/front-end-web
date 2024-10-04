import AppointmentButton from '@/app/components/AppointmentButton'
import DedoEnResorte from './sections/DedoEnResorte'
import FactoresDeCrecimiento from './sections/FactoresDeCrecimiento'
import Tendinopatias from './sections/Tendinopatias'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#tendinopatias',
    categoryTitle: 'Tendinopatías',
    subcategories: null
  },
  ,
  {
    id: '#dedo-en-resorte',
    categoryTitle: 'Dedo en resorte',
    subcategories: null
  },
  {
    id: '#factores-de-crecimiento',
    categoryTitle: 'Factores de crecimiento',
    subcategories: null
  }
]

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en Lesiones Deportivas y por Sobreuso de la Mano
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres de <strong>dolor</strong>, <strong>rigidez</strong> o{' '}
            <strong>inflamación</strong> en los tendones de la mano o la muñeca?
            En nuestra clínica en <strong>Albacete</strong>, ofrecemos
            tratamientos
            <strong> especializados</strong> para diversas afecciones de los
            tendones, como
            <em> tendinopatías</em>, <em>dedo en resorte</em> y{' '}
            <em>lesiones por sobreuso</em>. Con técnicas quirúrgicas{' '}
            <strong>mínimamente invasivas</strong> y tratamientos biológicos
            como el
            <strong> plasma rico en plaquetas</strong>, podemos aliviar tus
            síntomas y mejorar la
            <strong> funcionalidad</strong> de tu mano.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <Tendinopatias Book={Book} />
            <DedoEnResorte Book={Book} />
            <FactoresDeCrecimiento Book={Book} />
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
