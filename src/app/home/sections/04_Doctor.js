import Image from 'next/image'
import Link from 'next/link'
import Shape from '/public/doctor-shape.webp'
import DotsBg from '@/app/components/DotsBg'

function Doctor() {
  return (
    <section className='relative mx-auto flex w-full flex-col items-center bg-white py-[50px]'>
      <DotsBg />
      <div className='mx-auto w-[90%] max-w-screen-md text-center'>
        <h2 className='text-3xl font-black tracking-wide text-custom-green-light md:text-4xl/tight'>
          Dr. Joaquín Alfaro Micó
        </h2>
        <p className='mx-auto mt-2'>
          Licenciado en Medicina y Cirugía por la Universidad de Castilla-La
          Mancha (Facultad de Medicina de Albacete). Accedió a las plazas de
          formación en Cirugía Ortopédica y Traumatología en el Hospital
          Universitario de Albacete en el año 2016, obteniendo el Título de
          Facultativo Especialista en Cirugía Ortopédica y Traumatología.
        </p>
      </div>

      <Image
        src={Shape}
        className='mx-auto w-full max-w-[500px] drop-shadow-[0_6px_10px_rgba(29,54,61,1)]'
        alt='Imagen del Dr. Alfaro, cirujano y traumatólogo de la mano'
      />

      <Link
        href='/sobre-mi'
        className='border-1 w-[180px] rounded-3xl border-2 border-transparent bg-custom-green-dark p-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-[#E6C47D] hover:text-[#E6C47D]'
      >
        Sobre mí
      </Link>
    </section>
  )
}

export default Doctor
