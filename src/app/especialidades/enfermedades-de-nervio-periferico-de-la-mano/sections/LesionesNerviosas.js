function LesionesNerviosas() {
  return (
    <section className='bg-white py-[50px]'>
      <div className='w-[90%] mx-auto max-w-screen-lg'>
        <h2 className='text-3xl tracking-wide text-center font-bold mb-4'>
          Lesiones Nerviosas
        </h2>
        <p className='mb-4'>
          Las lesiones nerviosas en la mano pueden ocurrir debido a
          traumatismos, cortes profundos, fracturas o compresión prolongada de
          los nervios. Estas lesiones pueden afectar la capacidad de sentir y
          mover la mano y los dedos, y requieren atención especializada.
        </p>

        <h3 className='text-xl font-semibold mb-2'>
          Tipos de Lesiones Nerviosas
        </h3>
        <ul className='list-disc ml-6 mb-4'>
          <li>
            <strong>Neuropraxia:</strong> Lesión leve en la que el nervio está
            intacto pero no funciona temporalmente.
          </li>
          <li>
            <strong>Axonotmesis:</strong> Lesión más grave en la que el axón del
            nervio está dañado, pero la estructura de soporte del nervio
            permanece intacta.
          </li>
          <li>
            <strong>Neurotmesis:</strong> Lesión severa en la que el nervio está
            completamente cortado o desgarrado.
          </li>
        </ul>

        <h3 className='text-xl font-semibold mb-2'>Diagnóstico</h3>
        <ul className='list-disc ml-6 mb-4'>
          <li>
            <strong>Examen Clínico:</strong> Evaluación de la función nerviosa y
            muscular en la mano y el antebrazo.
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
            <strong>Terapia Física:</strong> Ejercicios de rehabilitación para
            mejorar la movilidad y la función de la mano.
          </li>
          <li>
            <strong>Medicamentos:</strong> Analgésicos y antiinflamatorios para
            controlar el dolor y la inflamación.
          </li>
          <li>
            <strong>Cirugía:</strong> Reparación quirúrgica del nervio en caso
            de neurotmesis o lesiones graves que no mejoran con tratamiento
            conservador.
          </li>
          <li>
            <strong>Terapia Ocupacional:</strong> Entrenamiento en habilidades
            motoras finas y adaptación a dispositivos de asistencia.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default LesionesNerviosas
