import CompresionDelNervioCubital from './sections/CompresionDelNervioCubital'
import LesionesNerviosas from './sections/LesionesNerviosas'
import TunelCarpiano from './sections/TunelCarpiano'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Enfermedades de Nervio Periférico de la Mano en Albacete
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Diagnóstico y tratamiento de condiciones como el síndrome del túnel
            carpiano, compresión del nervio cubital y lesiones nerviosas.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <TunelCarpiano />
        <CompresionDelNervioCubital />
        <LesionesNerviosas />
      </main>
    </>
  )
}

export default page
