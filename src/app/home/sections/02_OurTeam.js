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
            Confía en nuestro equipo experto y tecnología avanzada para tu
            cuidado médico completo.
          </h2>
          <p className='text-center text-base/relaxed'>
            Descubre nuestra{' '}
            <strong className='text-custom-green-light'>
              clínica médica líder en Albacete
            </strong>
            , donde encontrarás una amplia variedad de especialidades diseñadas
            para cubrir todas tus necesidades de atención médica. Nuestro equipo
            altamente capacitado y nuestra tecnología de punta se unen para
            ofrecerte un cuidado médico integral y de calidad excepcional.{' '}
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
