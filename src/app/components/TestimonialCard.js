// src/TestimonialCard.js
'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt modi beatae, veniam quibusdam quae? Magni odit veniam dolores accusantium sunt totam neque, commodi non laborum corporis quam distinctio voluptate.',
      author: 'Juan Pérez'
    },
    {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eveniet. Dicta harum debitis, officiis sequi inventore mollitia animi quo ipsum doloribus et, a laudantium reiciendis tempore at culpa unde aliquam.',
      author: 'Ana García'
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, consequuntur veritatis. Omnis voluptatem nesciunt quidem assumenda esse nemo officia incidunt ipsam, numquam commodi similique, eligendi sint quas. Odio, quo veritatis.',
      author: 'Carlos López'
    }
  ]

  const handleTestimonialChange = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='relative max-h-max w-full max-w-md overflow-hidden rounded-lg bg-white py-4 shadow-md'>
      {/* Testimonios */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
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
                className=''
              />{' '}
              {testimonial.text}{' '}
              <FontAwesomeIcon
                icon={faQuoteRight}
                width={20}
                height={20}
                color='#3B8590'
                className=''
              />
            </blockquote>

            <div className='mx-auto w-[90%] text-center text-gray-600'>
              <p>{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Puntos de Navegación */}
      <div className='mt-4 flex justify-center'>
        {testimonials.map((_, index) => (
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
