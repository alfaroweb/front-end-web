'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SpecialitiesCard from './SpecialitiesCard'
import { specialities } from '@/app/home/data/data'

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
    <section className='py-[50px]'>
      <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight  text-gray-800 w-[90%] max-w-screen-lg text-center mx-auto'>
        Tratamientos de Patologías en Albacete: <br />
        Descubre Nuestras Especialidades Médicas
      </h2>
      <div className='mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-screen-lg py-[50px] w-[90%]'>
        {specialities.map((specialitie, index) => {
          // Normaliza y elimina acentos de la cadena del título
          const normalizedTitle = removeAccents(specialitie.title)

          // Compara las cadenas sin tener en cuenta los acentos
          return normalizedTitle === filteredUrl ? null : (
            <SpecialitiesCard
              key={index}
              specialitie={specialitie}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SpecialtiesPagesCategories