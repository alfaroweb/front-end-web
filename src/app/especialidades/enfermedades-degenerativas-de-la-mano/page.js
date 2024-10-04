import AppointmentButton from '@/app/components/AppointmentButton'
import ArtrosisDedos from './sections/ArtrosisDedos'
import ArtrosisMuñeca from './sections/ArtrosisMuñeca'
import Rizartrosis from './sections/Rizartrosis'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#artrosis-dedos',
    categoryTitle: 'Artrosis en dedos',
    subcategories: null
  },
  ,
  {
    id: '#artrosis-muneca',
    categoryTitle: 'Artrosis de muñeca',
    subcategories: null
  },
  {
    id: '#rizartrosis',
    categoryTitle: 'Rizartrosis',
    subcategories: null
  }
]

function EnfermedadesDegenerativas() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold text-slate-50'>
            Especialistas en el Tratamiento de Enfermedades Degenerativas de la
            Mano en Albacete{' '}
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres de <strong>dolor</strong>, <strong>rigidez</strong> y{' '}
            <strong>dificultad</strong> para mover los dedos o la muñeca?
            Podrías tener <strong>artrosis</strong>. En nuestra clínica en{' '}
            <strong>Albacete</strong>, diagnosticamos y tratamos diferentes
            tipos de artrosis, como la <em>artrosis de dedos</em>,{' '}
            <em>muñeca</em> y<em> rizartrosis</em>. Ofrecemos soluciones{' '}
            <strong>personalizadas</strong> para aliviar el dolor y mejorar tu
            <strong> calidad de vida</strong>.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <ArtrosisDedos Book={Book} />
            <ArtrosisMuñeca Book={Book} />
            <Rizartrosis Book={Book} />
          </main>
          <aside className='md:block lg:w-1/3'>
            <TablaDeContenidos categories={lesiones} />
          </aside>
        </div>
      </div>
    </>
  )
}

export default EnfermedadesDegenerativas
