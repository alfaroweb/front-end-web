import { useState, useEffect } from 'react'
import { specialities } from '../home/data/data'
import Image from 'next/image'
import Link from 'next/link'

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
      }  fixed left-0 top-0 h-screen w-full overflow-y-auto  bg-gradient-to-b from-custom-green-light to-custom-green-dark transition-transform duration-300 ease-in-out md:hidden`}
    >
      <nav className='relative mx-auto grid min-h-screen w-full grid-rows-[70px,1fr] '>
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

          <svg
            fill='#000000'
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            id='xrp'
            dataname='Line Color'
            xmlns='http://www.w3.org/2000/svg'
            className='icon line-color cursor-pointer'
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
                d='M19,3,12.74,9.68a1,1,0,0,1-1.48,0L5,3'
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
                d='M19,21l-6.26-6.68a1,1,0,0,0-1.48,0L5,21'
                style={{
                  fill: 'none',
                  stroke: '#2AA760',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2
                }}
              />
            </g>
          </svg>
        </div>

        <ul className='mx-auto flex h-full w-[80%] flex-col items-start ml-[15%] justify-center gap-20 py-16 text-xl font-bold text-white'>
          <Link
            href='/'
            className=''
            onClick={() => setShowMovilMenu(false)}
          >
            Inicio
          </Link>
          <Link
            href='/sobre-mi'
            className=''
            onClick={() => setShowMovilMenu(false)}
          >
            Sobre mí
          </Link>
          <div className='h-[28px] overflow-hidden hover:h-[284px] transition-[height] duration-300 ease-in'>
            Especialidades
            <ul className='mt-2 space-y-2 ml-2'>
              {specialities.map((specialitie) => (
                <li className='text-base'>
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
