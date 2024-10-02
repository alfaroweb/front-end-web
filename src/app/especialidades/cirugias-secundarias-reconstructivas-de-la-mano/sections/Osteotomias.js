import Image from 'next/image'

function Osteotomias({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='osteotomias-mala-consolidacion'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='osteotomias-mala-consolidacion'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Osteotomías por Mala Consolidación
        </h2>
      </div>

      <p className='mb-4'>
        Las consolidaciones viciosas (maluniones) del radio distal ocurren
        cuando una fractura no sana en la alineación adecuada. Esto puede causar
        deformidades que afectan la función de la muñeca, provocando dolor,
        rigidez y limitaciones en el movimiento. La osteotomía correctora es el
        tratamiento estándar para realinear los huesos y restaurar la
        funcionalidad.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo se diagnostica una mala consolidación de radio?
        </summary>
        <p className=''>
          El diagnóstico incluye radiografías y tomografías computarizadas (TC)
          para identificar la deformidad y evaluar la articulación radiocubital
          distal. Es fundamental determinar si hay subluxación del carpo,
          inestabilidad o problemas intraarticulares. La planificación
          preoperatoria es crucial para una corrección precisa de la deformidad.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una consolidación viciosa de radio?
        </summary>
        <p className=''>
          La cirugía es recomendada cuando la mala consolidación afecta a la
          funcionalidad de la muñeca. Si el paciente tiene dolor y pérdida de
          fuerza, a lo que se le puede sumar una limitación de la movilidad,
          estaría indicada realizar una cirugía para corregir la deformidad. La
          corrección temprana mejora los resultados funcionales y permite una
          recuperación más rápida.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué técnica quirúrgica empleamos para solucionarlo?
        </summary>
        <p className=''>
          Utilizamos osteotomías correctoras con placas para realinear el hueso.
          En algunos casos, es necesario colocar injertos óseos. Cada caso se
          trata de manera individualizada, y con el estudio de la fractura
          creamos guías de corte con impresora en 3D que nos permite realizar el
          corte con la máxima precisión para conseguir la alineación más
          anatómica posible.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos con una osteotomía?
        </summary>
        <p className=''>
          Con una osteotomía bien planificada y ejecutada, se logra una
          corrección adecuada de la deformidad, restaurando la función de la
          muñeca y mejorando la calidad de vida. La cirugía reduce
          significativamente el dolor y la rigidez, permitiendo al paciente
          retomar sus actividades diarias con menos limitaciones.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una osteotomía?
        </summary>
        <p className=''>
          Con ayuda de fisioterapia y terapia ocupacional se optimiza la
          recuperación y se evitan complicaciones como la rigidez o la no
          consolidación y se mejora el rango articular y la fuerza. Es
          importante evitar sobrecargas tempranas.
        </p>
      </details>
    </section>
  )
}

export default Osteotomias
