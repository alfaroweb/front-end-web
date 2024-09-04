import PostCards from '../../components/PostCards'

async function LastPosts() {
  const { data } = await getData()

  return (
    <section className='w-full mx-auto bg-white py-[50px]'>
      <div className='w-[90%] mx-auto max-w-screen-xl'>
        <h2 className='text-center text-3xl font-black mb-[50px]'>
          Últimas noticias
        </h2>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-8 place-content-center w-full'>
          {data
            .map((article) => (
              <PostCards
                key={article.id}
                article={article}
              />
            ))
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
