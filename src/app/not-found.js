import Image from 'next/image'
import NotFoundImage from '/public/not-found.svg'
import Link from 'next/link'

function NotFound() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center gap-8 py-[50px]'>
      <h1 className='w-full text-center text-4xl font-black text-custom-green-light'>
        Página no encontrada
      </h1>
      <Image src={NotFoundImage} alt='' />
      <Link
        href='/'
        className='text-xl font-bold text-custom-green-light hover:scale-110'
      >
        Volver a inicio
      </Link>
    </main>
  )
}

export default NotFound
