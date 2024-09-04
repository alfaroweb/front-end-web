import Image from 'next/image'
import WhiteTopWaves from '/public/home/waves/white-top-waves.png'
import WhiteBottomWaves from '/public/home/waves/white-bottom-waves-2.png'
import TestimonialCard from '../../components/TestimonialCard'
import DotsBg from '@/app/components/DotsBg'

function Testimonials() {
  return (
    <section className='text-gray-800 w-full relative h-max py-[100px] overflow-hidden'>
      <DotsBg />
      <Image
        src={WhiteTopWaves}
        className='h-[75px] w-full absolute top-0 block drop-shadow-[0_10px_4px_rgba(133,134,134,0.1)]'
        alt=''
      />
      <div className='mb-16 w-[90%] max-w-screen-xl mx-auto '>
        <h2 className='p-4 font-black tracking-wide text-4xl/tight leading-none text-center text-gray-800'>
          Lo que nuestros pacientes dicen de nosotros
        </h2>
        <p className='text-center text-gray-800'>
          Las historias de nuestros pacientes son el reflejo del compromiso y la
          dedicación con la que abordamos cada cirugía de la mano. A través de
          técnicas innovadoras y un enfoque personalizado, hemos ayudado a
          muchos a recuperar la movilidad y mejorar su calidad de vida. Conoce
          las experiencias de quienes han confiado en nuestro equipo para su
          tratamiento y descubre cómo hemos transformado sus vidas con
          resultados exitosos. Sus testimonios son nuestra mejor garantía de
          éxito y nuestra motivación para seguir brindando atención de
          excelencia.
        </p>
      </div>
      <div className='w-[90%] mx-auto overflow-hidden'>
        <TestimonialCard />
      </div>
      <Image
        src={WhiteBottomWaves}
        className='h-[200px] w-full absolute bottom-0 block drop-shadow-[0_-10px_4px_rgba(133,134,134,0.1)]'
        alt=''
      />
    </section>
  )
}

export default Testimonials
