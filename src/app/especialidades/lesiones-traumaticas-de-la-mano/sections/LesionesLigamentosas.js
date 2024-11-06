import Image from 'next/image'

function LesionesLigamentosas({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='lesiones-ligamentosas'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
          id='lesiones-ligamentosas'
        >
          Lesiones ligamentosas (inestabilidades carpianas)
        </h2>
      </div>

      <p className='mb-4'>
        Una lesión ligamentosa en la muñeca puede causar una inestabilidad
        carpiana. La muñeca pierde su capacidad de soportar cargas normales y la
        transmisión de fuerzas en la muñeca, generando dolor, pérdida de fuerza
        y movilidad. El ligamento escafolunar es el más importante.
      </p>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo saber si me he roto un ligamento en la muñeca?
        </summary>
        <p className=''>
          El diagnóstico incluye una exploración clínica detallada para
          identificar crujidos, resaltes dolorosos o pérdida de fuerza. Se
          utilizan maniobras específicas y son necesarias pruebas de imagen,
          como radiografías dinámicas y resonancia magnética. En ocasiones, a
          pesar de realizar diferentes pruebas, no se logra confirmar el
          diagnóstico y es necesario realizar una artroscopia para evaluar la
          estabilidad del carpo y valorar si se trata de una rotura parcial o
          total, así como objetivar si es una lesión reparable o subsidiaria de
          reconstrucción.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Tengo que operarme de una lesión ligamentosa en la muñeca?
        </summary>
        <p className=''>
          La cirugía es necesaria cuando las inestabilidades afectan la función
          de la muñeca. En casos agudos, reparar los ligamentos dañados mejora
          los resultados. En situaciones más crónicas, pero donde todavía se
          puede reconstruir, se utilizan injertos tendinosos para recrear el
          ligamento. Lamentablemente, en ocasiones donde ya ha pasado tiempo
          desde la lesión inicial, existe daño estructural y no se puede
          reconstruir los ligamentos, optando en estos casos por técnicas de
          rescate como artrodesis, carpectomías o prótesis de muñeca.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué cirugía es la adecuada para una lesión ligamentosa del carpo?
        </summary>
        <p className=''>
          Existen numerosas técnicas que se usarán en función del tiempo de la
          lesión. En nuestra clínica, principalmente optamos por las técnicas
          asistidas por artroscopia, ya que se han demostrado mejores resultados
          que una técnica abierta. En caso de una lesión aguda, optaremos por
          una sutura ligamentosa. En casos más complejos y crónicos, es
          necesaria la reconstrucción de ligamentos con injertos (normalmente un
          tendón sano del antebrazo). En situaciones irreversibles, se emplean
          técnicas de rescate como artrodesis, carpectomía proximal o prótesis
          de muñeca.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Qué pronóstico y resultados esperamos en una lesión ligamentosa del
          carpo?
        </summary>
        <p className=''>
          Hay un amplio abanico por los numerosos tipos de lesiones y el momento
          en el que se diagnostican. En general, las reparaciones tempranas
          ofrecen buenos resultados, mientras que las inestabilidades crónicas
          pueden requerir tratamientos más complejos, que buscan reducir el
          dolor y preservar la función.
        </p>
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación tras una lesión ligamentosa del carpo?
        </summary>
        <p className=''>
          La recuperación varía según la intervención. Las reparaciones simples
          y reconstrucciones requieren una inmovilización temporal y
          rehabilitación progresiva. Son recuperaciones largas de
          aproximadamente 6-9 meses según el momento del diagnóstico.
        </p>
      </details>
    </section>
  )
}

export default LesionesLigamentosas
