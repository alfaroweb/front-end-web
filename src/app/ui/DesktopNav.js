import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-mico.png'
import MedicineFile from '/public/icons/medicine-file.svg'
import { specialities } from '../home/data/data'

function DesktopNav({ showMovilMenu, setShowMovilMenu, handleShowMenu }) {
  return (
    <nav className='mx-auto flex h-[80px] w-[90%] items-center justify-between'>
      <Link href='/' className='flex items-center justify-center'>
        <Image
          src={Logo}
          alt='Logo del Dr. Joaquín Alfaro Micó, Cirujano de la mano'
          className='h-[60px] w-auto object-fill'
        />
        <p className='font-black text-white'>Cirugía de la mano</p>
      </Link>

      <div className='hidden h-full gap-8 font-bold text-white lg:flex lg:items-center'>
        <Link
          href='/'
          className='link-desktopNav-borders custom-text-shadow flex h-full items-center rounded-lg'
        >
          Inicio
        </Link>
        <Link
          href='/sobre-mi'
          className='link-desktopNav-borders custom-text-shadow flex h-full items-center rounded-lg'
        >
          Sobre mí
        </Link>
        <div className='link-desktopNav-borders group relative flex h-full items-center rounded-lg'>
          <span className='custom-text-shadow cursor-pointer'>
            Especialidades
          </span>
          <div className='pointer-events-none invisible absolute left-1/2 top-full z-10 w-max -translate-x-1/2 rounded-b-lg bg-custom-green-dark opacity-0 transition-opacity duration-200 ease-in-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100'>
            <ul className='space-y-4 p-4'>
              {specialities.map((specialitie, index) => (
                <li
                  className='custom-text-shadow text-slate-200 transition-colors duration-75 ease-in-out hover:text-white'
                  key={index}
                >
                  <Link
                    href={specialitie.url}
                    onClick={() => setShowMovilMenu(false)}
                  >
                    {specialitie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href='/blog'
          className='link-desktopNav-borders custom-text-shadow flex h-full items-center rounded-lg'
        >
          Blog
        </Link>
        <Link
          href='/contacto'
          className='link-desktopNav-borders custom-text-shadow flex h-full items-center rounded-lg'
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
        alt=''
      />
    </nav>
  )
}

export default DesktopNav
