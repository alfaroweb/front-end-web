import Image from 'next/image'

function LesionesTendinosas({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='lesiones-tendinosas'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
          id='lesiones-tendinosas'
        >
          LESIONES TENDINOSAS
        </h2>
      </div>

      <p className='mb-4'>
        Las lesiones de los tendones ocurren con frecuencia debido a su
        localización superficial en la muñeca, mano y dedos, lo que los hace
        vulnerables. Pueden producirse por heridas leves o traumas severos, y
        pueden involucrar pérdida de tejido y fracturas. Es crucial conocer bien
        la anatomía de los tendones para diagnosticar y tratar adecuadamente
        estas lesiones, ya que pueden causar deformidades y pérdida funcional
        significativa.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si me he seccionado un tendón?
        </summary>
        <p className=''>
          Llegaremos al diagnóstico principalmente con la clínica y una
          exploración adecuada. En algunos casos puede ser muy útil realizar una
          ecografía en la consulta para localizar los cabos tendinosos, que
          según en qué zona se haya producido la sección, pueden retraerse. Es
          importante identificar la extensión de la lesión tendinosa y posibles
          complicaciones asociadas, como fracturas o daño neurovascular.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una lesión tendinosa?
        </summary>
        <p className=''>
          Ante una herida incisocontusa cerca de zona tendinosa, es
          imprescindible su exploración ante la posibilidad de encontrar
          lesiones parciales que podrían pasar desapercibidas y precisan
          suturarse. Las lesiones totales son más evidentes y prácticamente
          todas ellas precisan reparación quirúrgica para evitar complicaciones
          como deformidades permanentes y limitaciones funcionales.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para una sección tendinosa?
        </summary>
        <p className=''>
          Existen numerosas y diferentes técnicas de reparación que usaremos en
          función de la localización y del tipo de la lesión. Están indicadas
          suturas directas, reinserciones o técnicas específicas para corregir
          la deformidad si ya está establecida. Se han demostrado suturas que
          ofrecen mayor resistencia para poder comenzar una rehabilitación
          temprana, pues esta será la clave de una buena recuperación.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos en una lesión tendinosa?
        </summary>
        <p className=''>
          El objetivo de la cirugía es alcanzar una restauración completa de la
          función de la mano, aunque en algunas ocasiones es difícil según la
          localización y el tipo de lesión. El principal caballo de batalla a
          combatir son las adherencias que produce la cicatrización tendinosa,
          impidiendo el deslizamiento del tendón y provocando rigidez en el
          dedo. Una buena rehabilitación y terapia ocupacional, junto a una
          colaboración del paciente, nos ayudará a conseguir el mejor resultado
          funcional posible.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una lesión tendinosa?
        </summary>
        <p className=''>
          La recuperación incluye inmovilización inicial, generalmente con una
          férula, seguida de rehabilitación temprana para prevenir rigideces y
          adherencias. Los ejercicios controlados permiten recuperar la
          movilidad sin poner en riesgo la sutura. La fisioterapia es clave para
          lograr un buen resultado funcional, con un protocolo que puede durar
          de 4 a 6 semanas o más, según la complejidad de la lesión y la cirugía
          realizada. Los tendones flexores necesitan una recuperación mayor que
          los tendones extensores.
        </p>
      </details>
    </section>
  )
}

export default LesionesTendinosas
