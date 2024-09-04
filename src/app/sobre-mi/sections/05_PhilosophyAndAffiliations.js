import Image from 'next/image'
import AfiliationPortrait from '/public/home/aboutme/afiliation.jpg'
import PatientPortrait from '/public/home/aboutme/patient.jpg'

function PhilosophyAndAffiliations() {
  return (
    <section className='bg-white grid lg:grid-cols-2 grid-rows-[auto,400px,auto,400px] lg:grid-rows-[600px,650px] xl:grid-rows-[500px,500px] w-[90%] md:max-w-screen-md lg:max-w-screen-xl mx-auto rounded-lg overflow-hidden shadow-md shadow-gray-600'>
      <div className='bg-gradient-to-r from-custom-green-light to-custom-green-dark text-white p-8 lg:row-end-2 h-auto'>
        {' '}
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
          Filosofía de Atención al Paciente
        </h2>
        <p className='mt-4 text-muted-foreground text-base/relaxed lg:text-lg/relaxed max-w-[700px] '>
          En el centro del enfoque del Dr. Joaquín Alfaro hacia el cuidado del
          paciente se encuentra un profundo compromiso con la atención
          personalizada y la empatía. Entiende que las afecciones de la mano y
          la muñeca pueden ser debilitantes y afectar profundamente la calidad
          de vida del paciente, por lo que se toma el tiempo para escuchar las
          preocupaciones y objetivos de cada individuo. Fomentando la
          comunicación abierta y la colaboración, el Dr. Alfaro trabaja de cerca
          con sus pacientes para desarrollar planes de tratamiento
          personalizados que aborden sus necesidades y preferencias únicas.
        </p>
      </div>
      <div className='lg:row-end-2'>
        {' '}
        <Image
          src={PatientPortrait}
          className='h-full object-right object-cover'
          alt=''
        ></Image>
      </div>
      <div className='row-start-4 lg:row-start-2'>
        {' '}
        <Image
          src={AfiliationPortrait}
          className='h-full object-cover'
          alt=''
        ></Image>
      </div>
      <div className='bg-gradient-to-r from-custom-green-light to-custom-green-dark text-white p-8 lg:row-start-2'>
        {' '}
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
          Afiliaciones profesionales
        </h2>
        <p className='mt-4 max-w-[700px] text-base/relaxed lg:text-lg/relaxed'>
          El Dr. Joaquín Alfaro es un miembro altamente respetado de la
          comunidad médica, con un fuerte compromiso de mantenerse a la
          vanguardia de los avances en cirugía de la mano. Es miembro activo de
          varias organizaciones profesionales prestigiosas, como la Sociedad
          Americana de Cirugía de la Mano, la Academia Americana de Cirujanos
          Ortopédicos y la Asociación Médica Americana. A través de su
          participación en estas organizaciones, el Dr. Alfaro participa
          regularmente en programas de educación continua, iniciativas de
          investigación y colaboraciones entre colegas, asegurando así que
          brinda a sus pacientes la atención más actualizada y basada en la
          evidencia.
        </p>
      </div>
    </section>
  )
}

export default PhilosophyAndAffiliations
