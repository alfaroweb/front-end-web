import Image from 'next/image'
import ContactImage from '/public/contacto.avif'
import BenefitsImage from '/public/medic-benefits.avif'
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
        <div className='w-[90%] mx-auto max-w-screen-xl flex py-[100px] flex-col gap-16 lg:gap-8 lg:flex-row'>
          <div className='lg:w-2/3 w-full grid place-content-evenly'>
            <h1 className='text-3xl font-bold text-gray-700'>
              ¡Agenda tu Cita en Albacete! <br /> Atención Médica Personalizada
              para Ti
            </h1>
            <p className='text-base/relaxed mx-auto text-gray-600 mt-2'>
              ¿Buscas un servicio médico de confianza en Albacete? Estamos aquí
              para ayudarte. Nuestro equipo de profesionales altamente
              calificados se dedica a brindar atención médica de calidad,
              adaptada a tus necesidades. No esperes más para cuidar de tu
              salud.
            </p>
            <p className='text-base/relaxed mx-auto text-gray-600 mt-2'>
              <strong>Solicita tu cita hoy mismo</strong> y disfruta de una
              atención rápida y eficiente. Nuestro consultorio en Albacete está
              listo para recibirte con un trato cercano y profesional.
            </p>
          </div>
          <div className='lg:w-1/3 flex lg:justify-end w-full justify-center'>
            <div className='w-[350px] h-[350px]  overflow-hidden relative'>
              <div className='h-28 w-28 text-[rgba(53,159,211,0.3)] absolute z-0 left-1 top-1'>
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
                className='w-full h-full object-cover rounded-tl-[40%] rounded-bl-[40%] rounded-br-[40%] relative'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto max-w-screen-xl flex py-[100px] flex-col-reverse  gap-16 lg:gap-8 lg:flex-row'>
        <div className='lg:w-1/3 flex lg:justify-start justify-center'>
          <div className='w-[350px] h-[350px] overflow-hidden relative'>
            <div className='h-28 w-28 text-[rgba(53,159,211,0.3)] absolute z-0 left-1 top-1'>
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
              src={BenefitsImage}
              className='w-full h-full object-cover rounded-tl-[40%] rounded-bl-[40%] rounded-br-[40%] relative'
            />
          </div>
        </div>
        <div className='lg:w-2/3 space-y-8'>
          <h2 className='text-3xl font-bold  text-gray-700'>
            Descubre los Beneficios de Elegir a los Cirujanos Más Expertos en
            Albacete: <br />
            ¡Tu Salud en las Mejores Manos!
          </h2>

          <ul className='list-disc list-inside space-y-4 text-gray-800'>
            <li className='font-semibold flex items-baseline gap-4'>
              {' '}
              <FontAwesomeIcon
                icon={faUserDoctor}
                width={20}
                height={20}
                color='#3B8590'
              />
              Cirujanos Expertos y Confiables
            </li>
            <li className='font-semibold flex items-baseline gap-4'>
              <FontAwesomeIcon
                icon={faMicroscope}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Tecnología Avanzada para Mayor Seguridad
            </li>
            <li className='font-semibold flex items-baseline gap-4'>
              <FontAwesomeIcon
                icon={faHandHoldingHand}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Atención Personalizada y Cercana
            </li>
            {/* <li className='font-semibold'>Recuperación Rápida y Cómoda</li> */}
            <li className='font-semibold flex items-baseline gap-4'>
              <FontAwesomeIcon
                icon={faHospital}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              Instalaciones Modernas y Accesibles
            </li>
            <li className='font-semibold flex items-baseline gap-4'>
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
      <div className='w-full py-[50px] bg-white'>
        <div className='flex w-[90%] mx-auto flex-col lg:flex-row'>
          <div className='lg:w-1/2 flex items-center flex-col justify-center'>
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
