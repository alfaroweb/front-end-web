import Image from 'next/image'

function TransferenciasTendinosas({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='transferencias-tendinosas'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='transferencias-tendinosas'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Transferencias Tendinosas
        </h2>
      </div>

      <p className='mb-4'>
        La transferencia tendinosa es una técnica quirúrgica en la que se
        reubica un tendón sano para reemplazar la función de un tendón dañado o
        paralizado. Se utiliza comúnmente para restaurar el movimiento en casos
        de lesiones nerviosas o tendinosas graves.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Soy candidato a una trasferencia tendinosa?
        </summary>
        <p className=''>
          Llegaremos al diagnóstico mediante una evaluación clínica y pruebas
          funcionales que confirmen la pérdida de función tendinosa. En algunos
          casos, se usan estudios de imagen y pruebas de conducción nerviosa
          para valorar los nervios afectados.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una trasferencia tendinosa?
        </summary>
        <p className=''>
          La cirugía está indicada cuando la pérdida de función es irreversible
          y no puede ser restaurada con otras técnicas, o cuando el paciente
          necesita recuperar la movilidad para mejorar su calidad de vida.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía se realiza para recuperar la movilidad de la mano?
        </summary>
        <p className=''>
          En la cirugía, reubicamos un tendón cercano que sigue siendo funcional
          para asumir la función del tendón lesionado. Se planea cuidadosamente
          según las necesidades de movimiento de cada paciente.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una trasferencia
          tendinosa?
        </summary>
        <p className=''>
          La transferencia tendinosa suele mejorar de forma significativa la
          función perdida, permitiendo al paciente recuperar movimientos clave.
          El éxito depende de la técnica y la rehabilitación postoperatoria.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una trasferencia tendinosa?
        </summary>
        <p className=''>
          La recuperación requiere fisioterapia intensiva para reaprender el uso
          del tendón transferido y optimizar los movimientos. Generalmente, se
          necesitan varios meses para lograr una funcionalidad completa y
          satisfactoria.
        </p>
      </details>
    </section>
  )
}

export default TransferenciasTendinosas
