import Link from 'next/link'

export function ContactForm() {
  return (
    <div className='relative w-full rounded-lg p-6 sm:p-8 md:p-10'>
      <div className='relative z-10 mx-auto w-full max-w-screen-md'>
        <div className='mb-6 flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-center text-3xl font-bold tracking-tighter md:text-4xl/tight'>
            Programe su consulta
          </h2>

          <p className='max-w-xl text-center'>
            Valoramos tu tiempo. Programa tu cita médica de manera rápida y
            sencilla completando este formulario. Nuestro equipo se pondrá en
            contacto contigo a la brevedad para confirmar tu cita y responder a
            cualquier pregunta.
          </p>
        </div>
        <form className='gap-6'>
          <div className='space-y-4'>
            <div className='grid gap-2'>
              <label
                htmlFor='name'
                className='font-semibold text-custom-green-light'
              >
                Nombre completo
              </label>

              <input
                id='name'
                placeholder='Introduce tu nombre completo'
                className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                autoComplete='name'
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='email'
                className='font-semibold text-custom-green-light'
              >
                Dirección de correo electrónico
              </label>

              <input
                id='email'
                type='email'
                placeholder='Introduce tu correo electrónico'
                className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                autoComplete='email'
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='phone'
                className='font-semibold text-custom-green-light'
              >
                Número de teléfono
              </label>

              <input
                id='phone'
                type='tel'
                placeholder='Número de teléfono'
                className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
              />
            </div>
            <div className='space-y-4'>
              <div className='grid gap-2'>
                <label
                  htmlFor='procedure'
                  className='font-semibold text-custom-green-light'
                >
                  Trámite o Consulta
                </label>

                <textarea
                  id='procedure'
                  rows={4}
                  placeholder='Describe brevemente el trámite o consulta que estás solicitando'
                  className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                />
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <input type='checkbox' name='consent' id='consent' required />
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

          <div className='mt-4 flex justify-center'>
            <button
              type='submit'
              className='mb-8 hidden w-[180px] rounded-3xl border-2 border-custom-green-light bg-transparent p-3 px-4 text-center font-semibold text-custom-green-light transition-colors duration-200 ease-in-out hover:bg-custom-green-light hover:text-white md:block'
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
