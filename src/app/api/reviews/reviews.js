export default async function handler(req, res) {
  const placeId = 'tu_place_id_aqui' // Este es el ID del lugar en Google Maps
  const apiKey = process.env.GOOGLE_API_KEY

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    )
    const data = await response.json()

    if (data.status === 'OK') {
      const reviews = data.result.reviews || []
      res.status(200).json({ reviews })
    } else {
      res.status(400).json({ error: 'No se pudo obtener las reseñas.' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Hubo un problema al obtener las reseñas.' })
  }
}
