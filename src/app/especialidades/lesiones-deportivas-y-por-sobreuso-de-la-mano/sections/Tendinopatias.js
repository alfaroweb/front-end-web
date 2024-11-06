import Image from 'next/image'

function Tendinopatias({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='tendinopatias'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='tendinopatias'
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
        >
          Tendinopatías
        </h2>
      </div>

      <p className='mb-4'>
        Las tendinopatías son condiciones que pueden surgir por inflamación o
        degeneración crónica de los tendones, generalmente debido a un sobreuso
        o a traumatismos repetitivos. También pueden asociarse a enfermedades
        inflamatorias como la artritis reumatoide o a condiciones sistémicas
        como la diabetes, afectando la funcionalidad de la mano y la muñeca.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo una tendinitis?
        </summary>
        <p className=''>
          El paciente presentará dolor en la zona del tendón afectado,
          especialmente al realizar ciertos movimientos. El diagnóstico se basa
          en una evaluación clínica, donde se identifica el dolor en la muñeca o
          mano, especialmente en zonas específicas de los tendones extensores.
          Se complementa con maniobras específicas que provocan dolor, y la
          ecografía puede ayudar a obtener mayor precisión en el diagnóstico.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una tendinitis?
        </summary>
        <p className=''>
          La cirugía se recomienda cuando el tratamiento conservador, que
          incluye inmovilización, medicamentos y fisioterapia, no alivia los
          síntomas. En casos de tenosinovitis de De Quervain o síndrome de
          intersección, si persiste el dolor o hay restricciones funcionales, se
          considera la liberación quirúrgica como una opción.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para una tendinitis?
        </summary>
        <p className=''>
          La técnica más empleada es la liberación quirúrgica de la vaina del
          tendón, que permite su movimiento y deslizamiento libre. Se realiza
          una pequeña incisión en el compartimento afectado, se identifica el
          tendón y se libera cualquier constricción o tabique, evitando dañar
          las estructuras cercanas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de tendinitis?
        </summary>
        <p className=''>
          La mayoría de los pacientes experimenta una mejoría significativa del
          dolor y la funcionalidad tras la cirugía. En casos de tenosinovitis,
          los resultados quirúrgicos son excelentes, con una baja tasa de
          complicaciones y un alto porcentaje de recuperación completa de la
          función del tendón.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de tendinitis?
        </summary>
        <p className=''>
          Generalmente, la recuperación completa ocurre en unas pocas semanas,
          con un retorno gradual a las actividades normales, permitiendo al
          paciente recuperar su funcionalidad sin dolor.
        </p>
      </details>
    </section>
  )
}

export default Tendinopatias
