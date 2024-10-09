import Image from 'next/image'

function ArtroscopiaMuneca({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='artroscopia-muneca'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='artroscopia-muneca'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Artroscopia de muñeca
        </h2>
      </div>

      <p className='mb-4'>
        La artroscopia de muñeca es una técnica mínimamente invasiva que permite
        diagnosticar y tratar patologías dentro de la articulación de la muñeca
        mediante un artroscopio, una cámara con la que vemos el interior de la
        muñeca a través de una herida milimétrica, mejorando la visualización de
        los tejidos y facilitando intervenciones precisas.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿La artroscopia permite diagnosticar?
        </summary>
        <p className=''>
          El diagnóstico de una patología en la muñeca se realiza con estudios
          clínicos y de imagen, pero cuando estos no son concluyentes, la
          artroscopia diagnóstica permite observar directamente las estructuras
          internas de la muñeca y determinar la causa del dolor o la disfunción.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué técnicas quirúrgicas empleamos en la artroscopia de muñeca?
        </summary>
        <p className=''>
          La artroscopia emplea pequeños portales en la muñeca, a través de los
          cuales se introduce una cámara y el instrumental quirúrgico. Se
          utilizan técnicas para la reparación de ligamentos, reducción de
          fracturas, gangliones, lesiones del fibrocartílago triangular,
          artrosis, entre otras.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué resultados esperamos con una artroscopia de muñeca?
        </summary>
        <p className=''>
          La artroscopia de muñeca mejora notablemente el dolor y la
          funcionalidad, permitiendo una recuperación más rápida y con menos
          complicaciones que las cirugías abiertas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una artroscopia de muñeca?
        </summary>
        <p className=''>
          La recuperación suele ser rápida, con inmovilización temporal y
          rehabilitación para recuperar la movilidad. Dependiendo del
          procedimiento realizado, los pacientes pueden retomar sus actividades
          normales en pocas semanas, siempre bajo supervisión médica.
        </p>
      </details>
    </section>
  )
}

export default ArtroscopiaMuneca
