'use client'
import { useEffect, useState } from 'react'
import PostCards from '@/app/components/PostCards'

function PaginationPosts({ latestPosts }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const initialIndex = (currentPage - 1) * itemsPerPage
  const lastIndex = currentPage * itemsPerPage

  const handleNextPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
  }

  return (
    <>
      <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(275px,1fr))] place-content-center gap-8'>
        {latestPosts
          .map((article) => <PostCards key={article.id} article={article} />)
          .slice(initialIndex, lastIndex)}
      </div>
      <div className='mt-8 flex flex-col items-center justify-center gap-8 md:flex-row'>
        <button
          className='rounded-xl border border-custom-green-light bg-custom-green-light bg-transparent p-2 font-bold text-custom-green-light'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Página anterior
        </button>
        <button
          className='rounded-xl border border-custom-green-light bg-custom-green-light bg-transparent p-2 font-bold text-custom-green-light'
          onClick={handleNextPage}
          disabled={
            Math.ceil(latestPosts.length / itemsPerPage) === currentPage
          }
        >
          Siguiente Pagina
        </button>
      </div>
    </>
  )
}

export default PaginationPosts
