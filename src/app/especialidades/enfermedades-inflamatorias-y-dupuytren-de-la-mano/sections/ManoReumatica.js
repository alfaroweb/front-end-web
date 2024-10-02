import Image from 'next/image'

function ManoReumatica({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='mano-reumatica'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='mano-reumatica'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Mano reumática
        </h2>
      </div>

      <p className='mb-4'>
        La artritis reumatoide se trata de una enfermedad autoinmune que puede
        llevar a destrucción articular y desalineación de los dedos, causando
        dolor, pérdida de función y una característica desviación cubital.
        También afecta a los huesos de la muñeca y a las partes blandas y
        tendones. Puede generar roturas tendinosas y aparición de tumoraciones
        llamadas pannus.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo afectación de mi mano por la artritis reumatoide?
        </summary>
        <p className=''>
          El diagnóstico de la mano reumática se basa en la evaluación clínica,
          radiografías para detectar daños articulares, y análisis de sangre que
          revelan marcadores inflamatorios y autoinmunes característicos de la
          artritis reumatoide.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cuándo debo operarme de una mano reumática?
        </summary>
        <p className=''>
          La cirugía es necesaria cuando hay dolor intenso o pérdida funcional
          severa. Si los pacientes mantienen buena función y están libres de
          dolor, incluso con deformidades avanzadas, la cirugía no es
          prioritaria.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada en una mano reumática?
        </summary>
        <p className=''>
          Depende principalmente de lo avanzado que esté el proceso en la mano
          del paciente. Puede variar desde una sinovectomía, reconstrucción y
          realineación de las articulaciones, hasta necesidad de colocación de
          prótesis o artrodesis. La elección depende del grado de deformidad y
          daño articular.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos en una cirugía de mano
          reumática?
        </summary>
        <p className=''>
          La cirugía busca aliviar el dolor y mejorar la función de la mano. En
          general, se obtiene una reducción significativa del dolor y mejor
          alineación de los dedos, permitiendo al paciente retomar sus
          actividades cotidianas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de mano reumática?
        </summary>
        <p className=''>
          La recuperación incluye rehabilitación y terapia física para recuperar
          movilidad y fuerza en la mano. Puede durar semanas o meses,
          dependiendo de la complejidad de la cirugía y la evolución del
          paciente. El tratamiento médico por parte de un reumatólogo es
          fundamental para un buen pronóstico de la enfermedad y evitar
          recidivas.
        </p>
      </details>
    </section>
  )
}

export default ManoReumatica
