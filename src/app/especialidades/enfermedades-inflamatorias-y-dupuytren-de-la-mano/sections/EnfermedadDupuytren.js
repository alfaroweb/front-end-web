import Image from 'next/image'

function EnfermedadDupuytren({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='enfermedad-dupuytren'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='enfermedad-dupuytren'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Enfermedad de Dupuytren
        </h2>
      </div>

      <p className='mb-4'>
        La enfermedad de Dupuytren es una afección que provoca el engrosamiento
        y retracción del tejido bajo la piel de la palma de la mano, formando
        nódulos y cuerdas que limitan la movilidad de los dedos, llevándolos a
        una posición fija en flexión.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo la enfermedad de Dupuytren?
        </summary>
        <p className=''>
          El diagnóstico se realiza mediante la observación clínica de nódulos o
          cuerdas en la palma y la incapacidad de extender completamente los
          dedos. Normalmente no se precisan pruebas de imagen.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de un Dupuytren?
        </summary>
        <p className=''>
          La cirugía es recomendada cuando la contractura afecta la
          funcionalidad, generalmente cuando hay una flexión mayor a 30° en las
          articulaciones metacarpofalángicas (MCF) o de más de 15° en las
          interfalángicas proximales (IFP). Principalmente se mide cuando el
          paciente no puede apoyar la palma plana sobre una mesa.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para la enfermedad de Dupuytren?
        </summary>
        <p className=''>
          La técnica de elección consiste en la fasciectomía limitada, es decir,
          una cirugía abierta donde se realiza la retirada completa de la
          cuerda. En otros casos también se puede realizar una técnica
          percutánea sin cicatrices, aunque esta tiene mayor posibilidad de
          recidiva.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de Dupuytren?
        </summary>
        <p className=''>
          El objetivo es mejorar la función de la mano, aliviando la contractura
          de los dedos. En la mayoría de los casos se logra una mejoría
          significativa en la extensión de los dedos y la capacidad de realizar
          actividades cotidianas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de Dupuytren?
        </summary>
        <p className=''>
          En casos leves, simplemente tras la cura de la herida el paciente
          podrá hacer una vida normal. En casos más severos, puede ser precisa
          el uso de férulas y de rehabilitación para conseguir la movilidad
          completa del dedo.
        </p>
      </details>
    </section>
  )
}

export default EnfermedadDupuytren
