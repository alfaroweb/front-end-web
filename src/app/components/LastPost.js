import { fetchLatestPosts } from '../utils/fetch/fetchLatestPosts'
import PostCards from './PostCards'
import Image from 'next/image'
import NoPost from '/public/no-post.svg'

async function LastPost() {
  const data = await fetchLatestPosts()

  if (data.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-8'>
        <Image
          src={NoPost}
          alt='Imagen de dos personas representando que no se han encontrado post en el blog'
          width={400}
          height={400}
        />
        <p className='font-semibold text-custom-green-light'>
          Todavía no hay ninguna noticia
        </p>
      </div>
    )
  }

  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(275px,1fr))] place-content-center gap-8'>
      {data
        .map((article) => <PostCards key={article.id} article={article} />)
        .slice(0, 3)}
    </div>
  )
}

export default LastPost
