import SpecialtiesPagesCategories from '@/components/SpecialtiesPagesCategories'

function layout({ children }) {
  return (
    <>
      {children}
      <SpecialtiesPagesCategories />
    </>
  )
}

export default layout
