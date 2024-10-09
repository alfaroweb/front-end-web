import Image from 'next/image'

function ReparacionDeNervios({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='reparacion-nervios'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='reparacion-nervios'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Reparación de Nervios
        </h2>
      </div>

      <p className='mb-4 text-base'>
        Las{' '}
        <strong className='text-custom-green-light'>
          lesiones traumáticas de los nervios periféricos
        </strong>{' '}
        son daños causados por secciones, compresiones, estiramientos o
        contusiones que afectan la conducción nerviosa. Estas lesiones pueden
        causar{' '}
        <strong className='text-custom-green-light'>
          pérdida de función sensitiva
        </strong>
        , de movilidad o ambas, dependiendo de la severidad y la localización.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo saber si presento una lesión nerviosa?
        </summary>
        <p className='text-base'>
          El diagnóstico se basa en la evaluación clínica donde se objetiva una
          <strong className='text-custom-green-light'>
            {' '}
            pérdida de la función del nervio
          </strong>
          , es decir, un déficit de la
          <strong className='text-custom-green-light'>
            {' '}
            sensibilidad o la fuerza
          </strong>
          . Se acompaña de estudios de
          <em> conducción nerviosa</em> que ayudan a confirmar el diagnóstico.
          Los estudios de imagen, como la <em>resonancia magnética</em>, también
          se pueden utilizar para identificar daños estructurales en los
          nervios.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Tengo que operarme por una lesión nerviosa?
        </summary>
        <p className='text-base'>
          Si se confirma una{' '}
          <strong className='text-custom-green-light'>sección nerviosa</strong>,
          la <strong className='text-custom-green-light'>cirugía</strong> está
          indicada. Debe realizarse lo antes posible, en los primeros días, ya
          que si se deja, la posibilidad de{' '}
          <strong className='text-custom-green-light'>
            recuperación funcional
          </strong>{' '}
          disminuye considerablemente.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Qué cirugía es la adecuada para una sección nerviosa?
        </summary>
        <p className='text-base'>
          Existen diferentes técnicas que se usarán dependiendo del tipo de
          lesión, pero todas ellas deben llevarse a cabo mediante{' '}
          <em>microcirugía</em>
          para garantizar la coaptación de la sutura y minimizar la formación de
          <em> neuromas</em> y cicatrices. Se puede optar por una{' '}
          <em>neurorrafia</em> (suturar el nervio) si se puede realizar una{' '}
          <strong className='text-custom-green-light'>
            reparación directa
          </strong>{' '}
          ante una sección limpia. En casos donde no es posible hacer una
          sutura, es necesaria la colocación de{' '}
          <strong className='text-custom-green-light'>neurotubos</strong> o{' '}
          <strong className='text-custom-green-light'>
            injertos nerviosos
          </strong>{' '}
          obtenidos del propio paciente o de cadáver.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Qué pronóstico y resultados esperamos tras una sección nerviosa?
        </summary>
        <p className='text-base'>
          El pronóstico depende de la gravedad y localización de la lesión. En
          general, los{' '}
          <strong className='text-custom-green-light'>
            nervios más distales
          </strong>{' '}
          tienen un mejor pronóstico de recuperación. En{' '}
          <strong className='text-custom-green-light'>lesiones severas</strong>{' '}
          o proximales, los resultados varían, pero la cirugía puede restaurar
          parcialmente la{' '}
          <strong className='text-custom-green-light'>función motora</strong> y
          <strong className='text-custom-green-light'>sensitiva</strong>,
          especialmente si se interviene pronto.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold text-slate-900'>
          ¿Cómo es la recuperación tras una sección nerviosa?
        </summary>
        <p className='text-base'>
          La{' '}
          <strong className='text-custom-green-light'>
            recuperación postquirúrgica
          </strong>{' '}
          requiere{' '}
          <strong className='text-custom-green-light'>
            rehabilitación intensiva
          </strong>
          , y los tiempos varían según la gravedad de la lesión y la
          intervención realizada. Los pacientes pueden esperar mejoras graduales
          en la
          <strong className='text-custom-green-light'>
            {' '}
            sensibilidad y movimiento
          </strong>
          . En lesiones simples y distales, la recuperación es más rápida, pero
          en{' '}
          <strong className='text-custom-green-light'>lesiones graves</strong>,
          la regeneración completa puede tardar meses.
        </p>
      </details>
    </section>
  )
}

export default ReparacionDeNervios
