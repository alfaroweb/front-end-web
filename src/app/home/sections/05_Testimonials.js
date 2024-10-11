import Image from 'next/image'
import TestimonialCard from '../../components/TestimonialCard'
import DotsBg from '@/app/components/DotsBg'

function Testimonials({ WhiteTopWaves, WhiteBottomWaves2 }) {
  return (
    <section className='relative h-max w-full overflow-hidden py-[100px]'>
      <DotsBg />
      <Image
        src={WhiteTopWaves}
        className='absolute top-0 block h-[75px] w-full drop-shadow-[0_10px_4px_rgba(133,134,134,0.1)]'
        alt='Separador superior de la sección en forma de ola'
      />
      <div className='mx-auto mb-16 w-[90%] max-w-screen-lg'>
        <h2 className='p-4 text-center text-4xl/tight font-black leading-none tracking-wide text-custom-green-dark'>
          Lo que nuestros pacientes dicen de nosotros
        </h2>
        <p className='text-center'>
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
      <div className='mx-auto flex w-[90%] justify-center'>
        <TestimonialCard />
      </div>
      <Image
        src={WhiteBottomWaves2}
        className='absolute bottom-0 block h-[200px] w-full drop-shadow-[0_-10px_4px_rgba(133,134,134,0.1)]'
        alt='Separador inferior de la sección en forma de ola'
      />
    </section>
  )
}

export default Testimonials
