import AppointmentButton from '@/app/components/AppointmentButton'
import CompresionNervioCubital from './sections/CompresionNervioCubital'
import SindromeTunelCarpiano from './sections/SindromeTunelCarpiano'
import Book from '/public/home/medicine-book.svg'
import TablaDeContenidos from '@/app/components/TablaDeContenidos'

const lesiones = [
  {
    id: '#sindrome-tunel-carpiano',
    categoryTitle: 'Síndrome del túnel carpiano',
    subcategories: null
  },
  ,
  {
    id: '#compresion-nervio-cubital',
    categoryTitle: 'Compresión del nervio cubital',
    subcategories: null
  }
]

function page() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='custom-text-shadow text-4xl font-bold tracking-wide text-slate-50'>
            Especialistas en Enfermedades de Nervio Periférico de la Mano en
            Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufres de <strong>dolor</strong>, <strong>entumecimiento</strong> y{' '}
            <strong>debilidad</strong> en la mano? Podrías tener{' '}
            <strong className='font-bold'>síndrome del túnel carpiano</strong> o{' '}
            <strong className='font-bold'>compresión del nervio cubital</strong>
            . En nuestra{' '}
            <strong className='font-bold'>clínica en Albacete</strong>,
            diagnosticamos y tratamos estas
            <em> neuropatías</em> de forma personalizada, ofreciéndote{' '}
            <strong>soluciones efectivas</strong> para recuperar la
            <strong> funcionalidad</strong> de tu mano y mejorar tu{' '}
            <strong>calidad de vida</strong>.
          </p>
          <AppointmentButton />
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex flex-col-reverse lg:max-w-screen-2xl lg:flex-row'>
          <main className='w-full py-[50px] lg:w-2/3'>
            <SindromeTunelCarpiano Book={Book} />
            <CompresionNervioCubital Book={Book} />
          </main>
          <aside className='md:block lg:w-1/3'>
            <TablaDeContenidos categories={lesiones} />
          </aside>
        </div>
      </div>
    </>
  )
}

export default page
