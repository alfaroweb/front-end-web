import Image from 'next/image'
import Scmcot from '/public/affiliations/scmcot.png'
import Secma from '/public/affiliations/secma.png'
import Secot from '/public/affiliations/secot.png'
import WhiteBottomWaves from '/public/home/waves/white-bottom-waves-2.png'

function Affiliations() {
  return (
    <section className='bg-white'>
      <div className='w-[90%] mx-auto max-w-screen-lg '>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-center text-gray-800 '>
          Afiliaciones profesionales
        </h2>
        <p className='mt-2'>
          El Dr. Alfaro es un destacado miembro afiliado de diversas
          asociaciones médicas de prestigio, lo que refleja su dedicación y
          compromiso con la excelencia en el campo de la cirugía ortopédica y
          traumatología. Entre las asociaciones a las que pertenece, se destacan
          las siguientes:
        </p>

        <div className='flex flex-wrap w-full'>
          <div className='grid md:grid-cols-[150px,1fr] mx-auto mt-8 gap-8 rounded-lg border p-6 border-custom-green-light border-opacity-25 '>
            <div className='place-content-center w-[150px] mx-auto'>
              <Image
                src={Scmcot}
                className='object-cover w-[150px] filter grayscale hover:filter-none'
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

          <div className='grid md:grid-cols-[150px,1fr] mx-auto mt-16 gap-8 rounded-lg border p-6 border-custom-green-light border-opacity-25'>
            <div className='place-content-center w-[150px] mx-auto'>
              <Image
                src={Secma}
                className='object-cover w-full filter grayscale hover:filter-none '
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

          <div className='grid md:grid-cols-[150px,1fr] mx-auto mt-16 gap-8 rounded-lg border p-6 border-custom-green-light border-opacity-25'>
            <div className='place-content-center w-[200px] md:w-auto mx-auto'>
              <Image
                src={Secot}
                className='object-cover filter grayscale hover:filter-none'
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
      <Image
        src={WhiteBottomWaves}
        className='h-[75px] w-full'
      />

      {/* <div className='flex flex-col items-center md:flex-row md:justify-between mt-16'>
          <div className='max-w-[200px] h-[400px] flex flex-col items-center bg-white p-4'>
            <div className='w-[200px] h-[200px] flex items-center justify-center'>
              <Image
                src={Scmcot}
                className='object-cover'
              />
            </div>

            <p>
              Miembro de la Sociedad Castellano-Manchega de Cirugía Ortopédica y
              Traumatología (SCMCOT)
            </p>
          </div>
          <div className='max-w-[200px] h-[400px] h-[400px]flex flex-col items-center'>
            <div className='w-[200px] h-[200px] flex items-center justify-center'>
              <Image
                src={Secma}
                className='object-cover'
              />
            </div>
            <p>Sociedad Española de Cirugía de Mano (SECMA) </p>
          </div>
          <div className='max-w-[200px] h-[400px] flex flex-col items-center'>
            <div className='w-[200px] h-[200px] flex items-center justify-center'>
              <Image
                src={Secot}
                className='object-cover'
              />
            </div>
            <p>
              Miembro de la Sociedad Castellano-Manchega de Cirugía Ortopédica y
              Traumatología (SCMCOT)
            </p>
          </div>
        </div> */}
    </section>
  )
}

export default Affiliations
