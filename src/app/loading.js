export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSpinner />
}

const LoadingSpinner = () => (
  <div className='flex items-center justify-center'>
    <span>Cargando...</span>
    {/* Puedes añadir un spinner aquí si lo deseas */}
  </div>
)
