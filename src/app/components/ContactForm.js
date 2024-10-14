'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Toaster, toast } from 'sonner'

const initialForm = {
  userName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación de los campos del formulario
    const newErrors = {}
    if (!form.userName.trim()) {
      newErrors.userName = 'Ingrese su nombre'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Ingrese su email'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido'
    }
    if (!form.phone) {
      newErrors.phone = 'Ingrese su teléfono'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Ingrese su mensaje'
    }

    // Si hay errores, no se envía el formulario y se actualiza el estado de los errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    toast.info('Recibiendo su consulta')
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      toast.success('Hemos recibido tu correo correctamente')
      setForm(initialForm)
    } else {
      toast.error('Error al enviar el correo')
    }
  }
  return (
    <div className='relative w-full rounded-lg p-6 sm:p-8 md:p-10'>
      <div className='relative z-10 mx-auto w-full max-w-screen-md'>
        <div className='mb-6 flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-center text-3xl font-bold tracking-tighter md:text-4xl/tight'>
            Programe su consulta
          </h2>

          <p className='max-w-2xl text-center'>
            ¿Necesitas un cirujano o traumatólogo de mano en Albacete? Programa
            tu cita médica de manera rápida y sencilla completando este
            formulario. Nuestro equipo se pondrá en contacto contigo a la
            brevedad para confirmar tu cita y responder a cualquier pregunta.
          </p>
        </div>
        <form
          className='gap-6'
          onSubmit={(e) => handleSubmit(e)}
          id='contact-form'
        >
          <div className='space-y-4'>
            <div className='grid gap-2'>
              <label
                htmlFor='userName'
                className='font-semibold text-custom-green-light'
              >
                Nombre completo
              </label>

              <input
                type='text'
                name='userName'
                id='userNname'
                className={`rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0 ${errors.userName ? 'ring-red-500 placeholder:text-red-500' : ''}`}
                autoComplete='name'
                placeholder={`${errors.userName ? errors.userName : 'Introduzca su nombre completo'}`}
                value={form.userName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='email'
                className='font-semibold text-custom-green-light'
              >
                Dirección de correo electrónico
              </label>

              <input
                id='email'
                type='email'
                name='email'
                autoComplete='email'
                className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                placeholder={`${errors.email ? errors.email : 'Introduzca su correo electrónico'}`}
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='grid gap-2'>
              <label
                htmlFor='phone'
                className='font-semibold text-custom-green-light'
              >
                Número de teléfono
              </label>

              <input
                id='phone'
                name='phone'
                type='tel'
                placeholder={`${errors.phone ? errors.phone : 'Introduzca su numero de teléfono'}`}
                className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                value={form.phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='space-y-4'>
              <div className='grid gap-2'>
                <label
                  htmlFor='message'
                  className='font-semibold text-custom-green-light'
                >
                  Trámite o Consulta
                </label>

                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  placeholder='Describe brevemente el trámite o consulta que estás solicitando'
                  value={form.message}
                  onChange={(e) => handleChange(e)}
                  className='rounded-lg border-2 border-custom-green-light border-opacity-20 p-2 focus:outline-custom-green-light focus:ring-0'
                />
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <input type='checkbox' name='consent' id='consent' required />
            <label htmlFor='consent'>
              {' '}
              Consiento el tratamiento de mis datos por Dr. Alfaro Micó con la
              finalidad de gestionar la solicitud de cita previa. Más
              información en nuestra{' '}
              <Link
                href='/politica-de-privacidad'
                className='text-custom-green-light underline'
              >
                Política de privacidad
              </Link>
            </label>
          </div>

          <div className='mt-4 flex justify-center'>
            <input
              type='submit'
              className='mb-8 hidden w-[180px] rounded-3xl border-2 border-custom-green-light bg-transparent p-3 px-4 text-center font-semibold text-custom-green-light transition-colors duration-200 ease-in-out hover:bg-custom-green-light hover:text-white md:block'
              value='Enviar solicitud'
            />
          </div>
          <Toaster richColors />
        </form>
      </div>
    </div>
  )
}
