import Image from 'next/image'

const education = {
  1: 'Diploma Nacional en Cirugía de la Mano (DECIM). III Edición del plan nacional de formación en Titulación Nacional de Experto en Cirugía de Mano',
  2: 'Máster propio en Cirugía de la Mano por la Universidad Internacional de Andalucía',
  3: 'Máster Propio en Actualización en Cirugía Ortopédica y Traumatología. CEU Universidad Cardenal Herrera',
  4: 'Máster en Clínica y Profesionalismo médico por la Universidad de Alcalá',
  5: 'Máster propio en Urgencias Traumatológicas por la CEU Universidad Cardenal Herrera'
}

function Education({ WhiteTopWaves, WhiteBottomWaves }) {
  return (
    <section className='w-full bg-academic bg-cover'>
      <div className='relative'>
        <Image
          src={WhiteTopWaves}
          className='absolute top-0 h-[100px] w-full drop-shadow-[0_10px_4px_rgba(133,134,134,0.1)]'
          alt='Separador superior de la sección dedicada a la formación académica en forma de ola'
        ></Image>

        <div className='mx-auto w-[90%] max-w-screen-lg space-y-4 py-[150px] text-white'>
          <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter md:text-4xl/tight'>
            Formación Académica y Experiencia Profesional
          </h2>

          <ul className='space-y-4 text-lg'>
            {Object.values(education).map((element, index) => (
              <li className='flex gap-4' key={index}>
                <div className=''>
                  <AwardIcon className='h-5 w-5' />
                </div>
                {element}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={WhiteBottomWaves}
          className='absolute bottom-0 h-[100px] w-full drop-shadow-[0_-10px_4px_rgba(133,134,134,0.1)]'
          alt='Separador inferior de la sección dedicada a la formación académica en forma de ola'
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
      <circle cx='12' cy='8' r='6' />
    </svg>
  )
}
