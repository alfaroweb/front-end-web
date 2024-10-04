import Image from 'next/image'

function ArtrosisDedos({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='artrosis-dedos'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='artrosis-dedos'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Artrosis en dedos
        </h2>
      </div>

      <p className='mb-4'>
        La artrosis de los dedos es una degeneración del cartílago en las
        articulaciones de los dedos, lo que provoca dolor, rigidez y deformidad.
        Es una afección común en personas mayores y puede afectar la movilidad.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo artrosis en los dedos?
        </summary>
        <p className=''>
          El diagnóstico se realiza mediante la evaluación clínica, observando
          síntomas como dolor, rigidez e incluso deformidad. Se confirma con
          radiografías que muestran la pérdida de espacio articular, osteofitos
          y geodas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de artrosis en los dedos?
        </summary>
        <p className=''>
          La cirugía se considera cuando los tratamientos conservadores
          (medicación, fisioterapia) no alivian el dolor, o si la deformidad y
          la pérdida de función son significativas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para la artrosis en los dedos?
        </summary>
        <p className=''>
          Dependiendo del caso y de la articulación, podemos sustituir la
          articulación por una prótesis, o fusionar la misma mediante
          artrodesis, para aliviar el dolor y mejorar la función de los dedos.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras la cirugía de artrosis en
          los dedos?
        </summary>
        <p className=''>
          La cirugía ofrece un alivio significativo del dolor y mejora la
          función en la mayoría de los pacientes. En el caso de la fusión, se
          elimina el movimiento doloroso, mientras que en el reemplazo, se
          preserva cierta movilidad.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de artrosis en los dedos?
        </summary>
        <p className=''>
          La recuperación puede durar varias semanas, con rehabilitación
          posterior para mejorar la función. En la mayoría de los casos, se
          logra aliviar el dolor, aunque puede persistir cierta rigidez.
        </p>
      </details>
    </section>
  )
}

export default ArtrosisDedos
