import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import HeroPortrait from '/public/home/hero-bg-2.webp'
import AppointmentButton from '@/app/components/AppointmentButton'

const montserrat = Montserrat({ subsets: ['latin'] })

function Hero() {
  return (
    <section className='relative w-full bg-custom-green-dark xl:h-[700px] xl:pt-[60px]'>
      <div className='grid-rows-auto mx-auto grid h-full w-[90%] max-w-screen-xl px-5 py-[60px]'>
        <div className='flex flex-col items-center text-center text-white'>
          <h1 className='custom-text-shadow mb-6 text-3xl font-bold md:text-5xl xl:text-4xl 2xl:text-5xl'>
            <span className='block italic'>Expertos en</span>{' '}
            <span className='block italic'>Cirugía y Traumatología</span>
            <span className='block italic'> de la Mano en Albacete</span>{' '}
          </h1>
          <p className='mb-4 text-sm lg:text-base'>
            Si sientes dolor en la mano, no lo ignores. Acudir a un cirujano
            especializado te ayudará a identificar el problema a tiempo y evitar
            complicaciones futuras. Nosotros te ofrecemos una atención
            personalizada: escuchamos tus síntomas y diseñamos un plan de
            tratamiento adaptado a tus necesidades. Recuerda, cuidar tus manos
            hoy puede prevenir problemas mayores mañana. Tu bienestar es lo
            primero, y estamos aquí para ayudarte <br />
          </p>
          <p className='mb-4 font-bold lg:text-lg'>
            ¡Solicita una consulta hoy mismo y descubre cómo podemos ayudarte!
          </p>
          <AppointmentButton styles='hidden' />
        </div>
        {/* 
        <div className='relative flex flex-col items-center justify-end lg:mt-0'>
          <Image
            src={HeroPortrait}
            className='mx-auto w-full max-w-[600px] object-cover xl:max-w-[750px]'
            alt='Imagen de un doctor tratando a un paciente'
          />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
