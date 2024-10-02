import Image from 'next/image'
import AppointmentButton from '@/app/components/AppointmentButton'
import CirugiaDeSecuelas from './sections/CirugiaDeSecuelas'
import InjertosTendinosos from './sections/InjertosTendinosos'
import Osteotomias from './sections/Osteotomias'
import Pseudoartrosis from './sections/Pseudoartrosis'
import TransferenciasTendinosas from './sections/TransferenciasTendinosas'
import Book from '/public/home/medicine-book.svg'

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='text-4xl font-bold text-slate-50'>
            Cirugía Secundaria Reconstructiva en Albacete
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

      <main className='w-full bg-white py-[50px]'>
        <Pseudoartrosis Book={Book} />
        <Osteotomias Book={Book} />
        <InjertosTendinosos Book={Book} />
        <TransferenciasTendinosas Book={Book} />
      </main>
    </>
  )
}

export default page
