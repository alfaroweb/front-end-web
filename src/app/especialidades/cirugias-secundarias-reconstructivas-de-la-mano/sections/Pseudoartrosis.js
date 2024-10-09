import Image from 'next/image'

function Pseudoartrosis({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='pseudoartrosis-escafoides'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='pseudoartrosis-escafoides'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Pseudoartrosis de Escafoides
        </h2>
      </div>

      <p className='mb-4'>
        La pseudoartrosis de escafoides es la falta de consolidación de una
        fractura del escafoides, un hueso del carpo, lo que provoca dolor y
        pérdida de funcionalidad en la muñeca, llegando a un proceso
        degenerativo y artrosis. Es una complicación frecuente cuando no se
        diagnostica a tiempo o no se sigue el tratamiento adecuado.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo se diagnostica una pseudoartrosis de escafoides?
        </summary>
        <p className=''>
          El diagnóstico se realiza principalmente a través de radiografías y
          tomografía computarizada (TC) para evaluar la anatomía del hueso y
          resonancia magnética (RM) para valorar la vascularización del hueso.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una pseudoartrosis de escafoides?
        </summary>
        <p className=''>
          La intervención quirúrgica está indicada cuando se ha confirmado una
          pseudoartrosis, pues si lo dejamos avanzar, habrá colapso de la
          muñeca, deformidad del escafoides y degeneración articular.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para una pseudoartrosis de escafoides?
        </summary>
        <p className=''>
          Existen varias técnicas quirúrgicas según el tipo y la gravedad de la
          pseudoartrosis. En nuestra clínica optamos por hacerlo de forma
          artroscópica para minimizar las complicaciones de la cirugía. Es
          preciso usar injerto de hueso obtenido del propio paciente. En casos
          más severos es necesario un abordaje abierto y el uso de injertos
          libres o vascularizados, dependiendo de si hay afectación de la
          vascularización del hueso.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de
          pseudoartrosis de escafoides?
        </summary>
        <p className=''>
          El objetivo es restaurar la anatomía y funcionalidad del escafoides
          para prevenir la degeneración de la muñeca y el desarrollo de
          artrosis. Cuando el hueso es viable, se consigue la consolidación en
          la mayoría de los pacientes, con buenos resultados funcionales.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de pseudoartrosis de
          escafoides?
        </summary>
        <p className=''>
          La recuperación incluye inmovilización con férulas durante 2 semanas y
          posteriormente fisioterapia para restaurar la movilidad y fuerza en la
          muñeca. La rehabilitación es clave para optimizar los resultados
          quirúrgicos.
        </p>
      </details>
    </section>
  )
}

export default Pseudoartrosis
