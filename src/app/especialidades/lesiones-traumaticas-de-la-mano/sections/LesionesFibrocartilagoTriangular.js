import Image from 'next/image'

function LesionesFibrocartilagoTriangular({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='lesiones-fibrocartilago-triangular'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          className='text-2xl font-bold uppercase tracking-wide'
          id='lesiones-fibrocartilago-triangular'
        >
          Lesiones fibrocartílago triangular
        </h2>
      </div>

      <p className='mb-4'>
        El Complejo Fibrocartílago Triangular está compuesto por el disco
        articular, ligamentos y otras estructuras que estabilizan la
        articulación del radio y el cúbito a nivel de la muñeca. Este complejo
        es crucial para la estabilidad y movimiento del antebrazo, especialmente
        en pronación y supinación (giros de muñeca).
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si tengo una lesión del fibrocartílago triangular?
        </summary>
        <p className=''>
          El paciente tiene dolor a nivel del cúbito en la muñeca cuando hace
          fuerza, se apoya o con los giros. El diagnóstico incluye una
          exploración física con pruebas específicas y radiografías para evaluar
          la congruencia de la articulación. Se completa con estudios
          complementarios como la resonancia magnética o la artro-resonancia.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una rotura de fibrocartílago triangular?
        </summary>
        <p className=''>
          Existen varios tipos de rotura del fibrocartílago triangular. Si se
          tratan de avulsiones que provocan inestabilidad o roturas que no
          mejoran con tratamiento conservador, es preciso realizar una
          artroscopia de muñeca.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para una rotura de fibrocartílago
          triangular?
        </summary>
        <p className=''>
          La técnica de elección en este tipo de lesiones es la artroscopia de
          muñeca. Una vez catalogado el tipo de rotura, se pueden hacer suturas
          o reinserciones del complejo fibrocartílago triangular. En caso de
          lesiones más graves, puede ser necesario un injerto tendinoso.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos tras una cirugía de
          fibrocartílago triangular?
        </summary>
        <p className=''>
          Si el tiempo hasta el diagnóstico es corto y el complejo
          fibrocartílago triangular es reconstruible, los resultados quirúrgicos
          suelen ser muy satisfactorios.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una cirugía de fibrocartílago
          triangular?
        </summary>
        <p className=''>
          La recuperación incluye inmovilización varias semanas, seguida de
          rehabilitación con ejercicios de movilidad y fortalecimiento
          progresivo. El tiempo total de recuperación depende del procedimiento,
          pero generalmente puede tomar entre 3 a 6 meses para volver a la
          actividad completa.
        </p>
      </details>
    </section>
  )
}

export default LesionesFibrocartilagoTriangular
