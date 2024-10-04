import Image from 'next/image'
import ContactImage from '/public/contacto.webp'
import BenefitsImage from '/public/medic-benefits.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserDoctor,
  faMicroscope,
  faHandHoldingHand,
  faHospital,
  faNotesMedical
} from '@fortawesome/free-solid-svg-icons'
import { ContactForm } from '@/app/components/ContactForm'
import DotsBg from '@/app/components/DotsBg'

function page() {
  return (
    <main className='w-full'>
      <div className='w-full bg-white'>
        <div className='mx-auto flex w-[90%] max-w-screen-xl flex-col gap-16 py-[100px] lg:flex-row lg:gap-8'>
          <div className='grid w-full place-content-evenly lg:w-2/3'>
            <h1 className='text-4xl font-bold'>
              ¡Agenda{' '}
              <strong className='text-custom-green-light'>
                tu Cita en Albacete!
              </strong>{' '}
              <br />{' '}
              <strong className='text-custom-green-light'>
                Atención Médica Personalizada
              </strong>{' '}
              para Ti
            </h1>

            <p className='mx-auto mt-2 text-base/relaxed text-gray-600'>
              ¿Buscas un servicio médico de confianza en Albacete? Estamos aquí
              para ayudarte. Nuestro equipo de profesionales altamente
              calificados se dedica a brindar atención médica de calidad,
              adaptada a tus necesidades. No esperes más para cuidar de tu
              salud.
            </p>

            <p className='mx-auto mt-2 text-center text-lg/relaxed text-gray-600'>
              <strong className='text-custom-green-light'>
                Solicita tu cita hoy mismo
              </strong>{' '}
              y disfruta de una atención rápida y eficiente. <br />
              <strong className='text-custom-green-light'>
                Nuestro consultorio en Albacete
              </strong>{' '}
              está listo para recibirte con un trato cercano y profesional.
            </p>
          </div>
          <div className='flex w-full justify-center lg:w-1/3 lg:justify-end'>
            <div className='relative h-[350px] w-[350px] overflow-hidden'>
              <div className='absolute left-1 top-1 z-0 h-28 w-28 text-[rgba(53,159,211,0.3)]'>
                <svg
                  id='patternId'
                  width='100%'
                  height='100%'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <pattern
                      id='b'
                      patternUnits='userSpaceOnUse'
                      width='40'
                      height='40'
                      patternTransform='scale(0.5) rotate(0)'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='100%'
                        height='100%'
                        fill='none'
                      />
                      <path
                        d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'
                        strokeWidth='1'
                        stroke='none'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='800%'
                    height='800%'
                    transform='translate(0,0)'
                    fill='url(#b)'
                  />
                </svg>
              </div>

              <Image
                src={ContactImage}
                className='relative h-full w-full rounded-bl-[40%] rounded-br-[40%] rounded-tl-[40%] object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto flex w-[90%] max-w-screen-xl flex-col-reverse gap-16 py-[100px] lg:flex-row lg:gap-8'>
        <div className='flex justify-center lg:w-1/3 lg:justify-start'>
          <div className='relative h-[350px] w-[350px] overflow-hidden'>
            <div className='absolute left-1 top-1 z-0 h-28 w-28 text-[rgba(53,159,211,0.3)]'>
              <svg
                id='patternId'
                width='100%'
                height='100%'
                xmlns='http://www.w3.org/2000/svg'
              >
                <defs>
                  <pattern
                    id='b'
                    patternUnits='userSpaceOnUse'
                    width='40'
                    height='40'
                    patternTransform='scale(0.5) rotate(0)'
                  >
                    <rect x='0' y='0' width='100%' height='100%' fill='none' />
                    <path
                      d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'
                      strokeWidth='1'
                      stroke='none'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width='800%'
                  height='800%'
                  transform='translate(0,0)'
                  fill='url(#b)'
                />
              </svg>
            </div>

            <Image
              src={BenefitsImage}
              className='relative h-full w-full rounded-bl-[40%] rounded-br-[40%] rounded-tl-[40%] object-cover'
            />
          </div>
        </div>
        <div className='space-y-8 lg:w-2/3'>
          <h2 className='text-3xl font-bold'>
            Descubre los beneficios de elegir a los{' '}
            <strong className='text-custom-green-light'>
              Cirujanos de la Mano Más Experimentados en Albacete
            </strong>
            : <br /> ¡Tus Manos en las Mejores Manos!
          </h2>

          <ul className='list-inside list-disc space-y-4 text-gray-800'>
            <li className='flex items-baseline gap-4 font-semibold'>
              {' '}
              <FontAwesomeIcon
                icon={faUserDoctor}
                width={20}
                height={20}
                color='#3B8590'
              />
              Cirujanos Expertos y Confiables
            </li>
            <li className='flex items-baseline gap-4 font-semibold'>
              <FontAwesomeIcon
                icon={faMicroscope}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Tecnología Avanzada para Mayor Seguridad
            </li>
            <li className='flex items-baseline gap-4 font-semibold'>
              <FontAwesomeIcon
                icon={faHandHoldingHand}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Atención Personalizada y Cercana
            </li>
            {/* <li className='font-semibold'>Recuperación Rápida y Cómoda</li> */}
            <li className='flex items-baseline gap-4 font-semibold'>
              <FontAwesomeIcon
                icon={faHospital}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Instalaciones Modernas y Accesibles
            </li>
            <li className='flex items-baseline gap-4 font-semibold'>
              <FontAwesomeIcon
                icon={faNotesMedical}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Seguimiento Completo del Paciente
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full bg-white py-[50px]'>
        <div className='mx-auto flex w-[90%] flex-col lg:flex-row'>
          <div className='flex flex-col items-center justify-center lg:w-1/2'>
            <ContactForm />
          </div>
          <div className='overflow-hidden lg:w-1/2'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.313895971811!2d-1.8467027234232294!3d38.985331841509904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418887d157e51d%3A0x273c92fc1723327c!2sHospital%20Quir%C3%B3nsalud%20Albacete!5e0!3m2!1ses!2ses!4v1725537167056!5m2!1ses!2ses'
              width='100%'
              height='100%'
              style={{ border: 0, minHeight: '600px' }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
