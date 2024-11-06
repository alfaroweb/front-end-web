import Image from 'next/image'

function Rizartrosis({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='rizartrosis'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='rizartrosis'
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
        >
          Rizartrosis
        </h2>
      </div>

      <p className='mb-4'>
        La rizartrosis es una artrosis que afecta la articulación
        trapeciometacarpiana en la base del pulgar. Se manifiesta principalmente
        con dolor, pérdida de fuerza de pinza y limitaciones en actividades
        diarias, debido al desgaste del cartílago articular. Es una de las
        artrosis más frecuentes del cuerpo humano, predominantemente en mujeres.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo rizartrosis?
        </summary>
        <p className=''>
          El diagnóstico se basa en la evaluación clínica del dolor y la
          funcionalidad del pulgar, junto con radiografías que muestran el grado
          de desgaste articular. En casos avanzados, se observa deformidad de la
          articulación.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de rizartrosis?
        </summary>
        <p className=''>
          La cirugía se recomienda cuando el tratamiento conservador (ortesis,
          ejercicios específicos, fisioterapia…) no alivia el dolor ni mejora la
          funcionalidad. En casos de afectación severa o persistente, la
          intervención quirúrgica es necesaria.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para la rizartrosis?
        </summary>
        <p className=''>
          Depende principalmente de la gravedad de cada caso. En pacientes con
          rizartrosis leves, se realiza artroscopia. En pacientes con artrosis
          más avanzadas, las prótesis trapeciometacarpianas han demostrado ser
          una solución ideal, restaurando la movilidad del pulgar y recuperando
          la fuerza de pinza del mismo, eliminando por supuesto el dolor.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de
          rizartrosis?
        </summary>
        <p className=''>
          La cirugía reduce significativamente el dolor y mejora la
          funcionalidad del pulgar. La mayoría de los pacientes intervenidos
          quedan libres de dolor y pueden volver a sus actividades diarias
          recuperando la fuerza y movilidad.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras la cirugía de rizartrosis?
        </summary>
        <p className=''>
          Tras la implantación de una prótesis, el paciente llevará un vendaje
          durante 2 semanas, para posteriormente comenzar la rehabilitación,
          centrada en ganar movilidad del pulgar y fuerza. En caso de
          artroscopia o artroplastia con injerto tendinoso, la recuperación
          incluye inmovilización durante dos semanas, seguida de rehabilitación.
        </p>
      </details>
    </section>
  )
}

export default Rizartrosis
