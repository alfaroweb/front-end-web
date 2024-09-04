import Gangliones from './sections/Gangliones'
import MalformacionesCongenitas from './sections/MalformacionesCongenitas'
import TumoresOseos from './sections/TumoresOseos'

function page() {
  return (
    <>
      <div class='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 class='text-3xl font-bold text-slate-50'>
            Lesiones Congénitas y Patología Tumoral de la Mano en Albacete
          </h1>
          <p class='mt-2 text-lg text-slate-100'>
            Especialistas en el tratamiento de gangliones, tumores óseos, partes
            blandas y malformaciones congénitas de la mano.
          </p>
        </div>
      </div>

      <main class='w-full'>
        <Gangliones />
        <TumoresOseos />
        <MalformacionesCongenitas />
      </main>
    </>
  )
}

export default page
