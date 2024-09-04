import Image from 'next/image'
import Link from 'next/link'
import HeroPortrait from '/public/home/aboutme/mico-doctor.png'

function Hero() {
  return (
    <section className='relative bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
      <div className='mx-auto max-w-screen-xl overflow-hidden pl-8 pt-8 md:col-span-1 md:grid md:grid-cols-2 md:w-[95%] md:pl-0 items-end'>
        <div className='text-left md:col-start-2 md:row-end-2 md:mt-8 pb-16'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
            Dr. Joaquín Alfaro
          </h2>
          <p className='text-white mb-4'>Traumatólogo</p>
          <p className='md:text-xl/relaxed lg:text-base/relaxed  text-slate-300 mb-8 w-[90%]'>
            Con una trayectoria sólida y un enfoque especializado, ofrecemos
            soluciones seguras y precisas para restaurar la funcionalidad y
            aliviar el dolor de tus manos. La experiencia y dedicación en cada
            intervención marcan la diferencia. Tu salud está en manos de
            profesionales.
          </p>
          <Link
            href='/'
            className='p-3 px-4 bg-transparent text-white border-2 border-white font-semibold rounded-3xl mb-8 hidden md:block w-[180px] text-center'
          >
            Solicitar una cita
          </Link>
        </div>

        <Image
          src={HeroPortrait}
          alt='Dr. Joaquin Alfaro'
          className='object-cover md:col-start-1 md:row-end-2 h-full max-h-[408px] drop-shadow-[0_10px_10px_rgba(29,54,61,1)]'
        />
      </div>
    </section>
  )
}

export default Hero
