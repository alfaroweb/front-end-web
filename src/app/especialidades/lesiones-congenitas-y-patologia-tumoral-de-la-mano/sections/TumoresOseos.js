import Image from 'next/image'

function TumoresOseos({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='tumores-mano'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='tumores-mano'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Tumores óseos o partes blandas
        </h2>
      </div>

      <p className='mb-4'>
        Los tumores en la mano pueden ser óseos o de partes blandas (tejidos
        como músculos, tendones o piel). La mayoría son benignos, como los
        encondromas y el tumor de células gigantes de vaina sinovial, pero en
        raras ocasiones pueden ser malignos.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber qué tipo de tumor tengo en la mano?
        </summary>
        <p className=''>
          El diagnóstico se realiza mediante una combinación de examen físico,
          radiografías y, a menudo, resonancia magnética. En ocasiones es
          necesaria una biopsia para determinar la naturaleza del tumor.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para un tumor en la mano?
        </summary>
        <p className=''>
          Dependiendo del tipo de tumor, realizamos una escisión quirúrgica para
          extraerlo. Si afecta al hueso, tendremos que rellenar el defecto que
          deja con injerto. En casos de malignidad, puede ser necesario resecar
          tejidos cercanos para asegurar la eliminación completa.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras la cirugía de un tumor en
          la mano?
        </summary>
        <p className=''>
          En tumores benignos, que son la mayoría en la mano, los resultados
          suelen ser excelentes, con bajo riesgo de recurrencia.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras la cirugía de un tumor de la mano?
        </summary>
        <p className=''>
          La recuperación varía según el tipo y tamaño del tumor, pero
          generalmente se puede volver a las actividades normales en días o en
          pocas semanas.
        </p>
      </details>
    </section>
  )
}

export default TumoresOseos
