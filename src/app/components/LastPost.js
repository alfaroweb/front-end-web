import { fetchLatestPosts } from '../utils/fetch/fetchLatestPosts'
import PostCards from './PostCards'

async function LastPost() {
  const data = await fetchLatestPosts()

  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(275px,1fr))] place-content-center gap-8'>
      {data
        .map((article) => <PostCards key={article.id} article={article} />)
        .slice(0, 3)}
    </div>
  )
}

export default LastPost
