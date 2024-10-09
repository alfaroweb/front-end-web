import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { formatDate } from '../utils/api-helpers'
import ChevronRight from '/public/home/chevron-right-circle.svg'
import Link from 'next/link'

function PostCards({ article }) {
  return (
    <article className={`mx-auto w-full max-w-[300px]`}>
      <header>
        <Image
          src={article.cover.src}
          width={500}
          height={334}
          className='rounded-xl'
          alt=''
        />
      </header>
      <div className='mt-4 space-y-4 px-4'>
        <p className='text-sm font-semibold text-custom-green-light'>
          {formatDate(article.publishedAt)}
        </p>

        <h3 className='font-bold text-custom-black-light'>{article.title}</h3>

        <p className='text-sm text-gray-500'>{article.description}</p>

        <Link
          href={`/blog/${article.slug}`}
          className='flex w-full items-center gap-4'
        >
          <span>Leer más</span>

          <Image
            src={ChevronRight}
            className='h-[15px] w-[15px]'
            alt='ALT DE EJEMPLO'
          />
        </Link>
      </div>
    </article>
  )
}

export default PostCards
