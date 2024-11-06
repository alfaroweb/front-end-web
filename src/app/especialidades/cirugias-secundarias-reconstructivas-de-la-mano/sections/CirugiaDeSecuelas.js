import Image from 'next/image'

function CirugiaDeSecuelas({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='cirugia-de-secuelas'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          className='mb-4 scroll-mt-[85px] text-2xl font-bold tracking-wide'
          id='cirugia-de-secuelas'
        >
          Cirugías de Secuelas
        </h2>
      </div>

      <p className='mb-4'>
        Las cirugías de secuelas están destinadas a tratar complicaciones o
        efectos secundarios que persisten después de una lesión o cirugía
        previa. Estas secuelas pueden incluir rigidez, deformidad o disfunción
        en la mano.
      </p>

      <h3 className='mb-2 text-xl font-semibold'>Tipos de Secuelas</h3>
      <ul className='mb-4 ml-6 list-disc'>
        <li>Rigidez articular y pérdida de movilidad.</li>
        <li>Deformidades resultantes de una curación inadecuada.</li>
        <li>Dificultad funcional y dolor persistente.</li>
      </ul>

      <h3 className='mb-2 text-xl font-semibold'>Tratamiento</h3>
      <ul className='mb-4 ml-6 list-disc'>
        <li>
          <strong>Evaluación Completa:</strong> Revisión de la historia clínica
          y exámenes físicos para identificar las secuelas.
        </li>
        <li>
          <strong>Corrección Quirúrgica:</strong> Procedimientos para corregir
          deformidades y restaurar la función.
        </li>
        <li>
          <strong>Rehabilitación:</strong> Terapia física y ocupacional para
          recuperar la movilidad y la funcionalidad.
        </li>
      </ul>

      <h3 className='mb-2 text-xl font-semibold'>Beneficios</h3>
      <ul className='mb-4 ml-6 list-disc'>
        <li>Mejora de la movilidad y funcionalidad en la mano afectada.</li>
        <li>Reducción del dolor y mejora en la calidad de vida.</li>
        <li>Recuperación de la capacidad para realizar actividades diarias.</li>
      </ul>
    </section>
  )
}

export default CirugiaDeSecuelas
