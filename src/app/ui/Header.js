'use client'
import { useState } from 'react'
import DesktopNav from './DesktopNav.js'
import MovilNav from './MovilNav.js'

export default function Header() {
  const [showMovilMenu, setShowMovilMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMovilMenu(!showMovilMenu)
  }

  return (
    <header className='header sticky top-0 z-[9998] flex h-[100px] items-center bg-custom-green-dark py-8'>
      <DesktopNav
        showMovilMenu={showMovilMenu}
        setShowMovilMenu={setShowMovilMenu}
        handleShowMenu={handleShowMenu}
      />
      <MovilNav
        showMovilMenu={showMovilMenu}
        setShowMovilMenu={setShowMovilMenu}
        handleShowMenu={handleShowMenu}
      />
    </header>
  )
}
