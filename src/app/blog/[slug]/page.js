import Image from 'next/image'
import getPostCoverImage from './utils/getAttributes'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

async function getPost(slug) {
  let res = await fetch(
    `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`
  )
  let post = await res.json()
  if (!post) notFound()
  return post
}
async function generateStaticParams() {
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

    const { data } = await res.json()

    return data.map((post) => ({
      slug: post.slug
    }))
  } catch (error) {
    console.error('Fetch error:', error.message)
    return null
  }
}

export default async function Page({ params }) {
  // Desestructuramos el primer elemento de data directamente en una sola línea
  const { data: [post] = [] } = await getPost(params.slug)

  if (!post) {
    console.error('No se encontró ningún artículo para este slug.')
    return <article>No se encontró el artículo.</article> // Manejo del caso donde no hay datos
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
