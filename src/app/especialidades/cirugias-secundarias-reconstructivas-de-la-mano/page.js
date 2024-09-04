import CirugiaDeSecuelas from './sections/CirugiaDeSecuelas'
import InjertosTendinosos from './sections/InjertosTendinosos'
import Osteotomias from './sections/Osteotomias'
import Pseudoartrosis from './sections/Pseudoartrosis'
import TransferenciasTendinosas from './sections/TransferenciasTendinosas'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Cirugía Secundaria Reconstructiva en Albacete
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Tratamiento especializado para pseudoartrosis, osteotomías, injertos
            tendinosos, cirugías de secuelas y transferencias tendinosas.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <Pseudoartrosis />
        <Osteotomias />
        <InjertosTendinosos />
        <CirugiaDeSecuelas />
        <TransferenciasTendinosas />
      </main>
    </>
  )
}

export default page
