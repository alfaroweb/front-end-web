import Image from 'next/image'
import { specialities } from '../data/data'
import SpecialitiesCard from '../../components/SpecialitiesCard'

function Specialties({ WhiteTopWaves, WhiteBottomWaves }) {
  return (
    <section className='relative mx-auto min-h-max bg-specialities-bg bg-cover'>
      <Image
        src={WhiteTopWaves}
        className='absolute top-0 block h-[150px] w-full drop-shadow-[0_10px_7px_rgba(1,1,1,0.3)]'
        alt='Separador superior de la sección en forma de ola'
      />
      <div className='mx-auto flex min-h-max w-[90%] max-w-screen-xl flex-col-reverse gap-8 py-[175px] lg:flex-row'>
        <div className='lg:w-1/2'>
          <div className='grid gap-2 md:grid-cols-2'>
            {specialities.map((specialitie, index) => (
              <SpecialitiesCard key={index} specialitie={specialitie} />
            ))}
          </div>
        </div>
        <div className='text-white lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center'>
          {' '}
          <h2 className='p-4 text-center text-3xl font-bold tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)] md:text-4xl/tight'>
            Nuestras especialidades
          </h2>
          <p className='mx-auto text-center text-base/relaxed'>
            En nuestra clínica en Albacete, nos especializamos en cirugía y
            traumatología de la mano, ofreciendo tratamientos avanzados para
            lesiones traumáticas, enfermedades degenerativas, deformidades de
            los dedos, y más. Nuestro equipo de cirujanos y traumatólogos en
            Albacete, utiliza las técnicas más innovadoras para garantizar una
            recuperación rápida y eficaz. Descubre cómo podemos ayudarte a
            recuperar la funcionalidad y aliviar el dolor de tus manos.
          </p>
        </div>
      </div>

      <Image
        src={WhiteBottomWaves}
        className='absolute bottom-0 block h-[150px] w-full drop-shadow-[0_-10px_7px_rgba(1,1,1,0.3)]'
        alt=''
      />
    </section>
  )
}

export default Specialties
