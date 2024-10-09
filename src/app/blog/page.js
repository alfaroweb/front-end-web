import { fetchLatestPosts } from '../utils/fetch/fetchLatestPosts'
import PaginationPosts from './components/PaginationPosts'

async function page() {
  const latestPosts = await fetchLatestPosts()

  return (
    <main className='mx-auto w-[90%] max-w-screen-lg py-[50px]'>
      <h1 className='mb-8 text-center text-4xl font-black text-custom-green-light'>
        Blog
      </h1>
      <PaginationPosts latestPosts={latestPosts} />
    </main>
  )
}

export default page
