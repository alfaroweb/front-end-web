import Image from 'next/image'

function CoberturasDeLaMano({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='coberturas-mano'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='coberturas-mano'
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
        >
          Coberturas de la Mano
        </h2>
      </div>

      <p className='mb-4 text-base'>
        La{' '}
        <strong className='text-custom-green-light'>
          cobertura de partes blandas
        </strong>{' '}
        en la mano, ya sea por un{' '}
        <strong className='text-custom-green-light'>traumatismo</strong>,
        <strong className='text-custom-green-light'> quemadura</strong> o{' '}
        <strong className='text-custom-green-light'>tumor</strong>, implica la
        reparación de tejidos dañados, utilizando
        <strong className='text-custom-green-light'> injertos</strong> o{' '}
        <strong className='text-custom-green-light'>colgajos</strong> para
        cubrir zonas con pérdida de sustancia. Es crucial para prevenir{' '}
        <strong className='text-custom-green-light'>rigideces</strong>,{' '}
        <strong className='text-custom-green-light'>infecciones</strong> y
        mejorar la funcionalidad de la mano lesionada.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo saber si necesito una cobertura en la mano?
        </summary>
        <p className='text-base'>
          El diagnóstico de una{' '}
          <strong className='text-custom-green-light'>lesión</strong> que
          requiere{' '}
          <strong className='text-custom-green-light'>
            cobertura de partes blandas{' '}
          </strong>
          se basa en la evaluación de la extensión del{' '}
          <strong className='text-custom-green-light'>daño</strong>, la
          exposición de estructuras como{' '}
          <strong className='text-custom-green-light'>tendones</strong> o{' '}
          <strong className='text-custom-green-light'>huesos</strong>, y la
          viabilidad de los tejidos circundantes mediante examen físico.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Es necesaria una cirugía de cobertura de la mano?
        </summary>
        <p className='text-base'>
          La <strong className='text-custom-green-light'>cirugía</strong> es
          necesaria cuando hay{' '}
          <strong className='text-custom-green-light'>
            pérdida de sustancia
          </strong>{' '}
          con exposición de estructuras críticas como{' '}
          <strong className='text-custom-green-light'>huesos</strong> o{' '}
          <strong className='text-custom-green-light'>tendones</strong>. También
          se indica en casos donde el tratamiento conservador podría provocar
          complicaciones, como{' '}
          <strong className='text-custom-green-light'>rigidez</strong> o{' '}
          <strong className='text-custom-green-light'>infecciones</strong>.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Qué cirugía es la adecuada para la cobertura de la mano?
        </summary>
        <p className='text-base'>
          Se utilizan técnicas como{' '}
          <strong className='text-custom-green-light'>injertos de piel</strong>{' '}
          o{' '}
          <strong className='text-custom-green-light'>
            colgajos pediculados
          </strong>
          , dependiendo de la localización y gravedad de la{' '}
          <strong className='text-custom-green-light'>lesión</strong>. Estas
          técnicas incluyen{' '}
          <strong className='text-custom-green-light'>
            colgajos neurovasculares
          </strong>
          ,{' '}
          <strong className='text-custom-green-light'>
            colgajos de flujo reverso
          </strong>{' '}
          y avances de{' '}
          <strong className='text-custom-green-light'>colgajos locales</strong>.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Qué pronóstico y resultados esperamos tras una cobertura de mano?
        </summary>
        <p className='text-base'>
          La <strong className='text-custom-green-light'>cirugía</strong>{' '}
          permite una cobertura estable de la herida, mejora la cicatrización y
          previene complicaciones. Además, asegura la preservación de la{' '}
          <strong className='text-custom-green-light'>funcionalidad</strong> y
          minimiza el riesgo de{' '}
          <strong className='text-custom-green-light'>rigidez</strong> e
          <strong className='text-custom-green-light'>infecciones</strong> en la
          mano traumatizada.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo es la recuperación tras una cobertura de mano?
        </summary>
        <p className='text-base'>
          La recuperación incluye{' '}
          <strong className='text-custom-green-light'>
            inmovilización temporal
          </strong>{' '}
          y <strong className='text-custom-green-light'>rehabilitación</strong>{' '}
          para recuperar la{' '}
          <strong className='text-custom-green-light'>movilidad</strong> y{' '}
          <strong className='text-custom-green-light'>fuerza</strong> en la
          mano. El proceso puede ser prolongado, y depende de la extensión de la{' '}
          <strong className='text-custom-green-light'>lesión</strong> y del tipo
          de cobertura utilizada.
        </p>
      </details>
    </section>
  )
}

export default CoberturasDeLaMano
