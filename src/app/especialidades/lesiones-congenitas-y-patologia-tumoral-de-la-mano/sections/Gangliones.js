import Image from 'next/image'

function Gangliones({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='gangliones'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='gangliones'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Gangliones
        </h2>
      </div>

      <p className='mb-4'>
        Un ganglión del carpo es un bulto lleno de líquido sinovial que aparece
        cerca de las articulaciones o los tendones de la muñeca. Es benigno,
        pero puede causar dolor o limitar el movimiento.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo un ganglión?
        </summary>
        <p className=''>
          Normalmente, el paciente notará un “bulto” en la muñeca blando que
          puede cambiar de tamaño de forma variable. El diagnóstico se basa en
          la exploración física y, ocasionalmente, pruebas de imagen como
          ecografía o resonancia magnética para confirmar su tamaño y ubicación.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de un ganglión?
        </summary>
        <p className=''>
          La cirugía es necesaria si el ganglión causa dolor persistente, limita
          el movimiento o crece considerablemente, además de no responder a
          otros tratamientos conservadores. Si el ganglión no provoca síntomas,
          la cirugía no es necesaria.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para un ganglión?
        </summary>
        <p className=''>
          Nuestro tratamiento para los gangliones se realiza de manera
          artroscópica, una técnica mínimamente invasiva que reduce
          considerablemente la nueva aparición del ganglión.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de ganglión?
        </summary>
        <p className=''>
          El resultado es generalmente muy positivo, con alivio del dolor y
          recuperación de la movilidad. La tasa de recurrencia es baja, aunque
          puede ocurrir en algunos casos.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de ganglión?
        </summary>
        <p className=''>
          La recuperación suele ser rápida, con regreso a actividades habituales
          en pocas semanas. Se recomienda fisioterapia si la rigidez o el dolor
          persisten durante la recuperación.
        </p>
      </details>
    </section>
  )
}

export default Gangliones
