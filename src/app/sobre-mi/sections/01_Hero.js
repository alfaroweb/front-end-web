import Image from 'next/image'
import HeroPortrait from '/public/aboutme/mico-doctor.webp'
import AppointmentButton from '@/app/components/AppointmentButton'

function Hero() {
  return (
    <section className='relative bg-custom-green-dark'>
      <div className='mx-auto max-w-screen-xl items-end overflow-hidden pl-8 pt-8 md:col-span-1 md:grid md:w-[95%] md:grid-cols-2 md:pl-0'>
        <div className='pb-16 text-left md:col-start-2 md:row-end-2 md:mt-8'>
          <h2 className='text-3xl font-bold tracking-tighter text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)] md:text-4xl/tight'>
            Dr. Joaquín Alfaro
          </h2>
          <p className='mb-4 text-white'>Traumatólogo y cirujano de la mano</p>
          <p className='mb-4 w-[90%] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed'>
            Con una trayectoria sólida y un enfoque especializado, ofrecemos
            soluciones seguras y precisas para restaurar la funcionalidad y
            aliviar el dolor de tus manos. La experiencia y dedicación en cada
            intervención marcan la diferencia. Tu salud está en manos de
            profesionales.
          </p>
          <AppointmentButton styles='hidden' />
        </div>

        <Image
          src={HeroPortrait}
          alt='Imagen del Dr. Joaquin Alfaro cirujano y traumatólogo de la mano'
          className='h-full max-h-[408px] object-cover drop-shadow-[0_10px_10px_rgba(29,54,61,1)] md:col-start-1 md:row-end-2'
        />
      </div>
    </section>
  )
}

export default Hero
