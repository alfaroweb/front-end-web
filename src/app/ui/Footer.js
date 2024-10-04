import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-mico.png'

function Footer() {
  return (
    <footer className='relative bg-gradient-to-r from-custom-green-light to-custom-green-dark py-8 text-center text-neutral-400'>
      <div className='mb-4 flex justify-center'>
        {' '}
        <Link href='/' className='flex flex-col items-center justify-center'>
          <Image
            src={Logo}
            alt='Logo del Dr. Joaquín Alfaro Micó, Cirujano de la mano'
            className='h-[60px] w-auto object-fill'
          />
        </Link>
      </div>

      <div className='mx-auto grid grid-cols-1 md:grid-cols-3'>
        <div className='mb-6'>
          <h5 className='mb-2.5 font-bold text-white hover:text-white'>
            Compañía
          </h5>

          <div className='mb-0 flex list-none flex-col'>
            <Link href='/sobre-mi' className='text-slate-300 hover:text-white'>
              Sobre nosotros
            </Link>
            <Link href='/contacto' className='text-slate-300 hover:text-white'>
              Contacto
            </Link>
          </div>
        </div>

        <div className='mb-6'>
          <h5 className='mb-2.5 font-bold text-white'>Redes sociales</h5>
          <ul className='mb-0 list-none'>
            <li className=''>
              <a
                href='#'
                className='text-slate-300 hover:text-white'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className='mb-6'>
          <h5 className='mb-2.5 font-bold text-white'>Legal</h5>
          <ul className='mb-0 list-none'>
            <li>
              <a href='#!' className='text-slate-300 hover:text-white'>
                Política de privacidad
              </a>
            </li>
            <li>
              <a href='#!' className='text-slate-300 hover:text-white'>
                Términos y condiciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='mx-auto flex w-[90%] flex-col items-center justify-center border-t-[1px] border-slate-300 p-6 text-center'>
        <span className='text-slate-300'>
          © 2024 Cirugía de la mano. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}

export default Footer
