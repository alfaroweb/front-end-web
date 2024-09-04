import ArtroscopiaDeMuñeca from './sections/ArtroscopiaDeMuñeca'
import EnfermedadDeDupuytren from './sections/EnfermedadDeDupuytren'
import ManoReumatica from './sections/ManoReumatica'

function page() {
  return (
    <>
      <div className='text-gray-800 py-6 text-center w-full mx-auto bg-gradient-to-r from-custom-green-light to-custom-green-dark'>
        <div className='w-[90%] mx-auto max-w-screen-lg'>
          <h1 className='text-3xl font-bold  text-slate-50'>
            Enfermedades Inflamatorias y Dupuytren de la Mano en Albacete
          </h1>
          <p className='text-lg mt-2  text-slate-100'>
            Especialistas en el diagnóstico y tratamiento de la mano reumática,
            artroscopia de muñeca y enfermedad de Dupuytren.
          </p>
        </div>
      </div>

      <main className='w-full'>
        <ManoReumatica />
        <ArtroscopiaDeMuñeca />
        <EnfermedadDeDupuytren />
      </main>
    </>
  )
}

export default page
