import Link from 'next/link'

export function ContactForm() {
  return (
    <div className='w-full p-6 sm:p-8 md:p-10 rounded-lg relative'>
      <div className='w-[90%] max-w-screen-md mx-auto z-10 relative'>
        <div className='flex flex-col items-center justify-center space-y-4 mb-6 '>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight text-center '>
            Programe su consulta
          </h2>
          <p className='max-w-md text-center'>
            Complete el siguiente formulario para solicitar una cita con nuestro
            experimentado equipo médico.
          </p>
        </div>
        <form className='gap-6'>
          <div className='space-y-4'>
            <div className='grid gap-2'>
              <label
                htmlFor='name'
                className='text-custom-green-light font-semibold'
              >
                Nombre completo
              </label>
              <input
                id='name'
                placeholder='Introduce tu nombre completo'
                className='p-2 rounded-lg focus:outline-custom-green-light focus:ring-0 border-custom-green-light border-opacity-20 border-2'
                autoComplete='name'
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='email'
                className='text-custom-green-light font-semibold'
              >
                Dirección de correo electrónico
              </label>
              <input
                id='email'
                type='email'
                placeholder='Introduce tu correo electrónico'
                className='p-2 rounded-lg focus:outline-custom-green-light focus:ring-0 border-custom-green-light border-opacity-20 border-2'
                autoComplete='email'
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='phone'
                className='text-custom-green-light font-semibold'
              >
                Número de teléfono
              </label>
              <input
                id='phone'
                type='tel'
                placeholder='Número de teléfono'
                className='p-2 rounded-lg focus:outline-custom-green-light focus:ring-0 border-custom-green-light border-opacity-20 border-2'
              />
            </div>
            <div className='space-y-4 '>
              <div className='grid gap-2'>
                <label
                  htmlFor='procedure'
                  className='text-custom-green-light font-semibold'
                >
                  Trámite o Consulta
                </label>
                <textarea
                  id='procedure'
                  rows={4}
                  placeholder='Describe brevemente el trámite o consulta que estás solicitando'
                  className='p-2 rounded-lg focus:outline-custom-green-light focus:ring-0 border-custom-green-light border-opacity-20 border-2'
                />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <input
              type='checkbox'
              name='consent'
              id='consent'
              required
            />
            <label htmlFor='consent'>
              {' '}
              Consiento el tratamiento de mis datos por Dr. Marco Sales con la
              finalidad de gestionar la solicitud de cita previa. Más
              información en nuestra{' '}
              <Link
                href='/politica-de-privacidad'
                className='text-custom-green-light underline'
              >
                Política de privacidad
              </Link>
            </label>
          </div>

          <div className='flex justify-center mt-4'>
            <button
              type='submit'
              className='p-3 px-4 bg-transparent text-custom-green-light border-2 border-custom-green-light hover:bg-custom-green-light hover:text-white transition-colors duration-200 ease-in-out font-semibold rounded-3xl mb-8 hidden md:block w-[180px] text-center'
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
