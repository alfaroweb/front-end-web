import Image from 'next/image'

function NeuromasYTumoresNerviosos({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='neuromas-tumores'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='neuromas-tumores'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Neuromas y Tumores Nerviosos
        </h2>
      </div>

      <p className='mb-4 text-base'>
        Los <strong className='text-custom-green-light'>neuromas</strong> son
        crecimientos anormales que suelen desarrollarse tras una{' '}
        <strong className='text-custom-green-light'>lesión nerviosa</strong>,
        mientras que los{' '}
        <strong className='text-custom-green-light'>tumores nerviosos</strong>{' '}
        pueden ser benignos (como los <em>schwannomas</em>) o, en raras
        ocasiones, malignos.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo saber si tengo un neuroma o un tumor nervioso?
        </summary>
        <p className='text-base'>
          Si hemos tenido una{' '}
          <strong className='text-custom-green-light'>
            lesión nerviosa previa
          </strong>{' '}
          y comenzamos con dolor en la herida y calambres asociados, es posible
          que se haya generado un
          <strong className='text-custom-green-light'> neuroma</strong>. El
          diagnóstico se realiza mediante examen físico y pruebas de imagen,
          como ecografía o <em>resonancia magnética</em>, para evaluar el
          tamaño, ubicación y características del neuroma. Las mismas pruebas se
          realizarán para objetivar si puede existir un{' '}
          <strong className='text-custom-green-light'>tumor nervioso</strong> en
          pacientes sin una lesión nerviosa previa.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Tengo que operarme de un neuroma o tumor nervioso?
        </summary>
        <p className='text-base'>
          La <strong className='text-custom-green-light'>cirugía</strong> es
          necesaria si el{' '}
          <strong className='text-custom-green-light'>neuroma</strong> causa
          dolor, entumecimiento o pérdida de función en la mano. Igualmente,
          para un{' '}
          <strong className='text-custom-green-light'>tumor nervioso</strong>.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Qué técnica quirúrgica empleamos para solucionarlo?
        </summary>
        <p className='text-base'>
          Es imprescindible realizar esta cirugía con microscopio y un control
          <em> neurofisiológico</em> realizado por un especialista
          neurofisiológico que nos ayudará a determinar la conducción del
          nervio. La{' '}
          <strong className='text-custom-green-light'>cirugía</strong> consiste
          en la{' '}
          <strong className='text-custom-green-light'>
            resección del neuroma
          </strong>{' '}
          o <strong className='text-custom-green-light'>tumor nervioso</strong>,
          intentando preservar siempre la mayor cantidad posible de{' '}
          <strong className='text-custom-green-light'>función nerviosa</strong>.
          En algunos casos donde el nervio no tiene continuidad, es necesario
          realizar
          <strong className='text-custom-green-light'>
            {' '}
            injertos nerviosos
          </strong>
          .
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo es la recuperación de esta cirugía?
        </summary>
        <p className='text-base'>
          La recuperación varía según el tipo de{' '}
          <strong className='text-custom-green-light'>tumor</strong>, pero
          generalmente se necesita tiempo para recuperar la{' '}
          <strong className='text-custom-green-light'>función</strong>. En
          cirugías de{' '}
          <strong className='text-custom-green-light'>
            resección de tumor
          </strong>
          , la recuperación será rápida; en cambio, en procesos de{' '}
          <strong className='text-custom-green-light'>neuromas </strong>
          que requieran{' '}
          <strong className='text-custom-green-light'>injerto</strong>, los
          tiempos pueden alargarse meses.
        </p>
      </details>
    </section>
  )
}

export default NeuromasYTumoresNerviosos
