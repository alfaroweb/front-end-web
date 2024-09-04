import Image from 'next/image'
import HeroPortrait from '/public/home/hero-bg-2.png'
import Waves from '/public/home/svg.png'
import Link from 'next/link'

function Hero() {
  return (
    <section className='w-full bg-[#c0e6f8] bg-hero-bg bg-cover relative pt-[80px] lg:h-[650px]'>
      <div className='max-w-screen-2xl h-full grid grid-rows-auto mx-auto px-5 w-[90%] lg:grid-cols-2 lg:grid-rows-1 py-[40px]'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-white font-bold text-4xl md:text-5xl mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
            Expertos en <br /> Cirugía de la Mano <br /> en Albacete
          </h1>
          <p className='text-white text-sm lg:text-base mb-8'>
            Recupera la funcionalidad de tus manos con nuestros especialistas.
            Ofrecemos atención avanzada y personalizada para tu bienestar.
          </p>
          <Link
            href='/'
            className='p-3 px-4 bg-transparent text-white border-2 border-white font-semibold rounded-3xl mb-8 hidden md:block w-[180px] text-center'
          >
            Solicitar una cita
          </Link>
        </div>

        <div className='place-content-end mt-8 lg:mt-0 relative'>
          <Image
            src={HeroPortrait}
            className='object-cover lg:w-[1000px]'
            alt=''
          />
        </div>
      </div>

      <Image
        src={Waves}
        className='absolute bottom-0 w-full h-[150px]'
        alt=''
      />
    </section>
  )
}

export default Hero
