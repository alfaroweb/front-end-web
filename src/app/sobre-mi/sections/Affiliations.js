import Image from 'next/image'
import Scmcot from '/public/affiliations/scmcot.png'
import Secma from '/public/affiliations/secma.png'
import Secot from '/public/affiliations/secot.png'

function Affiliations() {
  return (
    <section className='bg-white pb-[50px]'>
      <div className='mx-auto w-[90%] max-w-screen-lg'>
        <h2 className='text-center text-3xl font-bold tracking-tighter md:text-4xl/tight'>
          Afiliaciones profesionales
        </h2>
        <p className='mt-2'>
          El Dr. Alfaro es un destacado miembro afiliado de diversas
          asociaciones médicas de prestigio, lo que refleja su dedicación y
          compromiso con la excelencia en el campo de la cirugía ortopédica y
          traumatología. Entre las asociaciones a las que pertenece, se destacan
          las siguientes:
        </p>

        <div className='flex w-full flex-wrap'>
          <div className='mx-auto mt-8 grid gap-8 rounded-lg border border-custom-green-light border-opacity-25 p-6 md:grid-cols-[150px,1fr]'>
            <div className='mx-auto w-[150px] place-content-center'>
              <Image
                src={Scmcot}
                className='w-[150px] object-cover grayscale filter hover:filter-none'
                alt='Logo de la Sociedad Castellano-Manchega de Cirugía Ortopédica y
                  Traumatología (SCMCOT)'
              />
            </div>
            <div className='place-content-center'>
              <p>
                <strong>
                  Sociedad Castellano-Manchega de Cirugía Ortopédica y
                  Traumatología (SCMCOT):
                </strong>{' '}
                Esta sociedad tiene como misión fomentar el desarrollo
                científico y la actualización continua de los profesionales en
                el ámbito de la cirugía ortopédica y traumatología en
                Castilla-La Mancha. El Dr. Alfaro, como miembro activo,
                participa en el intercambio de conocimientos y avances técnicos
                para mejorar el tratamiento de lesiones y enfermedades
                musculoesqueléticas.
              </p>
            </div>
          </div>

          <div className='mx-auto mt-16 grid gap-8 rounded-lg border border-custom-green-light border-opacity-25 p-6 md:grid-cols-[150px,1fr]'>
            <div className='mx-auto w-[150px] place-content-center'>
              <Image
                src={Secma}
                className='w-full object-cover grayscale filter hover:filter-none'
                alt='Logo de la Sociedad Española de Cirugía de Mano (SECMA)'
              />
            </div>
            <div className='place-content-center'>
              <p>
                <strong>Sociedad Española de Cirugía de Mano (SECMA):</strong>{' '}
                La SECMA es una de las principales organizaciones a nivel
                nacional dedicadas exclusivamente a la cirugía de mano. Esta
                sociedad promueve la formación y especialización en el
                diagnóstico y tratamiento de las patologías relacionadas con la
                mano y la extremidad superior. La afiliación del Dr. Alfaro a
                esta sociedad demuestra su compromiso con las técnicas avanzadas
                y tratamientos innovadores en esta área tan especializada.
              </p>
            </div>
          </div>

          <div className='mx-auto mt-16 grid gap-8 rounded-lg border border-custom-green-light border-opacity-25 p-6 md:grid-cols-[150px,1fr]'>
            <div className='mx-auto w-[200px] place-content-center md:w-auto'>
              <Image
                src={Secot}
                className='object-cover grayscale filter hover:filter-none'
                alt='Logo de la Sociedad Española de Cirugía Ortopédica y Traumatología
                  (SECOT)'
              />
            </div>
            <div className='place-content-center'>
              <p>
                <strong>
                  Sociedad Española de Cirugía Ortopédica y Traumatología
                  (SECOT):
                </strong>
                Esta es una de las organizaciones más importantes en el ámbito
                de la traumatología en España, y su objetivo es mejorar la
                calidad asistencial y el conocimiento médico en cirugía
                ortopédica y traumatología.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Affiliations
