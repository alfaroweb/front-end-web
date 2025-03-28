import Link from 'next/link'

function AppointmentButton({ styles = '' }) {
  return (
    <Link
      href='/contacto'
      className={`mb-8 w-[180px] rounded-3xl border-2 border-white bg-transparent p-3 px-4 text-center font-semibold text-white md:block ${styles} hover:custom-text-shadow transition-all duration-200 hover:scale-105 hover:border-[#E6C47D] hover:text-[#E6C47D] hover:ease-in-out`}
    >
      Solicitar una cita
    </Link>
  )
}

export default AppointmentButton
