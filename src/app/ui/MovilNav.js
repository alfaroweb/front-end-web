import { useState, useEffect } from 'react'
import { specialities } from '../home/data/data'
import Image from 'next/image'
import Link from 'next/link'
import Bandage from '/public/icons/bandage.svg'

function MovilNav({ showMovilMenu, setShowMovilMenu, handleShowMenu }) {
  useEffect(() => {
    const body = document.querySelector('body')

    const handleMenu = () => {
      if (window.innerWidth > 768) {
        setShowMovilMenu(false)
        body.classList.remove('overflow-hidden')
      }
    }

    if (showMovilMenu) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }

    window.addEventListener('resize', handleMenu)

    return () => {
      window.removeEventListener('resize', handleMenu)
    }
  }, [showMovilMenu])

  return (
    <div
      className={`${
        showMovilMenu ? 'translate-x-0' : '-translate-x-[100%]'
      } fixed left-0 top-0 h-screen w-full overflow-y-auto bg-gradient-to-b from-custom-green-light to-custom-green-dark transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <nav className='relative mx-auto grid min-h-screen w-full grid-rows-[80px,1fr]'>
        <div className='mx-auto flex w-[90%] items-center justify-between'>
          <Link href='/'>
            {/* <Image
              src='/InnoCleanSolar.png'
              alt='Logo de InnoCleanSolar'
              width={186}
              height={37}
              className='w-auto'
            /> */}
            ICONO
          </Link>
          <Image
            src={Bandage}
            width={50}
            height={50}
            className='icon line-color cursor-pointer'
            onClick={handleShowMenu}
          />
        </div>

        <ul className='mx-auto ml-[15%] flex h-full w-[80%] flex-col items-start justify-center gap-20 py-16 text-xl font-bold text-white'>
          <Link href='/' className='' onClick={() => setShowMovilMenu(false)}>
            Inicio
          </Link>
          <Link
            href='/sobre-mi'
            className=''
            onClick={() => setShowMovilMenu(false)}
          >
            Sobre mí
          </Link>
          <div className='h-[28px] overflow-hidden transition-[height] duration-300 ease-in hover:h-[284px]'>
            Especialidades
            <ul className='ml-2 mt-2 space-y-2'>
              {specialities.map((specialitie, index) => (
                <li className='text-base' key={index}>
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
          <Link
            href='/galeria'
            className=''
            onClick={() => setShowMovilMenu(false)}
          >
            Galeria
          </Link>
          <Link
            href='/contacto'
            className=''
            onClick={() => setShowMovilMenu(false)}
          >
            Contacto
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default MovilNav
