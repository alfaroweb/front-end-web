import Image from 'next/image'
import DoctorsGift from '/public/home/Doctors-bro.webp'
import Waves from '/public/home/svg.webp'

function OurTeam() {
  return (
    <section className='relative z-10 bg-white py-[50px]'>
      <Image
        src={Waves}
        className='absolute -top-[150px] h-[150px] w-full'
        alt=''
      />{' '}
      <div className='mx-auto w-[90%] max-w-screen-lg lg:flex lg:items-center lg:gap-8'>
        {/* <div className='lg:w-1/2'>
          <Image
            src={DoctorsGift}
            className='mx-auto max-w-[300px] lg:max-w-full'
            alt='Ilustración de 3 doctores representando nuestro equipo médico'
          />
        </div> */}

        <div className=''>
          <h2 className='p-4 text-center text-3xl/tight font-bold tracking-tighter text-custom-green-dark'>
            Equipo con experiencia en cirugía de mano
          </h2>
          <p className='text-center text-base/relaxed'>
            Nuestro equipo está conformado por especialistas altamente
            cualificados, con años de experiencia dedicados a la cirugía de
            mano. Combinamos conocimientos avanzados y tecnología de última
            generación para garantizar diagnósticos precisos y tratamientos
            efectivos. Confíe en nuestro compromiso y trayectoria para cuidar la
            salud y funcionalidad de sus manos.
            <br />
            <span className='text-lg font-bold text-custom-green-light'>
              ¡Tu salud es nuestra prioridad absoluta!
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
