import Image from 'next/image'

function InjertosTendinosos({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='injertos-tendinosos'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          className='text-2xl font-bold uppercase tracking-wide'
          id='injertos-tendinosos'
        >
          Injertos Tendinosos
        </h2>
      </div>
      <p className='mb-4'>
        La cirugía secundaria de los tendones flexores se aplica cuando la
        reparación primaria no es posible o ha fallado, o cuando se produce una
        rotura secundaria. Este tipo de cirugía puede incluir desde suturas
        diferidas hasta procedimientos más complejos como la tenolisis o el
        injerto tendinoso, dependiendo del tipo de lesión y el estado del tejido
        circundante.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si ha fracasado la cirugía de un tendón flexor?
        </summary>
        <p className=''>
          Para saber si una cirugía de sutura de flexor ha fracasado, se realiza
          una evaluación clínica y exploración del dedo afectado. Si el paciente
          presenta limitación significativa de movimiento, especialmente
          discrepancia entre el movimiento activo y pasivo, podría ser necesario
          intervenir nuevamente. Las pruebas de imagen como la ecografía o la
          resonancia magnética pueden ser útiles para evaluar la condición del
          tendón y el tejido circundante.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de un fracaso de sutura de flexor?
        </summary>
        <p className=''>
          La cirugía secundaria es necesaria si la reparación primaria no es
          viable, si se ha producido una rotura secundaria, o si existen
          adherencias que limitan la movilidad del dedo. Es importante valorar
          individualmente a cada paciente en función del tendón afectado, la
          zona y las expectativas de cada uno. El injerto tendinoso se indica
          cuando hay pérdida significativa de sustancia tendinosa o cuando la
          retracción del tendón es considerable. Los procedimientos secundarios
          suelen realizarse mediante dos cirugías separadas en unos meses cuando
          el canal de deslizamiento no está en condiciones óptimas.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía usamos para una revisión de sutura tendinosa?
        </summary>
        <p className=''>
          Las técnicas quirúrgicas en la cirugía secundaria incluyen:
        </p>
        <ul className='mb-2 list-inside list-disc'>
          <li>
            <strong>Tenolisis:</strong> se realiza para liberar las adherencias
            que limitan la movilidad del tendón. Se debe respetar el sistema de
            poleas para asegurar un buen deslizamiento tendinoso.
          </li>
          <li>
            <strong>Injerto tendinoso:</strong> se utiliza cuando hay pérdida de
            tendón o una retracción tendinosa significativa. El injerto es un
            tendón sano que se suele obtener del mismo antebrazo afectado. El
            injerto puede realizarse en una o dos cirugías, dependiendo del
            estado del canal digital. Si son necesarias dos cirugías, en la
            primera se reconstruirá el canal digital y se colocará un espaciador
            de silicona, dejándolo todo preparado para unos meses después
            colocar el injerto en la segunda cirugía.
          </li>
        </ul>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras un injerto tendinoso?
        </summary>
        <p className=''>
          La cirugía secundaria puede restaurar la función de la mano, aunque
          siempre existe la posibilidad de cierta rigidez o pérdida parcial de
          movimiento, dependiendo de la gravedad de la lesión inicial y el
          tiempo hasta que se realiza la cirugía de rescate.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación de un injerto tendinoso?
        </summary>
        <p className=''>
          La recuperación de la cirugía secundaria de tendones requiere un
          manejo postoperatorio cuidadoso, con rehabilitación precoz para evitar
          la formación de nuevas adherencias. En el caso de un injerto en dos
          tiempos, es crucial la movilización pasiva entre la primera y segunda
          cirugía, y tras el segundo tiempo, seguir un programa de fisioterapia
          controlada para asegurar el correcto deslizamiento del nuevo tendón.
        </p>
      </details>
    </section>
  )
}

export default InjertosTendinosos
