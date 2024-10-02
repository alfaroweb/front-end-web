import AppointmentButton from '@/app/components/AppointmentButton'
import Gangliones from './sections/Gangliones'
import MalformacionesCongenitas from './sections/MalformacionesCongenitas'
import TumoresOseos from './sections/TumoresOseos'
import Book from '/public/home/medicine-book.svg'

function page() {
  return (
    <>
      <div class='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 class='text-4xl font-bold text-slate-50'>
            Lesiones Congénitas y Patología Tumoral de la Mano en Albacete
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

      <main class='w-full bg-white py-[50px]'>
        <Gangliones Book={Book} />
        <TumoresOseos Book={Book} />
        <MalformacionesCongenitas Book={Book} />
      </main>
    </>
  )
}

export default page
