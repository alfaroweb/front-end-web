export async function fetchLatestPosts() {
  try {
    const res = await fetch(
      'http://localhost:1337/api/articles?sort=createdAt:DESC&populate=*',
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

    const { data } = await res.json()

    return data
  } catch (error) {
    console.error('Fetch error:', error.message)
    return { data: [] }
  }
}
