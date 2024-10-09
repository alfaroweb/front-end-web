import Image from 'next/image'

function SindromeTunelCarpiano({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='sindrome-tunel-carpiano'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='sindrome-tunel-carpiano'
          className='text-2xl font-bold uppercase text-custom-green-dark'
        >
          Síndrome del túnel carpiano
        </h2>
      </div>

      <p className='mb-4'>
        El{' '}
        <strong className='font-bold text-custom-green-light'>
          síndrome del túnel carpiano
        </strong>{' '}
        es una compresión del nervio mediano en el canal carpiano, ubicado en la
        muñeca. Esta neuropatía es la más frecuente en las extremidades
        superiores y provoca síntomas como dolor, entumecimiento y debilidad en
        la mano, afectando la capacidad funcional de la misma. Además tiene un
        predominio nocturno, impidiendo el descanso durante gran parte de la
        noche.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo síndrome del túnel carpiano?
        </summary>
        <p className=''>
          El diagnóstico se basa en una combinación de historia clínica,
          exploración física y pruebas de provocación, que producen la sensación
          de entumecimiento y calambres en la región del nervio mediano, que
          comprende el primer, segundo, tercero y mitad del cuarto dedo de la
          mano. Los estudios electrodiagnósticos confirman la compresión
          nerviosa, evaluando la velocidad de conducción y la gravedad de la
          afectación neurológica.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme del síndrome del túnel carpiano?
        </summary>
        <p className=''>
          La cirugía es recomendable cuando los síntomas persisten a pesar de
          tratamientos conservadores o si el daño nervioso comienza a afectar la
          función de la mano, generando pérdida de fuerza o sensibilidad, lo
          cual podría ser irreversible si no se interviene.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para el síndrome del túnel carpiano?
        </summary>
        <p className=''>
          Realizamos una liberación del nervio mediano mediante una incisión en
          la palma, dividiendo el retináculo flexor. Esto alivia la presión
          sobre el nervio. Dependiendo del caso, se puede optar por un abordaje
          a cielo abierto o endoscópico, siendo ambos efectivos.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos en una cirugía del túnel
          carpiano?
        </summary>
        <p className=''>
          La mayoría de los pacientes experimentan una mejora significativa en
          el alivio del dolor y la recuperación de la función de la mano. Sin
          embargo, la recuperación de la sensibilidad puede variar,
          especialmente en casos donde la compresión ha sido prolongada o
          severa.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía del túnel carpiano?
        </summary>
        <p className=''>
          La recuperación es rápida, no precisa inmovilización y el paciente
          podrá hacer prácticamente sus actividades diarias casi desde el
          inicio, excepto las que requieran usar fuerza. En la mayoría de los
          casos, los pacientes pueden retomar sus actividades normales en pocas
          semanas.
        </p>
      </details>
    </section>
  )
}

export default SindromeTunelCarpiano
