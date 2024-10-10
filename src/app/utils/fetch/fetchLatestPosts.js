import { getStrapiURL } from '../api-helpers'

export async function fetchLatestPosts() {
  const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

  if (!apiToken) {
    console.error('Error: El token de API de Strapi no está definido.')
    return { data: [] }
  }

  try {
    // Construir la URL con la función getStrapiURL
    const requestURL = getStrapiURL(
      '/api/articles?sort=createdAt:DESC&populate=*'
    )

    const res = await fetch(requestURL, {
      headers: {
        Authorization: `Bearer ${apiToken}`
      }
    })

    console.log('Response status:', res.status)

    if (!res.ok) {
      console.error('Response not OK:', res.statusText)
      throw new Error(`Error en el fetch: ${res.statusText}`)
    }

    const { data } = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error.message)
    return { data: [] }
  }
}
