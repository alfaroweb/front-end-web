'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SpecialitiesCard from './SpecialitiesCard'
import { specialities } from '@/app/home/data/data'
import Bg from '/public/home/bg-custom.png'

function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function SpecialtiesPagesCategories() {
  const pathname = usePathname()
  const [filteredUrl, setFilteredUrl] = useState('')

  useEffect(() => {
    // Divide la ruta por '/' y obtén la última parte de la URL
    const parts = pathname.split('/').filter(Boolean) // Elimina partes vacías del array
    const lastPart = parts[parts.length - 1] // Obtiene la última parte de la ruta

    // Verifica si la última parte contiene 'de-la-mano' y quítala
    if (lastPart) {
      const updatedPart = lastPart.replace('de-la-mano', '').replace(/-+$/, '') // Elimina 'de-la-mano' y los guiones finales
      const url = updatedPart.split('-').join(' ')
      setFilteredUrl(url)
    }
  }, [pathname])

  return (
    <section className='relative py-[50px]'>
      <div className='absolute left-0 top-0 z-10 h-full w-full overflow-hidden'>
        <Image src={Bg} className='h-full object-cover opacity-[0.07]' alt='' />
      </div>
      <h2 className='z-20 mx-auto w-[90%] max-w-screen-lg text-center text-3xl font-black tracking-wide text-custom-green-light md:text-4xl/tight'>
        Tratamientos de Patologías en Albacete: <br />
        Descubre Nuestras Especialidades Médicas
      </h2>

      <div className='relative z-20 mx-auto grid w-[90%] max-w-screen-lg gap-8 py-[50px] md:grid-cols-2 xl:grid-cols-4'>
        {specialities.map((specialitie, index) => {
          // Normaliza y elimina acentos de la cadena del título
          const normalizedTitle = removeAccents(specialitie.title)

          // Compara las cadenas sin tener en cuenta los acentos
          return normalizedTitle === filteredUrl ? null : (
            <SpecialitiesCard key={index} specialitie={specialitie} />
          )
        })}
      </div>
    </section>
  )
}

export default SpecialtiesPagesCategories
