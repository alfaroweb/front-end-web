import Image from 'next/image'
import Link from 'next/link'
import Shape from '/public/doctor-shape.png'
import DotsBg from '@/app/components/DotsBg'

function Doctor() {
  return (
    <section className='mx-auto flex flex-col items-center relative bg-white w-full py-[50px]'>
      <DotsBg />
      <div className='w-[90%] max-w-screen-md mx-auto text-center'>
        <h2 className='text-3xl tracking-wide md:text-4xl/tight text-gray-800 font-black'>
          Dr. Joaquín Alfaro Micó
        </h2>
        <p className=' mx-auto  text-gray-800  mt-2'>
          Licenciado en Medicina y Cirugía por la Universidad de Castilla-La
          Mancha (Facultad de Medicina de Albacete). Accedió a las plazas de
          formación en Cirugía Ortopédica y Traumatología en el Hospital
          Universitario de Albacete en el año 2016, obteniendo el Título de
          Facultativo Especialista en Cirugía Ortopédica y Traumatología.
        </p>
      </div>

      <Image
        src={Shape}
        className='drop-shadow-[0_6px_10px_rgba(29,54,61,1)] mx-auto w-full max-w-[500px]'
        alt=''
      />

      <Link
        href='/sobre-mi'
        className='p-3 text-white border-2 bg-[#336767] font-semibold rounded-3xl w-[180px] text-center bg-gradient-to-r from-custom-green-light to-custom-green-dark'
      >
        Sobre mí
      </Link>
    </section>
  )
}

export default Doctor
