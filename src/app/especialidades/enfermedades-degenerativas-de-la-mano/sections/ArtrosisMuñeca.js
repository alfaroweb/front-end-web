import Image from 'next/image'

function ArtrosisMuñeca({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='artrosis-muneca'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='artrosis-muneca'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Artrosis de muñeca
        </h2>
      </div>

      <p className='mb-4'>
        La artrosis de muñeca es el desgaste del cartílago que cubre las
        articulaciones de la muñeca, lo que provoca dolor, rigidez y limitación
        de movimiento. Suele ser causada por fracturas previas, lesiones
        ligamentosas o un proceso degenerativo en pacientes más mayores.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo artrosis de muñeca?
        </summary>
        <p className=''>
          El paciente tendrá dolor en la muñeca con inflamación, así como
          limitación de la movilidad. También notará pérdida de fuerza y dolor
          al agarrar objetos. El diagnóstico de artrosis se puede confirmar a
          través de la exploración física y radiografías que muestran el
          desgaste del cartílago, la reducción del espacio articular y el
          desplazamiento de los huesos afectados.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de artrosis de muñeca?
        </summary>
        <p className=''>
          La cirugía es necesaria cuando el dolor y la rigidez no mejoran con
          tratamientos conservadores, o cuando la artrosis afecta
          significativamente la funcionalidad de la muñeca.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para la artrosis en la muñeca?
        </summary>
        <p className=''>
          Dependiendo del grado de artrosis y de las necesidades del paciente,
          podemos optar por la implantación de una prótesis para eliminar el
          dolor y mantener la movilidad de la muñeca, o realizar una artrodesis
          (fusión de la muñeca), que también eliminará el dolor.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de artrosis de
          muñeca?
        </summary>
        <p className=''>
          La cirugía reduce el dolor de manera significativa y mejora la función
          en la mayoría de los casos. En la artrodesis, se elimina el movimiento
          doloroso, mientras que la prótesis permite mantener la movilidad de la
          muñeca.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de artrosis de muñeca?
        </summary>
        <p className=''>
          La recuperación varía según la técnica utilizada, pero puede llevar
          varios meses. Es importante realizar rehabilitación para recuperar
          fuerza y movilidad. La mayoría de los pacientes experimenta una mejora
          notable en el dolor y la función.
        </p>
      </details>
    </section>
  )
}

export default ArtrosisMuñeca
