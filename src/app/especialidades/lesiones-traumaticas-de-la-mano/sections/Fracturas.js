import Image from 'next/image'

function Fracturas({ Book }) {
  return (
    <section
      className='mx-auto mb-16 w-[90%] max-w-screen-lg'
      aria-labelledby='fracturas'
    >
      <div className='mb-4 flex items-center gap-2'>
        {' '}
        <Image src={Book} height={24} alt='' />
        <h2
          className='scroll-mt-[85px] text-2xl font-bold uppercase tracking-wide'
          id='fracturas'
        >
          Fracturas
        </h2>
      </div>

      <p className='mb-8'>
        Las fracturas en la mano son comunes y pueden ocurrir debido a impactos
        directos, caídas o accidentes. En Albacete, ofrecemos atención
        especializada para tratar fracturas en los huesos de la muñeca
        (carpianos), la palma (metacarpos) y los dedos (falanges). Las fracturas
        pueden ser simples o complejas, y es importante tratarlas adecuadamente
        para evitar complicaciones.
      </p>

      <section className='mb-8' aria-labelledby='fracturas-metacarpianos'>
        <h3
          id='fracturas-metacarpianos'
          className='mb-2 scroll-mt-[85px] text-xl font-semibold text-custom-green-light'
        >
          Fracturas metacarpianos
        </h3>
        <p className='mb-4'>
          Las fracturas de los metacarpianos son las más comunes de la mano.
          Afectan los huesos largos que conectan las muñecas con los dedos.
          Debido a su ubicación, están expuestos a traumatismos, especialmente
          en actividades deportivas o laborales. Estas fracturas pueden causar
          deformidades que afectan la función de la mano si no se tratan
          correctamente.
        </p>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo saber si me he roto un metacarpiano?
          </summary>
          <p className=''>
            El diagnóstico comienza con una evaluación clínica y un examen
            físico detallados. Posteriormente, se utilizan radiografías en
            diversas proyecciones para confirmar el tipo de fractura, evaluar su
            gravedad y descartar lesiones articulares asociadas, garantizando un
            tratamiento adecuado.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Tengo que operarme de una fractura de metacarpiano?
          </summary>
          <p className=''>
            La cirugía es necesaria cuando las fracturas son inestables,
            irreductibles, o presentan desplazamientos significativos que no
            permiten un tratamiento conservador. Es intolerable si el dedo queda
            malrotado respecto a los demás, impidiendo el cierre correcto de la
            mano, por lo que sería indicación absoluta de intervención
            quirúrgica para restaurar la funcionalidad.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué cirugía es la adecuada para una fractura de metacarpiano?
          </summary>
          <p className=''>
            El tratamiento varía según la fractura, priorizando la movilidad
            temprana para prevenir rigidez y mejorar la recuperación funcional.
            La osteosíntesis con tornillos intramedulares es la cirugía de
            elección hoy en día, aunque el uso de placas puede estar indicado en
            casos más complejos.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué pronóstico y resultados esperamos en una fractura de
            metacarpiano?
          </summary>
          <p className=''>
            La cirugía logra restaurar la anatomía de la mano, permitiendo una
            recuperación funcional temprana. Consiguiendo una estabilización de
            la fractura, el paciente podrá recuperar movilidad y fuerza de forma
            precoz, evitando así complicaciones como la rigidez de los dedos
            derivada de una inmovilización prolongada.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo es la recuperación tras una fractura de metacarpiano?
          </summary>
          <p className=''>
            En caso de tratamiento conservador, la recuperación comienza con
            inmovilización temporal, seguida de una rehabilitación activa precoz
            para prevenir rigideces. La fisioterapia ayuda a mejorar el rango de
            movimiento y a recuperar fuerza. Normalmente el paciente podrá
            comenzar con una movilización inmediata, evitando así las
            complicaciones derivadas de la inmovilización e incorporándose de
            manera temprana a su actividad habitual.
          </p>
        </details>
      </section>

      <section className='mb-8' aria-labelledby='fracturas-falanges'>
        <h3
          id='fracturas-falanges'
          className='mb-2 scroll-mt-[85px] text-xl font-semibold text-custom-green-light'
        >
          Fracturas de falanges (Dedos de la mano)
        </h3>
        <p className='mb-4'>
          Las fracturas de falanges, aunque comunes, requieren atención
          cuidadosa para evitar complicaciones a largo plazo. Si no se tratan
          adecuadamente, estas fracturas pueden causar rigideces y limitar el
          movimiento de los dedos.
        </p>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo saber si me he roto una falange?
          </summary>
          <p className=''>
            El diagnóstico se realiza mediante examen físico y radiografías, que
            permiten identificar el tipo y la ubicación de la fractura,
            mostrando especial interés si afecta a la articulación. Es
            importante determinar la estabilidad de la fractura para decidir el
            tratamiento adecuado, sea ortopédico o quirúrgico.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Tengo que operarme de una fractura de falange?
          </summary>
          <p className=''>
            Se recomienda cirugía cuando la fractura es inestable, irreductible
            o articular, y cuando no se puede lograr una reducción anatómica
            adecuada con tratamiento conservador. Las fracturas desplazadas o
            con alto riesgo de rigidez también suelen necesitar intervención
            quirúrgica.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué cirugía es la adecuada para una fractura de falange?
          </summary>
          <p className=''>
            Es esencial abordar cada fractura con precisión para asegurar una
            recuperación óptima. En general, las fracturas menos graves se
            tratan con inmovilización, a menudo utilizando una férula o
            sindactilia, mientras que las más complejas pueden necesitar cirugía
            para alinear correctamente los fragmentos óseos. Utilizamos diversas
            técnicas como osteosíntesis con tornillos intramedulares, tornillos
            interfragmentarios o placas, dependiendo de la fractura.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué pronóstico y resultados esperamos en una fractura de falange?
          </summary>
          <p className=''>
            Con una intervención adecuada, logramos restaurar la anatomía del
            dedo, asegurar la estabilidad de la fractura y permitir una
            movilización precoz. Esto ayuda a minimizar la rigidez y a mejorar
            la función de la mano en el menor tiempo posible. Es crucial
            considerar que las articulaciones de los dedos tienden a crear
            rigideces, por lo que tanto la cirugía como la rehabilitación son
            importantes. El éxito depende de una técnica adecuada, un
            tratamiento rehabilitador efectivo y la colaboración del paciente.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo es la recuperación tras una fractura de falange?
          </summary>
          <p className=''>
            Dependiendo de la técnica utilizada, la fisioterapia es clave para
            recuperar la movilidad y funcionalidad del dedo afectado. La
            recuperación variará en función del tipo de fractura, la
            rehabilitación realizada y la actitud del paciente. El miedo a
            movilizar la mano y participar en la rehabilitación puede afectar
            negativamente el pronóstico.
          </p>
        </details>
      </section>

      <section className='mb-8' aria-labelledby='fracturas-radio-distal'>
        <h3
          id='fracturas-radio-distal'
          className='mb-2 scroll-mt-[85px] text-xl font-semibold text-custom-green-light'
        >
          Fracturas de Radio Distal (Muñeca)
        </h3>
        <p className='mb-4'>
          Las fracturas de radio distal son las más frecuentes en el miembro
          superior. Pueden ser muy incapacitantes, especialmente si no se tratan
          correctamente, ya que pueden limitar el movimiento y causar dolor a
          largo plazo debido a consolidaciones en mala posición.
        </p>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo saber si me he roto la muñeca?
          </summary>
          <p className=''>
            Tras una caída apoyando la mano, el paciente puede sentir dolor
            intenso, hinchazón y deformidad en la muñeca. El diagnóstico debe
            hacerse mediante una radiografía, que confirme el tipo de fractura y
            su desplazamiento. Un diagnóstico temprano permite iniciar un
            tratamiento efectivo y mejorar el pronóstico.
          </p>
        </details>
        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Tengo que operarme de una fractura de muñeca (radio distal)?
          </summary>
          <p className=''>
            Las fracturas estables y con un mínimo desplazamiento pueden
            tratarse de forma conservadora con inmovilización mediante una
            férula o yeso. Sin embargo, las fracturas desplazadas o inestables
            requerirán una intervención quirúrgica para garantizar una adecuada
            reducción y estabilidad, permitiendo la pronta recuperación de la
            función de la muñeca.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué cirugía es la adecuada para una fractura de muñeca?
          </summary>
          <p className=''>
            Para las fracturas desplazadas e inestables, la opción quirúrgica
            más frecuente es la fijación con una placa volar bloqueada, la cual
            permite estabilizar la fractura y facilita la recuperación de la
            movilidad en la muñeca. En casos más severos, pueden usarse otras
            técnicas quirúrgicas como fijadores externos o clavos
            intramedulares.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué pronóstico y resultados podemos esperar en una fractura de
            radio distal?
          </summary>
          <p className=''>
            Con un tratamiento adecuado, el pronóstico suele ser favorable,
            permitiendo una recuperación completa de la función de la muñeca. Es
            esencial comenzar la rehabilitación temprana para evitar rigidez y
            mejorar la movilidad, la fuerza y la funcionalidad. El éxito de la
            recuperación también depende de la gravedad de la fractura, el
            tratamiento aplicado y la participación activa del paciente en la
            rehabilitación.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo es la recuperación tras una fractura de radio distal?
          </summary>
          <p className=''>
            Tras una fractura de radio distal, el proceso de recuperación puede
            durar varias semanas o meses, dependiendo de la gravedad de la
            lesión y del tipo de tratamiento aplicado. La fisioterapia es clave
            para recuperar el rango de movimiento y la fuerza en la muñeca. En
            tratamientos conservadores, es fundamental evitar una inmovilización
            prolongada, ya que puede llevar a rigidez y pérdida de función.
          </p>
        </details>
      </section>

      <section className='mb-8' aria-labelledby='fracturas-escafoides'>
        <h3
          id='fracturas-escafoides'
          className='mb-2 scroll-mt-[85px] text-xl font-semibold text-custom-green-light'
        >
          Fracturas de Escafoides
        </h3>
        <p className='mb-4'>
          Las fracturas del escafoides son lesiones que afectan uno de los
          huesos del carpo, situado en la muñeca. Son la segunda fractura más
          frecuente del miembro superior, causadas por traumatismos sobre la
          palma de la mano con la muñeca en posición de extensión. Si no se
          tratan adecuadamente, pueden llevar a complicaciones como
          pseudoartrosis (el hueso no consolida) y necrosis.
        </p>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo saber si me he roto el escafoides?
          </summary>
          <p className=''>
            El diagnóstico se realiza mediante la exploración física,
            especialmente con dolor en la tabaquera anatómica. Las radiografías
            en múltiples proyecciones confirman el diagnóstico. En ocasiones,
            las radiografías no son concluyentes y se pueden emplear técnicas
            como la resonancia magnética o el TAC, que tienen una alta
            sensibilidad para detectar fracturas ocultas.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Tengo que operarme de una fractura de escafoides?
          </summary>
          <p className=''>
            La cirugía está indicada cuando la fractura presenta criterios de
            inestabilidad o está desplazada. También se recomienda en fracturas
            que no consoliden adecuadamente con el tratamiento conservador. La
            estabilización quirúrgica permite una recuperación más rápida y
            previene la degeneración articular.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué cirugía es la adecuada para una fractura de escafoides?
          </summary>
          <p className=''>
            Utilizamos principalmente la fijación interna con tornillos para
            garantizar la estabilidad y facilitar la consolidación del hueso.
            Las técnicas mínimamente invasivas, como la percutánea, son las que
            más utilizamos. En fracturas desplazadas, nos ayudamos de la
            artroscopia de muñeca para asegurar la reducción y la estabilidad de
            la fractura.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Qué pronóstico y resultados esperamos en una fractura de
            escafoides?
          </summary>
          <p className=''>
            Los resultados suelen ser muy favorables, con una alta tasa de
            consolidación y una pronta recuperación funcional. Al emplear
            técnicas avanzadas, se minimizan las complicaciones a largo plazo,
            como la artrosis. La inmovilización posterior es corta, lo que
            permite al paciente volver a sus actividades en un tiempo razonable.
          </p>
        </details>

        <details className='mb-4 cursor-pointer'>
          <summary className='mb-2 text-lg font-semibold'>
            ¿Cómo es la recuperación tras una fractura de escafoides?
          </summary>
          <p className=''>
            La recuperación es casi inmediata, permitiendo la movilización desde
            el primer día y permitiendo al paciente volver a sus actividades en
            un tiempo razonable. En la mayoría de los casos, los pacientes
            pueden reanudar sus actividades cotidianas sin limitaciones.
          </p>
        </details>
      </section>
    </section>
  )
}

export default Fracturas
