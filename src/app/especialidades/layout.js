import SpecialtiesPagesCategories from '@/app/components/SpecialtiesPagesCategories'

function layout({ children }) {
  return (
    <>
      {children}
      <SpecialtiesPagesCategories />
    </>
  )
}

export default layout
