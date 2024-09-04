import TunelCarpiano from './sections/TunelCarpiano'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Enfermedades de Nervio Periférico de la Mano en Albacete
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Diagnóstico y tratamiento de condiciones como el síndrome del túnel
            carpiano, compresión del nervio cubital y lesiones nerviosas.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <TunelCarpiano />

        <section className='py-[50px]'>
          <div className='w-[90%] mx-auto max-w-screen-lg'>
            <h2 className='text-3xl tracking-wide text-center font-bold mb-4'>
              Compresión del Nervio Cubital
            </h2>
            <p className='mb-4'>
              La compresión del nervio cubital, también conocida como síndrome
              del canal de Guyon o neuropatía cubital, ocurre cuando el nervio
              cubital se comprime en la muñeca o el codo. Esta condición puede
              causar dolor, debilidad y entumecimiento en la mano y los dedos, y
              es tratable en nuestra clínica en Albacete.
            </p>

            <h3 className='text-xl font-semibold mb-2'>
              Síntomas de la Compresión del Nervio Cubital
            </h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                Entumecimiento y hormigueo en el meñique y el lado del dedo
                anular más cercano al meñique.
              </li>
              <li>
                Dolor en el codo o la muñeca, que puede irradiar hacia el
                antebrazo.
              </li>
              <li>
                Debilidad en la mano, especialmente en los músculos que
                controlan los movimientos finos.
              </li>
              <li>
                Dificultad para realizar movimientos precisos con los dedos.
              </li>
            </ul>

            <h3 className='text-xl font-semibold mb-2'>Diagnóstico</h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <strong>Examen Clínico:</strong> Pruebas de fuerza y
                sensibilidad en la mano y el antebrazo.
              </li>
              <li>
                <strong>
                  Electromiografía (EMG) y Estudios de Conducción Nerviosa:
                </strong>{' '}
                Para evaluar la función del nervio cubital y localizar la
                compresión.
              </li>
              <li>
                <strong>Resonancia Magnética (RM):</strong> Para visualizar
                cualquier anomalía que pueda estar comprimiendo el nervio.
              </li>
            </ul>

            <h3 className='text-xl font-semibold mb-2'>Tratamiento</h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <strong>Férulas:</strong> Uso de férulas para mantener la muñeca
                o el codo en una posición que alivie la presión sobre el nervio
                cubital.
              </li>
              <li>
                <strong>Terapia Física:</strong> Ejercicios para mejorar la
                fuerza y la flexibilidad del antebrazo y la mano.
              </li>
              <li>
                <strong>Inyecciones de Corticosteroides:</strong> Para reducir
                la inflamación alrededor del nervio cubital.
              </li>
              <li>
                <strong>Cirugía:</strong> En casos graves, puede ser necesaria
                una intervención quirúrgica para liberar el nervio cubital y
                prevenir un daño permanente.
              </li>
            </ul>
          </div>
        </section>

        <section className='bg-white py-[50px]'>
          <div className='w-[90%] mx-auto max-w-screen-lg'>
            <h2 className='text-3xl tracking-wide text-center font-bold mb-4'>
              Lesiones Nerviosas
            </h2>
            <p className='mb-4'>
              Las lesiones nerviosas en la mano pueden ocurrir debido a
              traumatismos, cortes profundos, fracturas o compresión prolongada
              de los nervios. Estas lesiones pueden afectar la capacidad de
              sentir y mover la mano y los dedos, y requieren atención
              especializada.
            </p>

            <h3 className='text-xl font-semibold mb-2'>
              Tipos de Lesiones Nerviosas
            </h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <strong>Neuropraxia:</strong> Lesión leve en la que el nervio
                está intacto pero no funciona temporalmente.
              </li>
              <li>
                <strong>Axonotmesis:</strong> Lesión más grave en la que el axón
                del nervio está dañado, pero la estructura de soporte del nervio
                permanece intacta.
              </li>
              <li>
                <strong>Neurotmesis:</strong> Lesión severa en la que el nervio
                está completamente cortado o desgarrado.
              </li>
            </ul>

            <h3 className='text-xl font-semibold mb-2'>Diagnóstico</h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <strong>Examen Clínico:</strong> Evaluación de la función
                nerviosa y muscular en la mano y el antebrazo.
              </li>
              <li>
                <strong>
                  Electromiografía (EMG) y Estudios de Conducción Nerviosa:
                </strong>{' '}
                Para determinar el nivel y la gravedad de la lesión nerviosa.
              </li>
              <li>
                <strong>Ultrasonido y Resonancia Magnética (RM):</strong> Para
                visualizar lesiones estructurales que puedan estar afectando los
                nervios.
              </li>
            </ul>

            <h3 className='text-xl font-semibold mb-2'>Tratamiento</h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <strong>Terapia Física:</strong> Ejercicios de rehabilitación
                para mejorar la movilidad y la función de la mano.
              </li>
              <li>
                <strong>Medicamentos:</strong> Analgésicos y antiinflamatorios
                para controlar el dolor y la inflamación.
              </li>
              <li>
                <strong>Cirugía:</strong> Reparación quirúrgica del nervio en
                caso de neurotmesis o lesiones graves que no mejoran con
                tratamiento conservador.
              </li>
              <li>
                <strong>Terapia Ocupacional:</strong> Entrenamiento en
                habilidades motoras finas y adaptación a dispositivos de
                asistencia.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default page
