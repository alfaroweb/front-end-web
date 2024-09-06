import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-mico.png'
import MedicineFile from '/public/icons/medicine-file.svg'

function DesktopNav({ showMovilMenu, setShowMovilMenu, handleShowMenu }) {
  return (
    <nav className='mx-auto flex h-[80px] w-[90%] items-center justify-between'>
      <Link
        href='/'
        className='flex items-center justify-center'
      >
        <Image
          src={Logo}
          alt='Logo de InnoCleanSolar SL, empresa dedicada a la limpieza de paneles'
          className='w-auto h-[60px] object-fill'
        />
        <p className='text-white font-black'>Cirujía de la mano</p>
      </Link>

      <div className='hidden h-full gap-8 font-bold lg:flex lg:items-center text-white'>
        <Link
          href='/'
          className='link-desktopNav-borders rounded-lg h-full flex items-center'
        >
          Inicio
        </Link>
        <Link
          href='/sobre-mi'
          className='link-desktopNav-borders rounded-lg h-full flex items-center'
        >
          Sobre mí
        </Link>
        <div className='link-desktopNav-borders rounded-lg h-full flex items-center relative group'>
          <span className=' cursor-pointer'>Especialidades</span>
          <div className='absolute w-max top-full bg-custom-green-dark left-1/2 -translate-x-1/2 z-10 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 ease-in-out'>
            <ul className='p-4 space-y-4'>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link href={'/especialidades/lesiones-traumaticas-de-la-mano'}>
                  Lesiones traumáticas
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link
                  href={'/especialidades/enfermedades-degenerativas-de-la-mano'}
                >
                  Enfermedades Degenerativas
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link
                  href={
                    '/especialidades/enfermedades-de-nervio-periferico-de-la-mano'
                  }
                >
                  Enfermedades de Nervio Periférico
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link
                  href={
                    '/especialidades/enfermedades-inflamatorias-y-dupuytren-de-la-mano'
                  }
                >
                  Enfermedades Inflamatorias y Dupuytren
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link
                  href={
                    '/especialidades/lesiones-deportivas-y-por-sobreuso-de-la-mano'
                  }
                >
                  Lesiones Deportivas y por sobreuso
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link
                  href={
                    '/especialidades/lesiones-congenitas-y-patologia-tumoral-de-la-mano'
                  }
                >
                  Lesiones Congénitas y Patología Tumoral
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white transition-colors duration-75 ease-in-out'>
                <Link href={'/especialidades/microcirugia-de-la-mano'}>
                  Microcirugía
                </Link>
              </li>
              <li className='text-slate-300 hover:text-white'>
                <Link
                  href={
                    '/especialidades/cirugias-secundarias-reconstructivas-de-la-mano'
                  }
                >
                  Cirugías Secundarias Reconstructivas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href='/galeria'
          className='link-desktopNav-borders rounded-lg h-full flex items-center'
        >
          Galeria
        </Link>
        <Link
          href='/contacto'
          className='link-desktopNav-borders rounded-lg h-full flex items-center'
        >
          Contacto
        </Link>
      </div>
      <Image
        src={MedicineFile}
        width={50}
        height={50}
        className='icon line-color cursor-pointer lg:hidden'
        onClick={handleShowMenu}
      />

      {/* <svg
        fill='#000000'
        width='40px'
        height='40px'
        viewBox='-2.4 -2.4 28.80 28.80'
        id='menu-alt-2'
        data-name='Line Color'
        xmlns='http://www.w3.org/2000/svg'
        className='icon line-color cursor-pointer transition-transform duration-0 hover:rotate-90 lg:hidden'
        onClick={handleShowMenu}
      >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
        />

        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <g id='SVGRepo_iconCarrier'>
          <path
            id='secondary'
            d='M21,3H14v7h7ZM10,14H3v7h7Z'
            style={{
              fill: 'none',
              stroke: '#2C6FBA',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2
            }}
          />

          <path
            id='primary'
            d='M10,10H3V3h7Zm11,4H14v7h7Z'
            style={{
              fill: 'none',
              stroke: '#2AA760',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2
            }}
          />
        </g>
      </svg> */}
    </nav>
  )
}

export default DesktopNav
