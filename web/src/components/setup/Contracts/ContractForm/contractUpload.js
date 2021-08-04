import FileUpload from 'src/lib/fileUpload'
const ContractUpload = ({ formState }) => {
  return (
    <div className={formState.currentStep === 4 ? '' : 'hidden'}>
      <FileUpload />
    </div>
  )
}

export default ContractUpload
