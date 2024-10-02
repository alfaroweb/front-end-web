import AppointmentButton from '@/app/components/AppointmentButton'
import Fracturas from './sections/Fracturas'
import LesionesFibrocartilagoTriangular from './sections/LesionesFibrocartilagoTriangular'
import LesionesLigamentosas from './sections/LesionesLigamentosas'
import LesionesTendinosas from './sections/LesionesTendinosas'
import TablaDeContenidos from './sections/TablaDeContenidos'
import Book from '/public/home/medicine-book.svg'

function LesionesTraumaticas() {
  return (
    <>
      <div className='mx-auto w-full bg-gradient-to-r from-custom-green-light to-custom-green-dark py-6 text-center'>
        <div className='mx-auto flex w-[90%] max-w-screen-lg flex-col items-center gap-2'>
          <h1 className='text-3xl font-bold text-slate-50'>
            Lesiones Traumáticas de la Mano en Albacete
          </h1>
          <p className='mb-4 mt-2 text-slate-100'>
            ¿Sufriste una caída o golpe en la mano? En nuestra clínica en{' '}
            <strong>Albacete</strong>, ofrecemos diagnóstico y tratamiento
            <strong> especializado</strong> para todo tipo de fracturas y
            lesiones de
            <strong> muñeca y mano</strong>. Desde{' '}
            <strong>fracturas simples</strong> hasta
            <strong> lesiones complejas</strong> en tendones y ligamentos,
            contamos con la experiencia y tecnología necesaria para{' '}
            <strong>restaurar la funcionalidad</strong> de tu mano y muñeca.
            Ofrecemos
            <strong> soluciones personalizadas</strong> para cada paciente, con
            el objetivo de que puedas volver a realizar tus{' '}
            <em>actividades diarias</em> con normalidad.
          </p>
          <AppointmentButton />
        </div>
      </div>

      {/* <TablaDeContenidos /> */}
      <main className='w-full bg-white py-[50px]'>
        <Fracturas Book={Book} />
        <LesionesLigamentosas Book={Book} />
        <LesionesTendinosas Book={Book} />
        <LesionesFibrocartilagoTriangular Book={Book} />
        <div className='mx-auto mb-16 w-[90%] max-w-screen-lg'>
          <h2 className='mb-4 text-center text-3xl font-bold tracking-wide'>
            Conclusión
          </h2>
          <p className='mb-4'>
            Las lesiones traumáticas de la mano, como fracturas, luxaciones,
            lesiones tendinosas y ligamentosas, pueden tener un impacto
            significativo en la función y calidad de vida. En Albacete, nuestro
            equipo especializado está comprometido en ofrecer el mejor
            tratamiento y rehabilitación para asegurar una recuperación
            efectiva. Si experimentas síntomas de alguna de estas lesiones, te
            recomendamos buscar atención médica profesional para obtener un
            diagnóstico preciso y un plan de tratamiento adecuado.
          </p>
          <p className='mb-4'>
            Para una evaluación exhaustiva y un tratamiento personalizado,{' '}
            <a href='#' className='text-custom-blue-light hover:underline'>
              contacta a nuestros especialistas en cirugía de la mano en
              Albacete
            </a>
            .
          </p>
        </div>
      </main>
    </>
  )
}

export default LesionesTraumaticas
