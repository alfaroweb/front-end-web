import Image from 'next/image'
import { specialities } from '../data/data'

import WavesBottom from '/public/home/waves/white-bottom-waves.png'
import SpecialitiesCard from '../../components/SpecialitiesCard'
import WavesTop from '/public/home/waves/white-top-waves.png'
import SpecialitiesImg from '/public/home/specialities.jpg'

function Specialties() {
  return (
    <section className='mx-auto relative bg-specialities-bg bg-cover min-h-max'>
      <Image
        src={WavesTop}
        className='h-[150px] w-full absolute top-0 drop-shadow-[0_10px_7px_rgba(1,1,1,0.3)] block'
        alt=''
      />
      <div className='flex min-h-max py-[175px] flex-col-reverse lg:flex-row mx-auto w-[90%] max-w-screen-xl gap-8'>
        <div className='lg:w-1/2'>
          <div className='grid md:grid-cols-2 gap-2'>
            {specialities.map((specialitie, index) => (
              <SpecialitiesCard
                key={index}
                specialitie={specialitie}
              />
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 lg:flex lg:items-center lg:flex-col lg:justify-center'>
          {' '}
          <h2 className='text-3xl font-bold tracking-wide md:text-4xl/tight text-center p-4 text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.7)]'>
            Nuestras especialidades
          </h2>
          <p className='text-base/relaxed text-center mx-auto text-white'>
            En nuestra clínica en Albacete, nos especializamos en cirugía de la
            mano, ofreciendo tratamientos avanzados para lesiones traumáticas,
            enfermedades degenerativas, deformidades de los dedos, y más.
            Nuestro equipo de cirujanos expertos utiliza las técnicas más
            innovadoras para garantizar una recuperación rápida y eficaz.
            Descubre cómo podemos ayudarte a recuperar la funcionalidad y
            aliviar el dolor de tus manos.
          </p>
        </div>
      </div>

      <Image
        src={WavesBottom}
        className='h-[150px] w-full absolute bottom-0 block  drop-shadow-[0_-10px_7px_rgba(1,1,1,0.3)]'
        alt=''
      />
    </section>
  )
}

export default Specialties
