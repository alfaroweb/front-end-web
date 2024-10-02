import Image from 'next/image'
import Bg from '/public/home/bg-custom.png'

const specialities = [
  {
    title: 'Fracturas',
    text: `Las fracturas en la mano y muñeca pueden ser complejas y requieren un enfoque especializado para garantizar una correcta recuperación. Desde inmovilización y tratamientos conservadores hasta intervenciones quirúrgicas, se emplean técnicas avanzadas para restaurar la función y movilidad de la articulación. El objetivo es asegurar que los huesos sanen correctamente, permitiendo al paciente retomar sus actividades cotidianas con seguridad y confianza.`
  },
  {
    title: 'Artrosis',
    text: 'La artrosis que afecta las articulaciones de la mano y muñeca puede provocar dolor crónico, rigidez y pérdida de movilidad. Se aplican tratamientos tanto conservadores como quirúrgicos, dependiendo del grado de la enfermedad. Desde terapias físicas y medicamentos hasta técnicas quirúrgicas, se busca aliviar los síntomas y mejorar la calidad de vida de quienes sufren esta afección, devolviendo funcionalidad y confort en las actividades diarias.'
  },
  {
    title: 'Compresiones Nerviosas',
    text: 'Las compresiones nerviosas, como el síndrome del túnel carpiano, causan dolor, entumecimiento y debilidad en la mano. Para aliviar la presión sobre los nervios y restaurar la función, se utilizan tanto tratamientos no invasivos como técnicas quirúrgicas avanzadas. El objetivo es proporcionar un alivio efectivo, restaurar la sensibilidad y mejorar la calidad de vida de quienes enfrentan este tipo de afecciones.'
  },
  {
    title: 'Artroscopia de muñeca',
    text: 'La artroscopia de muñeca es una técnica mínimamente invasiva que permite diagnosticar y tratar problemas como lesiones de ligamentos o daños en el cartílago. A través de pequeñas incisiones, se accede a la articulación utilizando una cámara para realizar reparaciones precisas. Esta técnica reduce el tiempo de recuperación y el dolor postoperatorio, permitiendo a los pacientes retomar su actividad diaria de manera más rápida y con mejores resultados.'
  }
]

function Specialities({ WhiteTopWaves }) {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute left-0 top-20 z-20 h-full w-full'>
        <Image src={Bg} className='h-full object-cover opacity-[0.07]' />
      </div>
      <Image src={WhiteTopWaves} className='h-[100px] w-full' />
      <div className='relative z-30 mx-auto w-[90%] max-w-screen-xl py-[50px]'>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
          Áreas de especialización
        </h2>
        <div className='mt-4 grid gap-6 md:grid-cols-2'>
          {specialities.map((specialitie) => (
            <div
              className='rounded-lg border border-black border-opacity-25 bg-gradient-to-tl from-custom-green-light to-custom-green-dark p-6 text-white transition-all duration-300 hover:scale-[1.03] hover:border-black'
              key={specialitie.title}
            >
              <h3 className='text-xl font-semibold'>{specialitie.title}</h3>
              <p className='text-muted-foreground mt-2'>{specialitie.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialities
