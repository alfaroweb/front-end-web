import Image from 'next/image'
import GrayTopWaves from '/public/home/waves/white-top-waves.png'

function Specialities() {
  return (
    <section className=''>
      <Image
        src={GrayTopWaves}
        className='h-[100px] w-full'
      />
      <div className='w-[90%] mx-auto max-w-screen-xl py-[50px]'>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
          Áreas de especialización
        </h2>
        <div className='mt-4 grid gap-6 md:grid-cols-2'>
          <div className='rounded-lg border p-6 border-black hover:scale-[1.03] hover:border-black transition-all duration-300 border-opacity-25 bg-gradient-to-tl from-custom-green-light to-custom-green-dark text-white'>
            <h3 className='text-xl font-semibold'>Fracturas</h3>
            <p className='mt-2 text-muted-foreground'>
              Las fracturas en la mano y muñeca pueden ser complejas y requieren
              un enfoque especializado para garantizar una correcta
              recuperación. Desde inmovilización y tratamientos conservadores
              hasta intervenciones quirúrgicas, se emplean técnicas avanzadas
              para restaurar la función y movilidad de la articulación. El
              objetivo es asegurar que los huesos sanen correctamente,
              permitiendo al paciente retomar sus actividades cotidianas con
              seguridad y confianza.
            </p>
          </div>
          <div className='rounded-lg border p-6 border-opacity-25 bg-gradient-to-tr from-custom-green-light to-custom-green-dark text-white border-black hover:scale-[1.03] hover:border-black transition-all duration-300'>
            <h3 className='text-xl font-semibold'>Artrosis</h3>
            <p className='mt-2 text-muted-foreground'>
              La artrosis que afecta las articulaciones de la mano y muñeca
              puede provocar dolor crónico, rigidez y pérdida de movilidad. Se
              aplican tratamientos tanto conservadores como quirúrgicos,
              dependiendo del grado de la enfermedad. Desde terapias físicas y
              medicamentos hasta técnicas quirúrgicas, se busca aliviar los
              síntomas y mejorar la calidad de vida de quienes sufren esta
              afección, devolviendo funcionalidad y confort en las actividades
              diarias.
            </p>
          </div>
          <div className='rounded-lg border p-6 border-opacity-25 bg-gradient-to-bl from-custom-green-light to-custom-green-dark text-white border-black hover:scale-[1.03] hover:border-black transition-all duration-300'>
            <h3 className='text-xl font-semibold'>Compresiones Nerviosas</h3>
            <p className='mt-2 text-muted-foreground'>
              Las compresiones nerviosas, como el síndrome del túnel carpiano,
              causan dolor, entumecimiento y debilidad en la mano. Para aliviar
              la presión sobre los nervios y restaurar la función, se utilizan
              tanto tratamientos no invasivos como técnicas quirúrgicas
              avanzadas. El objetivo es proporcionar un alivio efectivo,
              restaurar la sensibilidad y mejorar la calidad de vida de quienes
              enfrentan este tipo de afecciones.
            </p>
          </div>
          <div className='rounded-lg border p-6 border-opacity-25 bg-gradient-to-br from-custom-green-light to-custom-green-dark text-white border-black hover:scale-[1.03] hover:border-black transition-all duration-300'>
            <h3 className='text-xl font-semibold'>Artroscopia de muñeca</h3>
            <p className='mt-2 text-muted-foreground'>
              La artroscopia de muñeca es una técnica mínimamente invasiva que
              permite diagnosticar y tratar problemas como lesiones de
              ligamentos o daños en el cartílago. A través de pequeñas
              incisiones, se accede a la articulación utilizando una cámara para
              realizar reparaciones precisas. Esta técnica reduce el tiempo de
              recuperación y el dolor postoperatorio, permitiendo a los
              pacientes retomar su actividad diaria de manera más rápida y con
              mejores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialities
