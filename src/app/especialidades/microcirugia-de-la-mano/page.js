import CoberturasDeLaMano from './sections/CoberturasDeLaMano'
import NeuromasYTumoresNerviosos from './sections/NeuromasYTumoresNerviosos'
import ReparacionDeNervios from './sections/ReparacionDeNervios'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Microcirugía de la Mano en Albacete
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Expertos en reparación de nervios, tratamiento de neuromas y tumores
            nerviosos, y coberturas de la mano.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <ReparacionDeNervios />
        <NeuromasYTumoresNerviosos />
        <CoberturasDeLaMano />
      </main>
    </>
  )
}

export default page
