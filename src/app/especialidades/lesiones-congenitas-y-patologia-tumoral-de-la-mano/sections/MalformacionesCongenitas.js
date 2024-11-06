import Image from 'next/image'

function MalformacionesCongenitas({ Book }) {
  return (
    <section
      className='mx-auto w-[90%] max-w-screen-lg'
      aria-labelledby='malformaciones'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='malformaciones'
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
        >
          Malformaciones Congénitas en la Mano
        </h2>
      </div>

      <p className='mb-4'>
        Las malformaciones congénitas de la mano son anomalías presentes desde
        el nacimiento que afectan la estructura o función de la mano. Estas
        alteraciones pueden variar desde leves hasta severas y pueden influir en
        la funcionalidad del niño.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber el tipo de malformación que tengo?
        </summary>
        <p className=''>
          El diagnóstico se realiza a través de un examen físico detallado del
          niño y, en algunos casos, se complementa con estudios de imagen como
          radiografías para evaluar las estructuras óseas y los tejidos blandos.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una malformación congénita en la mano?
        </summary>
        <p className=''>
          El tratamiento quirúrgico se realiza en los primeros años de vida,
          dependiendo del tipo de malformación. Algunas intervenciones son más
          urgentes, mientras que otras pueden esperar hasta que el niño tenga
          más edad.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de una
          malformación en la mano?
        </summary>
        <p className=''>
          El objetivo principal es mejorar la funcionalidad de la mano,
          intentando lograr una apariencia normal. La cirugía busca maximizar la
          capacidad del niño para realizar tareas cotidianas.
        </p>
      </details>
    </section>
  )
}

export default MalformacionesCongenitas
