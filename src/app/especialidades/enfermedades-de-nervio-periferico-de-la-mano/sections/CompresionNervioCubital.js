import Image from 'next/image'

function CompresionNervioCubital({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='compresion-nervio-cubital'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='compresion-nervio-cubital'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Compresión del nervio cubital
        </h2>
      </div>

      <p className='mb-4'>
        La compresión del nervio cubital en el codo ocurre en un túnel
        osteo-fibroso llamado túnel cubital, generando síntomas como debilidad,
        entumecimiento y pérdida de fuerza en el brazo y mano, afectando
        principalmente el dedo meñique y el anular. Es una neuropatía común que
        puede requerir tratamiento quirúrgico.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo un atrapamiento del nervio cubital?
        </summary>
        <p className=''>
          El diagnóstico incluye exploración clínica para detectar pérdida de
          sensibilidad y fuerza en la mano, centrándose en el dedo meñique y
          anular. También se emplean estudios de electromiografía (EMG), ya que
          el nervio puede estar atrapado en el codo o en la muñeca. En la muñeca
          puede ser necesario realizar ecografías o resonancias para evaluar el
          nervio y descartar anomalías óseas o gangliones que compriman al
          nervio.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de un atrapamiento del nervio cubital?
        </summary>
        <p className=''>
          Se recomienda cirugía cuando la compresión provoca síntomas
          persistentes que afectan la función de la mano o hay evidencia de daño
          nervioso, como pérdida de fuerza o atrofia muscular. La intervención
          está también indicada si los tratamientos conservadores no logran
          aliviar la presión sobre el nervio.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para la compresión del nervio cubital?
        </summary>
        <p className=''>
          La técnica más frecuente es la liberación del nervio cubital, cortando
          el ligamento epitrócleo-olecraneano. En casos más complejos, puede
          requerirse una transposición anterior del nervio, moviéndolo hacia una
          posición más segura, aunque normalmente no es necesario. Si el
          atrapamiento está en la muñeca, hay que liberar el nervio abriendo el
          canal de Guyon.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras la liberación del nervio
          cubital?
        </summary>
        <p className=''>
          Los resultados suelen ser muy satisfactorios, especialmente cuando se
          actúa antes de que el nervio esté gravemente afectado. La cirugía
          alivia la presión sobre el nervio y previene daños adicionales,
          permitiendo la recuperación de la sensibilidad y fuerza en la mayoría
          de los casos.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras la liberación del nervio cubital?
        </summary>
        <p className=''>
          La recuperación incluye reposo inicial, seguido de rehabilitación
          progresiva para recuperar fuerza y movilidad. Los pacientes suelen
          reanudar actividades en semanas, aunque la cicatrización completa y la
          recuperación funcional plena puede llevar varios meses, especialmente
          si el daño previo fue significativo.
        </p>
      </details>
    </section>
  )
}

export default CompresionNervioCubital
