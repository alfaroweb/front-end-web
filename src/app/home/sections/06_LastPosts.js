import PostCards from '../../components/PostCards'

async function LastPosts() {
  const { data } = await getData()

  return (
    <section className='mx-auto w-full bg-white py-[50px]'>
      <div className='mx-auto w-[90%] max-w-screen-xl'>
        <h2 className='mb-[50px] text-center text-3xl font-black'>
          Últimas noticias
        </h2>
        <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(275px,1fr))] place-content-center gap-8'>
          {data
            .map((article) => <PostCards key={article.id} article={article} />)
            .slice(0, 4)}
        </div>
      </div>
    </section>
  )
}

async function getData() {
  try {
    console.log('Fetching data...')
    const res = await fetch(
      'http://localhost:1337/api/articles?sort=createdAt:DESC&populate=cover',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
      }
    )

    console.log('Response status:', res.status)
    if (!res.ok) {
      console.log('Response not OK:', res.statusText)
      throw new Error('Error al hacer el fetch')
    }

    const data = await res.json()

    console.log(data)
    return data
  } catch (error) {
    console.error('Fetch error:', error.message)
    return null
  }
}

export default LastPosts
