function P({ text }) {
  return <p className='text-base/relaxed xl:text-lg/relaxed'>{text}</p>
}

function About() {
  return (
    <section className='w-full bg-white'>
      <div className='mx-auto grid w-[90%] max-w-screen-lg gap-2 pb-[34px] pt-16'>
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
          Acerca del Dr. Alfaro
        </h2>
        <P
          text='El Dr. Joaquín Alfaro Micó es licenciado en Medicina y Cirugía por la
          Universidad de Castilla-La Mancha (Facultad de Medicina de Albacete).
          Accedió a las plazas de formación en Cirugía Ortopédica y
          Traumatología en el Hospital Universitario de Albacete en el año 2016,
          obteniendo el Título de Facultativo Especialista en Cirugía Ortopédica
          y Traumatología.'
        />
        <P
          text='Actualmente desarrolla su actividad profesional en el Hospital General
          Universitario de Albacete como Facultativo especialista de Área,
          combinando dicha actividad con el Hospital Quirónsalud Albacete.'
        />
        <P
          text='Es socio de la Sociedad Española de Cirugía de la Mano (SECMA), de la
          Sociedad Española de Cirugía Ortopédica y Traumatología (SECOT) y
          Sociedad Castellano-manchega de Cirugía Ortopédica y Traumatología
          (SCMCOT).'
        />
        <P
          text='Autor de publicaciones en revistas nacionales e internacionales. Ha
          elaborado numerosas ponencias y comunicaciones en cursos y congresos
          de la Especialidad. En la actualidad continúa con su actividad
          científica y de formación participando en cursos y congresos
          relacionados con la patología de Cirugía Ortopédica y Traumatología'
        />
      </div>
    </section>
  )
}

export default About
