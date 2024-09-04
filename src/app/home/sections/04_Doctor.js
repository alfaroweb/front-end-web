import Image from 'next/image'
import Link from 'next/link'
import Shape from '/public/doctor-shape.png'
import DotsBg from '@/components/DotsBg'

function Doctor() {
  return (
    <section className='mx-auto flex flex-col items-center relative bg-white w-full'>
      <DotsBg />
      <div className='w-[90%] max-w-screen-md mx-auto mb-2 text-center'>
        <h2 className='text-3xl tracking-wide md:text-4xl/tight text-gray-800 font-black mb-4 '>
          Dr. Joaquín Alfaro Micó
        </h2>
        <p className=' mx-auto  text-gray-800  '>
          Licenciado en Medicina y Cirugía por la Universidad de Castilla-La
          Mancha (Facultad de Medicina de Albacete). Accedió a las plazas de
          formación en Cirugía Ortopédica y Traumatología en el Hospital
          Universitario de Albacete en el año 2016, obteniendo el Título de
          Facultativo Especialista en Cirugía Ortopédica y Traumatología.
        </p>
      </div>

      <div className='w-[450px] flex flex-col items-center justify-center overflow-hidden relative mx-auto min-h-[500px] '>
        <Image
          src={Shape}
          className='drop-shadow-[0_10px_10px_rgba(29,54,61,1)]'
          alt=''
        />
      </div>
      <Link
        href='/sobre-mi'
        className='p-3 px-4 text-white border-2 bg-[#336767] font-semibold rounded-3xl mb-8 w-[180px] text-center'
      >
        Sobre mí
      </Link>
    </section>
  )
}

export default Doctor
