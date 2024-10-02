import Image from 'next/image'

function FactoresDeCrecimiento({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='factores-de-crecimiento'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} />
        <h2
          id='factores-de-crecimiento'
          className='text-2xl font-bold uppercase tracking-wide'
        >
          Factores de crecimiento
        </h2>
      </div>

      <p className='mb-4'>
        El plasma rico en plaquetas (PRP) es una técnica biológica utilizada
        para promover la reparación de los tejidos y retrasar la necesidad de
        cirugías invasivas. Consiste en la obtención de una muestra de sangre
        del propio paciente, la cual es procesada para concentrar las plaquetas
        y sus factores de crecimiento, que son clave en la reparación de
        tejidos, la reducción de la inflamación y el alivio del dolor.
      </p>

      {/* Detalles colapsables para preguntas frecuentes */}
      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿En qué consiste el tratamiento?
        </summary>
        <p className=''>
          El proceso para realizar una infiltración de PRP implica los
          siguientes pasos:
        </p>
        <ol className='list-decimal pl-5'>
          <li>
            <strong>Extracción de sangre:</strong> Se extrae una pequeña
            cantidad de sangre del paciente bajo condiciones de asepsia.
          </li>
          <li>
            <strong>Centrifugado:</strong> La muestra de sangre se somete a un
            proceso de centrifugación para separar sus componentes y obtener el
            plasma con una alta concentración de plaquetas.
          </li>
          <li>
            <strong>Inyección del PRP:</strong> El plasma rico en plaquetas se
            inyecta directamente en la zona afectada para acelerar el proceso de
            reparación.
          </li>
        </ol>
        Este procedimiento es seguro, ya que se utiliza la propia sangre del
        paciente, lo que elimina el riesgo de rechazo o reacciones adversas.
      </details>

      <details className='mb-4 cursor-pointer'>
        <summary className='mb-2 text-lg font-semibold'>
          ¿Cómo es la recuperación?
        </summary>
        <p className=''>
          El tratamiento con PRP suele ser mínimamente invasivo y no requiere
          tiempo de recuperación prolongado. Sin embargo, es posible que el
          paciente deba evitar actividades físicas intensas durante unos días
          para permitir una adecuada recuperación.
        </p>
      </details>
    </section>
  )
}

export default FactoresDeCrecimiento
