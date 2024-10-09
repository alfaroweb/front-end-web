import Image from 'next/image'

function DedoEnResorte({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='dedo-en-resorte'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          id='dedo-en-resorte'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Dedo en resorte
        </h2>
      </div>

      <p className='mb-4'>
        El dedo en resorte, o tenosinovitis estenosante, es una afección en la
        que uno de los dedos se queda bloqueado en una posición de flexión, y al
        desbloquearlo provoca un salto, similar a un “gatillo” o “resorte”. Esta
        condición ocurre cuando los tendones flexores del dedo se inflaman o
        engrosan, dificultando su movimiento normal.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo un dedo en resorte?
        </summary>
        <p className=''>
          El diagnóstico se realiza mediante una evaluación clínica, donde se
          detecta el bloqueo y el resorte posterior al flexionar y extender el
          dedo. También se pueden observar inflamación y dolor en la base del
          dedo afectado.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de un dedo en resorte?
        </summary>
        <p className=''>
          La cirugía es recomendable cuando los síntomas no mejoran con
          tratamientos conservadores, o si el dedo se bloquea frecuentemente y
          causa dolor significativo.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para un dedo en resorte?
        </summary>
        <p className=''>
          Se realiza una liberación quirúrgica del tendón afectado mediante una
          pequeña incisión. Esto permite que el tendón se deslice suavemente sin
          quedar bloqueado, mejorando la función del dedo.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de dedo en
          resorte?
        </summary>
        <p className=''>
          La cirugía tiene una alta tasa de éxito, con la mayoría de los
          pacientes recuperando el movimiento completo del dedo y eliminando el
          dolor. Las complicaciones son mínimas, lo que hace que el pronóstico
          sea favorable.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras la cirugía de dedo en resorte?
        </summary>
        <p className=''>
          La recuperación es rápida. Se recomienda movilizar el dedo desde el
          primer día para evitar rigidez, y el dolor postoperatorio suele ser
          leve y controlable con analgésicos, permitiendo un regreso a las
          actividades diarias en poco tiempo.
        </p>
      </details>
    </section>
  )
}

export default DedoEnResorte
