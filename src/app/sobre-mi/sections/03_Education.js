import Image from 'next/image'
import WhiteTopWaves from '/public/home/waves/white-top-waves.png'
import GrayBottomWaves from '/public/home/waves/white-bottom-waves.png'

function Education() {
  return (
    <section className='w-full bg-academic bg-cover'>
      <div className='relative'>
        <Image
          src={WhiteTopWaves}
          className='absolute h-[100px] w-full top-0  drop-shadow-[0_10px_4px_rgba(133,134,134,0.1)]'
          alt=''
        ></Image>
        <div className='w-[90%] mx-auto max-w-screen-lg py-[150px] text-white space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8'>
            Formación Académica y Experiencia Profesional
          </h2>
          <ul className='space-y-4 text-lg'>
            <li className='flex gap-4'>
              <div className=''>
                <AwardIcon className='w-5 h-5 ' />
              </div>
              Diploma Nacional en Cirugía de la Mano (DECIM). III Edición del
              plan nacional de formación en Titulación Nacional de Experto en
              Cirugía de Mano
            </li>
            <li className='flex gap-4'>
              <div className=''>
                <AwardIcon className='w-5 h-5' />
              </div>
              Máster propio en Cirugía de la Mano por la Universidad
              Internacional de Andalucía{' '}
            </li>
            <li className='flex gap-4'>
              <div className=''>
                <AwardIcon className='w-5 h-5' />
              </div>
              Máster Propio en Actualización en Cirugía Ortopédica y
              Traumatología. CEU Universidad Cardenal Herrera{' '}
            </li>
            <li className='flex gap-4'>
              <div className=''>
                {' '}
                <AwardIcon className='w-5 h-5' />
              </div>
              Máster en Clínica y Profesionalismo médico por la Universidad de
              Alcalá{' '}
            </li>
            <li className='flex gap-4'>
              <div className=''>
                <AwardIcon className='w-5 h-5' />
              </div>
              Máster propio en Urgencias Traumatológicas por la CEU Universidad
              Cardenal Herrera{' '}
            </li>
          </ul>
          {/* <p className='text-base/relaxed lg:text-lg/relaxed'>
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
          </p> */}
        </div>
        <Image
          src={GrayBottomWaves}
          className='absolute h-[100px] w-full bottom-0 drop-shadow-[0_-10px_4px_rgba(133,134,134,0.1)]'
          alt=''
        ></Image>
      </div>
    </section>
  )
}

export default Education

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' />
      <circle
        cx='12'
        cy='8'
        r='6'
      />
    </svg>
  )
}
