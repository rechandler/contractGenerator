import MakesLayout from 'src/layouts/MakesLayout'
import EditMakeCell from 'src/components/Admin/EditMakeCell/EditMakeCell'

const EditMakePage = ({ id }) => {
  return (
    <MakesLayout>
      <EditMakeCell id={id} />
    </MakesLayout>
  )
}

export default EditMakePage
