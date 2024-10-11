import Image from 'next/image'
import getPostCoverImage from './utils/getAttributes'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { getStrapiURL } from '@/app/utils/api-helpers'
import { CloudCog } from 'lucide-react'
import NotFound from '@/app/not-found'

export async function getPost(slug) {
  try {
    // Construir la URL con la función getStrapiURL
    const requestURL = getStrapiURL(
      `/api/articles?filters[slug][$eq]=${slug}&populate=*`
    )

    const res = await fetch(requestURL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      }
    })

    // Verificar si la respuesta es exitosa
    if (!res.ok) {
      console.error('Error fetching post:', res.statusText)
      return null // Retorna null si la respuesta no es exitosa
    }

    const { data } = await res.json()

    // Verificar si el post fue encontrado
    if (!data || data.length === 0) {
      console.error('Post not found')
      return null // Retorna null si no hay datos
    }

    return data
  } catch (error) {
    console.error('Fetch error:', error.message)
    return null // Retorna null en caso de un error durante la solicitud
  }
}

export async function generateStaticParams() {
  try {
    console.log('Fetching data...')

    // Usar getStrapiURL para obtener la URL de los artículos
    const requestURL = getStrapiURL(
      '/api/articles?sort=createdAt:DESC&populate=cover'
    )

    const res = await fetch(requestURL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      }
    })

    console.log('Response status:', res.status)

    if (!res.ok) {
      console.error('Response not OK:', res.statusText)
      throw new Error('Error al hacer el fetch')
    }

    const { data } = await res.json()

    // Verificar si hay datos antes de mapear
    if (!data || data.length === 0) {
      console.error('No posts found')
      return []
    }

    // Retornar los slugs
    return data.map((post) => ({
      slug: post.slug // Asegúrate de acceder a los atributos correctamente
    }))
  } catch (error) {
    console.error('Fetch error:', error.message)
    return [] // Retornar un array vacío en caso de error
  }
}

export default async function Page({ params }) {
  const [post] = await getPost(params.slug)

  if (!post) {
    console.error('No se encontró ningún artículo para este slug.')
    return <NotFound />
  }

  return (
    <main className='mx-auto w-[90%] max-w-screen-lg py-[50px]'>
      <Image
        src={post.cover.src}
        width={post.cover.width}
        height={post.cover.height}
        className='mx-auto mb-8 rounded-md shadow-md shadow-gray-600'
      />
      <h1 className='mb-8 w-full text-center text-4xl font-black text-custom-green-light'>
        {post.title}
      </h1>

      {post.dynamic.map((block, index) => {
        switch (block.__component) {
          case 'elements.post-section':
            return (
              <div
                className='mx-auto mb-8 w-[90%] [&>p]:mt-2 [&>strong]:font-bold [&>ul]:ml-8 [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:space-y-4'
                key={block.id}
              >
                {block.sectionTitle ? (
                  <h2 className='text-2xl font-bold text-custom-green-light'>
                    {block.sectionTitle}
                  </h2>
                ) : null}
                <BlocksRenderer content={block.sectionBody} className={``} />
              </div>
            )
          case 'shared.post-image':
            return (
              <Image
                src={block.url}
                width={750}
                height={500}
                className='mx-auto my-8 max-h-[400px] rounded-md object-cover shadow-md shadow-gray-700'
              />
            )
          default:
            break
        }
      })}
    </main>
  )
}
