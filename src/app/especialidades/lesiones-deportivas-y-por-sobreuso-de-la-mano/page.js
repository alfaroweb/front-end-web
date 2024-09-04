import DedoEnResorte from './sections/DedoEnResorte'
import FactoresDeCrecimiento from './sections/FactoresDeCrecimiento'
import Tendinopatias from './sections/Tendinopatias'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Lesiones Deportivas y por Sobreuso de la Mano
          </h1>
          <p className='mt-2 text-lg text-slate-100'>
            Especialistas en el tratamiento de tendinopatías, dedo en resorte y
            uso de factores de crecimiento para lesiones de la mano en Albacete.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <Tendinopatias />
        <DedoEnResorte />
        <FactoresDeCrecimiento />
      </main>
    </>
  )
}

export default page
