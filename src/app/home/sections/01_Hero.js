import Image from 'next/image'
import HeroPortrait from '/public/home/hero-bg-2.webp'
import AppointmentButton from '@/app/components/AppointmentButton'

function Hero() {
  return (
    <section className='relative w-full bg-[#c0e6f8] bg-hero-bg bg-cover pt-[80px] lg:h-[650px]'>
      <div className='grid-rows-auto mx-auto grid h-full w-[90%] max-w-screen-2xl px-5 py-[40px] lg:grid-cols-2 lg:grid-rows-1'>
        <div className='flex flex-col items-center text-center text-white'>
          <h1 className='mb-4 text-4xl font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)] md:text-5xl'>
            Expertos en <br /> Cirugía de la Mano <br /> en Albacete
          </h1>
          <p className='mb-8 text-sm lg:text-base'>
            Recupera la funcionalidad de tus manos con nuestros especialistas.
            Ofrecemos atención avanzada y personalizada para tu bienestar.
          </p>
          <AppointmentButton styles='hidden' />
        </div>

        <div className='relative mt-8 place-content-end lg:mt-0'>
          <Image
            src={HeroPortrait}
            className='w-full max-w-[750px] object-cover'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
