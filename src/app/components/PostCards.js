import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { formatDate } from '../utils/api-helpers'
import ChevronRight from '/public/home/chevron-right-circle.svg'
import Link from 'next/link'

function PostCards({ article }) {
  console.log(article.attributes.cover.data.attributes.url)
  return (
    <article className='max-w-[300px] w-full mx-auto'>
      <header>
        <Image
          src={getStrapiMedia(article.attributes.cover.data.attributes.url)}
          width={500}
          height={334}
          className='rounded-xl'
        />
      </header>
      <div className='space-y-4 mt-4 px-4'>
        <p className='text-sm text-custom-green-light font-semibold'>
          {formatDate(article.attributes.publishedAt)}
        </p>
        <h3 className='font-bold text-custom-black-light'>
          {article.attributes.title}
        </h3>
        <p className='text-gray-500 text-sm'>
          {article.attributes.description}
        </p>
        <Link
          href='/'
          className='flex w-full gap-4 items-center'
        >
          <span>Leer más</span>
          <Image
            src={ChevronRight}
            className='h-[15px] w-[15px]'
          />
        </Link>
      </div>
    </article>
  )
}

export default PostCards
