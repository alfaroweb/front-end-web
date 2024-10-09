// Componente para mostrar un mensaje de carga

import LastPost from '@/app/components/LastPost'
import Loading from '@/app/loading'
import { Suspense } from 'react'

async function LastNews() {
  return (
    <section className='mx-auto w-full bg-white py-[50px]'>
      <div className='mx-auto w-[90%] max-w-screen-xl'>
        <h2 className='mb-[50px] text-center text-3xl font-black'>
          Últimas noticias
        </h2>
        <Suspense fallback={<Loading />}>
          <LastPost />
        </Suspense>
      </div>
    </section>
  )
}

export default LastNews
