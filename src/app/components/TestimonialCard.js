// src/TestimonialCard.js
'use client'
import Image from 'next/image'
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
    <div className='relative max-h-max w-full max-w-md overflow-hidden rounded-lg bg-white py-4 shadow-md'>
      {/* Testimonios */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex min-w-full flex-col items-center justify-between space-y-2 text-center'
          >
            <div
              alt='Avatar de un paciente'
              className='h-20 w-20 rounded-full bg-gray-500'
            />

            <blockquote className='w-[90%] max-w-lg text-center text-lg font-medium italic'>
              {testimonial.text}
            </blockquote>

            <div className='mx-auto w-[90%] text-center text-gray-600'>
              <p>{testimonial.author}</p>

              <p>CEO of Company Co.</p>
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
