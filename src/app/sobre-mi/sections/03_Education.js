import Image from 'next/image'
import WhiteTopWaves from '/public/home/waves/white-top-waves.png'
import GrayBottomWaves from '/public/home/waves/gray-bottom-waves.png'

function Education() {
  return (
    <section className='w-full'>
      <div className='bg-gradient-to-r from-custom-green-light to-custom-green-dark relative'>
        <Image
          src={WhiteTopWaves}
          className='absolute h-[100px] w-full top-0  drop-shadow-[0_10px_3px_rgba(29,54,61,0.2)]'
          alt=''
        ></Image>
        <div className='w-[90%] mx-auto max-w-screen-lg py-[150px] text-slate-300 space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-center text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
            Formación Académica y Experiencia Profesional
          </h2>
          <p className='text-base/relaxed lg:text-lg/relaxed'>
            El Dr. Joaquín Alfaro es un cirujano de mano altamente capacitado y
            experimentado con una impresionante trayectoria académica y
            profesional. Recibió su título de médico de la prestigiosa
            Universidad de Medicina, donde se graduó como el mejor de su clase.
            Tras su formación médica, completó un riguroso programa de
            residencia en Cirugía Ortopédica en el reconocido Hospital XYZ,
            donde perfeccionó su experiencia en procedimientos de manos y
            extremidades superiores.
          </p>
          <p className='text-base/relaxed lg:text-lg/relaxed'>
            Después de su residencia, el Dr. Joaquín Alfaro realizó estudios
            especializados adicionales en Cirugía de la Mano, completando una
            beca en el renombrado Hand Center. Durante este tiempo, obtuvo una
            amplia experiencia en las últimas técnicas y tratamientos para una
            amplia gama de afecciones de la mano y la muñeca, incluido el
            síndrome del túnel carpiano, lesiones de tendones, artritis y más.
          </p>
        </div>
        <Image
          src={GrayBottomWaves}
          className='absolute h-[100px] w-full bottom-0 drop-shadow-[0_-10px_3px_rgba(29,54,61,0.2)]'
          alt=''
        ></Image>
      </div>
    </section>
  )
}

export default Education
