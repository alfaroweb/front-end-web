'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = () => {
  const [reviews, setReviews] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews/reviews')
        const data = await res.json()
        if (data.reviews) {
          setReviews(data.reviews)
        }
      } catch (error) {
        console.error('Error al obtener reseñas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const handleTestimonialChange = (index) => {
    setCurrentIndex(index)
  }

  if (loading) {
    return <p className='text-center text-gray-500'>Cargando reseñas...</p>
  }

  return (
    <div className='relative max-h-max w-full max-w-md overflow-hidden rounded-lg bg-white py-4 shadow-md'>
      {/* Testimonios dinámicos */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className='flex min-w-full flex-col items-center justify-center space-y-2 text-center'
            >
              <blockquote className='w-[90%] max-w-lg text-center font-medium italic'>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  width={20}
                  height={20}
                  color='#3B8590'
                />{' '}
                {review.text}{' '}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  width={20}
                  height={20}
                  color='#3B8590'
                />
              </blockquote>

              <div className='mx-auto w-[90%] text-center text-gray-600'>
                <p>{review.author_name}</p>
                <p className='text-yellow-500'>⭐ {review.rating}</p>
              </div>
            </div>
          ))
        ) : (
          <div className='flex min-w-full flex-col items-center justify-center space-y-2 text-center'>
            <blockquote className='mx-auto w-[90%] max-w-lg text-center font-medium italic'>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                width={20}
                height={20}
                color='#3B8590'
              />{' '}
              No hay reseñas disponibles{' '}
              <FontAwesomeIcon
                icon={faQuoteRight}
                width={20}
                height={20}
                color='#3B8590'
              />
            </blockquote>
          </div>
        )}
      </div>

      {/* Puntos de Navegación */}
      <div className='mt-4 flex justify-center'>
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTestimonialChange(index)}
            aria-label='Botón para seleccionar testimonio'
            className={`z-10 mx-2 h-3 w-3 rounded-full focus:outline-none ${
              currentIndex === index ? 'bg-custom-green-light' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
