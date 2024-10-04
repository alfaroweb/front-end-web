import AppointmentButton from '@/app/components/AppointmentButton'
import Gangliones from './sections/Gangliones'
import MalformacionesCongenitas from './sections/MalformacionesCongenitas'
import TumoresOseos from './sections/TumoresOseos'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#gangliones',
    categoryTitle: 'Gangliones',
    subcategories: null
  },
  ,
  {
    id: '#tumores-mano',
    categoryTitle: 'Tumores óseos o partes blandas',
    subcategories: null
  },
  {
    id: '#malformaciones',
    categoryTitle: 'Malformaciones Congénitas en la Mano',
    subcategories: null
  }
]

function page() {
  return (
    <>
      <div class='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 class='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en Lesiones Congénitas y Patología Tumoral de la Mano
            en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Tienes un <strong>bulto</strong> en la mano o muñeca? ¿Naciste con
            alguna <strong>deformidad </strong>
            en la mano? En nuestra clínica en <strong>Albacete</strong>,
            ofrecemos tratamientos
            <strong> especializados</strong> para diversas afecciones de la
            mano, como
            <em> gangliones</em>, <em>tumores</em> y{' '}
            <em>malformaciones congénitas</em>. Con técnicas quirúrgicas
            <strong> mínimamente invasivas</strong> y personalizadas, podemos
            aliviar tus síntomas y mejorar la <strong>funcionalidad</strong> de
            tu mano.
          </p>
          <AppointmentButton />
        </div>
      </div>
      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <Gangliones Book={Book} />
            <TumoresOseos Book={Book} />
            <MalformacionesCongenitas Book={Book} />
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
