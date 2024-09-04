import Fracturas from './sections/Fracturas'
import LesionesLigamentosas from './sections/LesionesLigamentosas'
import LesionesTendinosas from './sections/LesionesTendinosas'
import Luxaciones from './sections/Luxaciones'

function LesionesTraumaticas() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Lesiones Traumáticas de la Mano en Albacete
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Guía completa sobre fracturas, luxaciones, lesiones tendinosas y
            ligamentosas.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <Fracturas />
        <Luxaciones />
        <LesionesTendinosas />
        <LesionesLigamentosas />
        <section className='bg-white'>
          <div className='w-[90%] mx-auto max-w-screen-lg py-[50px]'>
            <h2 className='text-3xl tracking-wide text-center font-bold mb-4'>
              Conclusión
            </h2>
            <p className='mb-4'>
              Las lesiones traumáticas de la mano, como fracturas, luxaciones,
              lesiones tendinosas y ligamentosas, pueden tener un impacto
              significativo en la función y calidad de vida. En Albacete,
              nuestro equipo especializado está comprometido en ofrecer el mejor
              tratamiento y rehabilitación para asegurar una recuperación
              efectiva. Si experimentas síntomas de alguna de estas lesiones, te
              recomendamos buscar atención médica profesional para obtener un
              diagnóstico preciso y un plan de tratamiento adecuado.
            </p>

            <h3 className='text-xl font-semibold mb-2'>Recursos Adicionales</h3>
            <ul className='list-disc ml-6 mb-4'>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline'
                >
                  Guía Completa para la Prevención y Tratamiento de Fracturas en
                  Deportes
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline'
                >
                  Video Tutorial sobre la Reducción de Luxaciones y Manejo de
                  Lesiones
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-blue-600 hover:underline'
                >
                  Programa de Ejercicios para la Rehabilitación de Lesiones
                  Tendinosas
                </a>
              </li>
            </ul>

            <p className='mb-4'>
              Para una evaluación exhaustiva y un tratamiento personalizado,{' '}
              <a
                href='#'
                className='text-blue-600 hover:underline'
              >
                contacta a nuestros especialistas en cirugía de la mano en
                Albacete
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
    // <div className='w-[90%] max-w-screen-lg mx-auto'>
    //   <article>
    //     <header className='mb-8'>
    //       <h1 className='text-center text-4xl font-bold'>
    //         Lesiones Traumáticas de la Mano
    //       </h1>
    //     </header>

    //     <section className='mb-8'>
    //       <p>
    //         Las lesiones traumáticas de la mano son comunes y pueden variar en
    //         gravedad desde heridas menores hasta lesiones complejas que afectan
    //         huesos, tendones, nervios y vasos sanguíneos. La mano es una
    //         estructura anatómica compleja compuesta por 27 huesos, múltiples
    //         articulaciones, tendones, ligamentos, nervios y vasos sanguíneos.
    //         Cada una de estas estructuras juega un papel crucial en la función
    //         de la mano, lo que la convierte en una de las partes más
    //         funcionalmente importantes del cuerpo humano. Dada la complejidad
    //         anatómica y funcional de la mano, incluso lesiones menores pueden
    //         tener un impacto significativo en la capacidad de realizar
    //         actividades diarias, afectando la calidad de vida y la capacidad
    //         laboral de los individuos.
    //       </p>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Fracturas
    //       </h2>
    //       <p className='mb-4'>
    //         Las fracturas de los huesos de la mano incluyen las fracturas de los
    //         huesos metacarpianos (los huesos de la palma) y las falanges (los
    //         huesos de los dedos). Estas fracturas pueden ser causadas por
    //         caídas, golpes directos, accidentes deportivos, o lesiones por
    //         aplastamiento. Los síntomas típicos incluyen dolor intenso,
    //         hinchazón, deformidad visible, hematomas y dificultad para mover los
    //         dedos afectados. En algunos casos, las fracturas pueden estar
    //         asociadas con lesiones en los tejidos blandos circundantes.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Conservador:</strong> Las fracturas no desplazadas o
    //           mínimamente desplazadas pueden ser tratadas con inmovilización
    //           mediante férulas o yeso durante 3 a 6 semanas. El objetivo es
    //           mantener los fragmentos óseos en una posición adecuada para la
    //           cicatrización. El manejo del dolor incluye el uso de
    //           antiinflamatorios no esteroideos (AINEs) y, en algunos casos,
    //           analgésicos más fuertes.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Quirúrgico:</strong> Las fracturas desplazadas,
    //           inestables, abiertas o con compromiso articular significativo
    //           pueden requerir reducción abierta y fijación interna (ORIF) con
    //           placas, tornillos o clavos. La cirugía busca realinear los
    //           fragmentos óseos y estabilizarlos para permitir una adecuada
    //           cicatrización y restaurar la función normal.
    //         </li>
    //       </ul>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Rehabilitación</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Fase inicial:</strong> Durante la inmovilización, se
    //           recomienda mantener la elevación de la mano y la aplicación de
    //           hielo para reducir la hinchazón. Es importante prevenir la rigidez
    //           articular mediante movimientos suaves de las articulaciones no
    //           afectadas.
    //         </li>
    //         <li className='mb-2 ml-6'>
    //           <strong>Post-inmovilización:</strong> Una vez retirada la
    //           inmovilización, la terapia física se enfoca en recuperar la
    //           movilidad y la fuerza. Esto incluye ejercicios de rango de
    //           movimiento pasivo y activo, técnicas de estiramiento,
    //           fortalecimiento gradual y terapia manual. El objetivo es restaurar
    //           la funcionalidad completa y prevenir complicaciones como la
    //           rigidez articular y la debilidad muscular.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Luxaciones
    //       </h2>
    //       <p className='mb-4'>
    //         Una luxación ocurre cuando los huesos de una articulación se salen
    //         de su posición normal, afectando comúnmente las articulaciones de
    //         los dedos. Las luxaciones son muy dolorosas y pueden causar
    //         deformidades evidentes, hinchazón y dificultad para mover la
    //         articulación afectada. Pueden ser resultado de traumas directos,
    //         caídas o movimientos forzados.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Reducción cerrada:</strong> Consiste en la manipulación de
    //           los huesos para volver a colocarlos en su lugar bajo anestesia
    //           local o general. Esta técnica se utiliza principalmente en
    //           luxaciones simples sin complicaciones.
    //         </li>
    //         <li className='mb-2 ml-6'>
    //           <strong>Inmovilización:</strong> Después de la reducción, se
    //           utiliza una férula o yeso para estabilizar la articulación durante
    //           2 a 4 semanas, permitiendo que los ligamentos y otros tejidos
    //           blandos se curen adecuadamente.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Quirúrgico:</strong> En casos de luxaciones recurrentes,
    //           complejas o asociadas con daños significativos en los ligamentos,
    //           puede ser necesario realizar una reparación quirúrgica para
    //           estabilizar la articulación.
    //         </li>
    //       </ul>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Rehabilitación</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Inmediatamente después de la reducción:</strong> Se
    //           realizan ejercicios de movilidad pasiva para evitar la rigidez y
    //           mantener el rango de movimiento articular. La movilización
    //           temprana controlada es crucial para prevenir la rigidez.
    //         </li>
    //         <li className='mb-2 ml-6'>
    //           <strong>Post-inmovilización:</strong> La terapia física se enfoca
    //           en restaurar la fuerza y la función articular mediante ejercicios
    //           de fortalecimiento progresivo, técnicas de terapia manual y
    //           ejercicios específicos para mejorar la coordinación y la destreza.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Lesiones Tendinosas
    //       </h2>
    //       <p className='mb-4'>
    //         Los tendones flexores y extensores permiten el movimiento de los
    //         dedos y la muñeca. Las laceraciones, cortes profundos o traumatismos
    //         pueden dañar estos tendones, resultando en pérdida de función y
    //         movilidad. Las lesiones tendinosas pueden ser complejas debido a la
    //         proximidad de los tendones con los nervios y los vasos sanguíneos.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-4 ml-6'>
    //           <strong>Quirúrgico:</strong> La reparación tendinosa se realiza
    //           mediante sutura, utilizando técnicas específicas que aseguran una
    //           unión fuerte y flexible. La cirugía generalmente se sigue de
    //           inmovilización para permitir la cicatrización.
    //         </li>
    //       </ul>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Rehabilitación</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Inmediatamente después de la cirugía:</strong> La
    //           movilización temprana controlada es fundamental para prevenir
    //           adherencias y mejorar la cicatrización. Se pueden utilizar
    //           técnicas de movilización pasiva asistida y ejercicios de flexión y
    //           extensión controlada.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Progresión gradual:</strong> Ejercicios de fortalecimiento
    //           y estiramiento bajo la supervisión de un terapeuta ocupacional. La
    //           rehabilitación puede incluir el uso de dispositivos de terapia
    //           manual, ejercicios de resistencia y técnicas de terapia
    //           ocupacional para mejorar la función y la destreza de la mano.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Lesiones Nerviosas
    //       </h2>
    //       <p className='mb-4'>
    //         Los nervios de la mano, como el nervio mediano, cubital y radial,
    //         pueden lesionarse debido a cortes profundos, fracturas o
    //         compresiones. Los síntomas incluyen pérdida de sensibilidad,
    //         debilidad muscular y parálisis parcial de los músculos de la mano.
    //         Las lesiones nerviosas pueden tener un impacto significativo en la
    //         funcionalidad de la mano y requerir un manejo especializado.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Conservador:</strong> Monitoreo y terapia física si el
    //           nervio no está completamente seccionado. El uso de
    //           antiinflamatorios y analgésicos puede ayudar a manejar el dolor y
    //           la inflamación. En algunos casos, se pueden utilizar férulas para
    //           aliviar la presión sobre el nervio afectado.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Quirúrgico:</strong> Reparación o injerto nervioso si el
    //           nervio está completamente seccionado. Esto puede incluir la sutura
    //           directa de los extremos del nervio o el uso de un injerto nervioso
    //           para cerrar la brecha. La cirugía se realiza bajo microscopio para
    //           asegurar una precisión máxima.
    //         </li>
    //       </ul>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Rehabilitación</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Inmediatamente después de la cirugía:</strong>{' '}
    //           Movilización temprana y ejercicios de estimulación sensorial para
    //           promover la recuperación nerviosa. Se pueden utilizar técnicas de
    //           terapia ocupacional para mejorar la funcionalidad.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Progresión gradual:</strong> Terapia física y ocupacional
    //           para mejorar la fuerza y la coordinación. Ejercicios de
    //           reeducación sensorial y técnicas de terapia manual para mejorar la
    //           función nerviosa y muscular. La rehabilitación puede incluir el
    //           uso de dispositivos de estimulación eléctrica para promover la
    //           regeneración nerviosa.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Lesiones Vasculares
    //       </h2>
    //       <p className='mb-4 '>
    //         Las lesiones que afectan los vasos sanguíneos de la mano pueden
    //         resultar en hemorragias significativas y comprometer el suministro
    //         de sangre a los tejidos, lo que puede llevar a necrosis si no se
    //         trata rápidamente. Estas lesiones suelen ser el resultado de heridas
    //         penetrantes o aplastamientos severos.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Emergente:</strong> Control del sangrado mediante presión
    //           directa y elevación de la mano. En casos severos, puede ser
    //           necesario el uso de torniquetes para controlar la hemorragia hasta
    //           que se pueda realizar una intervención quirúrgica.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Quirúrgico:</strong> Reparación de los vasos sanguíneos
    //           mediante técnicas de microcirugía. Esto puede incluir la sutura
    //           directa de los vasos o el uso de injertos vasculares para
    //           restaurar el flujo sanguíneo.
    //         </li>
    //       </ul>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Rehabilitación</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Inmediatamente después de la cirugía:</strong> Monitoreo
    //           del flujo sanguíneo y la viabilidad de los tejidos. Terapia física
    //           para prevenir la rigidez y mejorar la movilidad. Es fundamental
    //           asegurar que los tejidos reciban un suministro adecuado de sangre
    //           para promover la cicatrización.
    //         </li>
    //         <li className='mb-4 ml-6'>
    //           <strong>Progresión gradual:</strong> Ejercicios de fortalecimiento
    //           y técnicas de terapia manual para mejorar la función y prevenir
    //           complicaciones a largo plazo. La rehabilitación puede incluir el
    //           uso de dispositivos de terapia manual y técnicas específicas para
    //           mejorar la circulación y la salud de los tejidos.
    //         </li>
    //       </ul>
    //     </section>

    //     <section className='mb-8'>
    //       <h2 className='mb-2 text-center text-2xl font-bold text-black'>
    //         Aplastamientos
    //       </h2>
    //       <p className='mb-4'>
    //         Los aplastamientos de la mano pueden causar daños extensos a huesos,
    //         tejidos blandos, vasos sanguíneos y nervios. Estas lesiones son
    //         graves y pueden requerir múltiples intervenciones quirúrgicas y un
    //         manejo multidisciplinario.
    //       </p>
    //       <h3 className='mb-2 text-xl font-bold text-black'>Tratamiento</h3>
    //       <ul className='list-disc'>
    //         <li className='mb-2 ml-6'>
    //           <strong>Emergente:</strong> Descompresión rápida y estabilización
    //           de la mano. Control del sangrado y manejo del dolor. En casos
    //           severos, puede ser necesario realizar una fasciotomía para aliviar
    //           la presión en los compartimientos de la mano.
    //         </li>
    //       </ul>
    //     </section>
    //   </article>
    // </div>
  )
}

export default LesionesTraumaticas
