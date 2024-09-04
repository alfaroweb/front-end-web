import Link from 'next/link'

function SpecialitiesCard({ specialitie }) {
  return (
    <Link
      href={specialitie.url}
      className=''
    >
      <article
        className={`px-2 py-4 rounded-xl text-custom-black-light w-full flex flex-col items-center justify-between group-hover:text-white h-[110px] relative bg-white font-bold  group transition-colors duration-200 ease-in-out  overflow-hidden`}
      >
        <h3 className='text-md text-center font-bold group-hover:text-white z-20'>
          {specialitie.title}
        </h3>

        <p className='text-custom-green-light group-hover:text-white z-20'>
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
        <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-custom-green-light to-custom-green-dark -translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10'>
          {' '}
        </div>
      </article>
    </Link>
  )
}

export default SpecialitiesCard
