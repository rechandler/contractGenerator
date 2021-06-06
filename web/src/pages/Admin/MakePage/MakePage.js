import MakesLayout from 'src/layouts/MakesLayout'
import MakeCell from 'src/components/Admin/MakeCell'

const MakePage = ({ id }) => {
  return (
    <MakesLayout>
      <MakeCell id={id} />
    </MakesLayout>
  )
}

export default MakePage
