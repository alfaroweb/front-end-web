'use client'

import { useState, useEffect } from 'react'

function TablaDeContenidos({ categories }) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='sticky top-28 mx-auto mt-4 w-[90%] rounded-lg border border-custom-green-light bg-[#e7e8e9] px-2'>
      <div className='rounded-md p-4'>
        <details
          className='cursor-pointer text-custom-green-light'
          open={windowWidth >= 1024}
        >
          <summary className='font-bold text-custom-green-light hover:underline'>
            ÍNDICE DE CONTENIDOS
          </summary>
          <ul className='ml-5 list-inside list-disc space-y-1'>
            {categories.map((category) => (
              <li key={category.id}>
                <a href={category.id} className='hover:underline'>
                  {category.categoryTitle}
                </a>
                {category.subcategories != null ? (
                  <ul className='ml-5 list-inside list-disc space-y-1'>
                    {category.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <a href={sub.id} className='hover:underline'>
                          {sub.subcategorie}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  )
}

export default TablaDeContenidos
