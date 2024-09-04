import Image from 'next/image'
import DoctorsGift from '/public/specialities/doctors.png'
import Waves from '/public/home/svg.png'

function OurTeam() {
  return (
    <section className='bg-white relative'>
      <Image
        src={Waves}
        className='absolute -top-[150px] w-full h-[150px]'
        alt=''
      />{' '}
      <div className='max-w-screen-lg mx-auto lg:flex w-[90%]'>
        <div className='lg:w-1/2'>
          <Image
            src={DoctorsGift}
            className='max-w-[300px] mx-auto lg:max-w-full'
            alt=''
          />
        </div>

        <div className='lg:w-1/2'>
          <h2 className='font-bold tracking-tighter text-3xl/tight text-center p-4'>
            Confía en nuestro equipo experto y tecnología avanzada para tu
            cuidado médico completo.
          </h2>
          <p className='text-base/relaxed text-gray-500 text-center'>
            Descubre nuestra clínica médica líder en Albacete, donde encontrarás
            una amplia variedad de especialidades diseñadas para cubrir todas
            tus necesidades de atención médica. Nuestro equipo altamente
            capacitado y nuestra tecnología de punta se unen para ofrecerte un
            cuidado médico integral y de calidad excepcional. Bienvenido a un
            lugar donde tu salud es nuestra prioridad absoluta.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
