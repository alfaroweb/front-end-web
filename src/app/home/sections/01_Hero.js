import Image from 'next/image'
import HeroPortrait from '/public/home/hero-bg-2.webp'
import AppointmentButton from '@/app/components/AppointmentButton'

function Hero() {
  return (
    <section className='relative w-full bg-[#c0e6f8] bg-hero-bg bg-cover xl:h-[650px] xl:pt-[60px]'>
      <div className='grid-rows-auto mx-auto grid h-full w-[90%] max-w-screen-2xl px-5 py-[40px] xl:grid-cols-2 xl:grid-rows-1'>
        <div className='flex flex-col items-center text-center text-white'>
          <h1 className='mb-4 text-4xl font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)] md:text-5xl'>
            Expertos en <br /> Cirugía de la Mano <br /> en Albacete
          </h1>
          <p className='mb-4 text-sm lg:text-base'>
            ¿Sufres de dolor, rigidez o pérdida de fuerza en tus manos? Nuestros
            cirujanos especializados en mano te ofrecen soluciones
            personalizadas para una amplia variedad de afecciones. Con técnicas
            quirúrgicas mínimamente invasivas y una atención postoperatoria
            integral, recuperarás la funcionalidad y la calidad de vida que
            deseas. <br />
          </p>
          <p className='mb-2 font-bold lg:text-lg'>
            ¡Solicita una consulta hoy mismo y descubre cómo podemos ayudarte!
          </p>
          <AppointmentButton styles='hidden' />
        </div>

        <div className='relative place-content-end lg:mt-0'>
          <Image
            src={HeroPortrait}
            className='mx-auto w-full max-w-[600px] object-cover xl:max-w-[750px]'
            alt='Imagen de un doctor tratando a un paciente'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
