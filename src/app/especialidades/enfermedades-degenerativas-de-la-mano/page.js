import Artroplastias from './sections/Artroplastias'
import Artrosis from './sections/Artrosis'
import DeformidadesDeLosDedos from './sections/DeformidadesDeLosDedos'
import Rizartrosis from './sections/Rizartrosis'

function EnfermedadesDegenerativas() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Especialistas en Tratamiento de Enfermedades Degenerativas de la
            Mano en Albacete{' '}
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            ¿Sufres dolor en la mano? Nuestros traumatólogos en Albacete ofrecen
            tratamientos avanzados para artrosis, rizartrosis y otras
            enfermedades degenerativas de la mano. Recupera la movilidad y
            mejora tu calidad de vida.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <Artrosis />
        <Rizartrosis />
        <Artroplastias />
        <DeformidadesDeLosDedos />
      </main>
    </>

    // <section className='w-[90%] max-w-screen-xl mx-auto'>
    //   <article>
    //     <header className='mb-8'>
    //       <h1 className='text-center text-4xl font-bold'>
    //         Enfermedades Degenerativas de la Mano
    //       </h1>
    //     </header>

    //     <section className='mb-8'>
    //       <p>
    //         Las enfermedades degenerativas de la mano son trastornos crónicos
    //         que afectan la estructura y función de los tejidos en esta área.
    //         Estas enfermedades pueden causar dolor, rigidez y pérdida de
    //         función, lo que afecta significativamente la calidad de vida y la
    //         capacidad para realizar actividades diarias.
    //       </p>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Artrosis
    //       </h2>
    //       <p className='mb-4'>
    //         La artrosis, también conocida como osteoartritis, es una enfermedad
    //         degenerativa que afecta las articulaciones de la mano. Se
    //         caracteriza por el desgaste del cartílago en las articulaciones, lo
    //         que resulta en dolor, inflamación y pérdida de movimiento. Este
    //         desgaste puede ser el resultado del envejecimiento, el uso excesivo
    //         de la articulación o lesiones previas. La artrosis puede afectar a
    //         cualquier articulación de la mano, incluyendo las articulaciones
    //         interfalángicas y metacarpofalángicas.
    //       </p>
    //       <p className='mb-4'>
    //         La artrosis es una enfermedad crónica que tiende a empeorar con el
    //         tiempo, aunque el ritmo de progresión puede variar entre individuos.
    //         Los síntomas pueden incluir dolor que empeora con la actividad,
    //         rigidez matutina, hinchazón y crepitación en las articulaciones
    //         afectadas. La limitación del movimiento y la debilidad muscular
    //         también son comunes a medida que la enfermedad avanza.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Medicamentos:</strong> Los medicamentos antiinflamatorios
    //           no esteroideos (AINEs) pueden ayudar a reducir la inflamación y el
    //           dolor asociados con la artrosis. Los analgésicos también pueden
    //           ser recetados para aliviar el dolor a corto plazo. En casos más
    //           graves, se pueden considerar inyecciones de corticosteroides para
    //           proporcionar alivio temporal.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Terapia Física:</strong> La terapia física desempeña un
    //           papel importante en el manejo de la artrosis de la mano. Los
    //           programas de ejercicios específicos pueden ayudar a fortalecer los
    //           músculos alrededor de las articulaciones afectadas, mejorar la
    //           estabilidad y aumentar el rango de movimiento. Los fisioterapeutas
    //           también pueden enseñar técnicas para proteger las articulaciones
    //           durante las actividades diarias y reducir la carga sobre ellas.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Tratamiento Quirúrgico:</strong> En casos avanzados de
    //           artrosis que no responden al tratamiento conservador, puede ser
    //           necesario considerar la cirugía. Los procedimientos quirúrgicos
    //           pueden incluir la artroplastia, donde se reemplaza la articulación
    //           afectada con una prótesis, o la artroscopia, donde se limpian los
    //           tejidos dañados y se realizan reparaciones mínimamente invasivas.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Artrosis Trapeziometacarpiana
    //       </h2>
    //       <p className='mb-4'>
    //         La artrosis trapeciometacarpiana es una forma específica de artrosis
    //         que afecta la articulación base del pulgar, conocida como
    //         articulación trapeciometacarpiana. Esta articulación es esencial
    //         para realizar movimientos de pinza y otros movimientos de precisión
    //         con la mano. La artrosis trapeciometacarpiana puede volverse
    //         dolorosa y rígida debido al desgaste del cartílago, lo que puede
    //         dificultar las actividades diarias como agarrar objetos y escribir.
    //       </p>
    //       <p className='mb-4'>
    //         La artrosis trapeciometacarpiana puede ser especialmente debilitante
    //         debido a su ubicación en la base del pulgar, lo que afecta una
    //         amplia gama de actividades cotidianas. Los síntomas pueden incluir
    //         dolor en la base del pulgar, debilidad al agarrar objetos y una
    //         sensación de crujido o chasquido durante el movimiento del pulgar.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Férulas:</strong> El uso de férulas puede ayudar a
    //           estabilizar la articulación y reducir el dolor asociado con la
    //           artrosis trapeciometacarpiana. Estas férulas se pueden usar
    //           durante la actividad o durante la noche para descansar la
    //           articulación y evitar movimientos dolorosos.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Inyecciones de Corticosteroides:</strong> Las inyecciones
    //           de corticosteroides pueden proporcionar alivio temporal del dolor
    //           y la inflamación en la articulación afectada. Estas inyecciones se
    //           pueden administrar en el consultorio del médico y generalmente se
    //           repiten según sea necesario para mantener el alivio de los
    //           síntomas.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Tratamiento Quirúrgico:</strong> En casos severos de
    //           artrosis trapeciometacarpiana que no responden al tratamiento
    //           conservador, se puede considerar la cirugía. La artroplastia de la
    //           articulación trapeciometacarpiana es un procedimiento común en el
    //           que se reemplaza la articulación dañada por una prótesis. La
    //           cirugía puede ayudar a aliviar el dolor y restaurar la función de
    //           la mano.
    //         </li>
    //       </ul>
    //     </section>
    //   </article>
    // </section>
  )
}

export default EnfermedadesDegenerativas
