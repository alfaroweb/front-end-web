import Image from 'next/image'

function PhilosophyAndAffiliations({ GrayTopWaves, WhiteBottomWaves }) {
  return (
    <section className='relative flex min-h-[600px] w-full flex-col justify-between bg-philosophy bg-cover'>
      <Image src={GrayTopWaves} className='block h-[100px] w-full' alt='' />
      <div className='mx-auto w-[90%] max-w-screen-lg text-center text-white'>
        {' '}
        <h2 className='text-3xl font-bold tracking-tighter [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)] md:text-4xl/tight'>
          Filosofía de Atención al Paciente{' '}
        </h2>{' '}
        <p className='text-muted-foreground mt-4 text-base/relaxed lg:text-lg/relaxed'>
          En el centro del enfoque del Dr. Joaquín Alfaro hacia el cuidado del
          paciente se encuentra un profundo compromiso con la atención
          personalizada y la empatía. Entiende que las afecciones de la mano y
          la muñeca pueden ser debilitantes y afectar profundamente la calidad
          de vida del paciente, por lo que se toma el tiempo para escuchar las
          preocupaciones y objetivos de cada individuo. Fomentando la
          comunicación abierta y la colaboración, el Dr. Alfaro trabaja de cerca
          con sus pacientes para desarrollar planes de tratamiento
          personalizados que aborden sus necesidades y preferencias únicas.{' '}
        </p>
      </div>
      <Image src={WhiteBottomWaves} className='block h-[100px] w-full' alt='' />
    </section>
  )
}

export default PhilosophyAndAffiliations
