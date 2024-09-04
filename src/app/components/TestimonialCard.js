// src/TestimonialCard.js
'use client'
import React, { useState } from 'react'

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit incidunt modi beatae, veniam quibusdam quae? Magni odit veniam dolores accusantium sunt totam neque, commodi non laborum corporis quam distinctio voluptate.',
      author: 'Juan Pérez'
    },
    {
      text: 'Gran experiencia, volvería sin dudarlo.',
      author: 'Ana García'
    },
    {
      text: '¡Productos de calidad y atención excelente!',
      author: 'Carlos López'
    }
  ]

  const handleTestimonialChange = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='w-full max-w-md py-4  bg-white rounded-lg shadow-md overflow-hidden max-h-max relative '>
      {/* Testimonios */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='min-w-full text-center flex flex-col justify-between items-center space-y-2'
          >
            <img
              src='https://source.unsplash.com/random/100x100?4'
              alt=''
              className='w-20 h-20 rounded-full bg-gray-500'
            />
            <blockquote className='max-w-lg text-lg italic font-medium text-center w-[90%]'>
              {testimonial.text}
            </blockquote>
            <div className='text-center text-gray-600 w-[90%] mx-auto'>
              <p>{testimonial.author}</p>
              <p>CEO of Company Co.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Puntos de Navegación */}
      <div className='flex justify-center mt-4'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTestimonialChange(index)}
            className={`h-3 w-3 rounded-full mx-2 focus:outline-none z-10 ${
              currentIndex === index ? 'bg-custom-green-light' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
