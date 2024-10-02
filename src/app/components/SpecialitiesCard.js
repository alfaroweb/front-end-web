import Link from 'next/link'

function SpecialitiesCard({ specialitie }) {
  return (
    <Link href={specialitie.url} className=''>
      <article
        className={`group relative flex h-[110px] w-full flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-2 py-4 font-bold text-custom-black-light transition-colors duration-200 ease-in-out group-hover:text-white`}
      >
        <h3 className='text-md z-20 text-center font-bold group-hover:text-white'>
          {specialitie.title}
        </h3>

        <p className='z-20 text-custom-green-light group-hover:text-white'>
          Leer más
        </p>

        {/* 
      <ul className='mb-4 h-2/4'>
        {specialitie.list.map((specialitie, index) => (
          <li
            key={index}
            className='text-center mb-2'
          >
            {specialitie}
          </li>
        ))}
      </ul> */}
        <div className='absolute left-0 top-0 z-10 h-full w-full -translate-y-[100%] bg-gradient-to-r from-custom-green-light to-custom-green-dark transition-transform duration-300 ease-in-out group-hover:translate-y-0'>
          {' '}
        </div>
      </article>
    </Link>
  )
}

export default SpecialitiesCard
