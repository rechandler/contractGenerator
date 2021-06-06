import onClickOutside from 'react-onclickoutside'

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <div className={`${showModal ? 'visible' : 'invisible'} fixed z-10 inset-0 overflow-y-auto`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className={`{transform ${showModal ? 'ease-out duration-200 opacity-100' : 'ease-in duration-300 opacity-0'} fixed inset-0 transition-opacity`} aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className={`transform ${showModal? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100' : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'} inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline`}>
          <ModalBody setShowModal={setShowModal}>{children}</ModalBody>
        </div>
      </div>
    </div>
  )
}

// wrap the modal body in onClickOutside to handle clicking on the background to close the modal
const ModalBody = onClickOutside(({setShowModal, children}) => {
  ModalBody.handleClickOutside = () => setShowModal(false)
  return (<div>{children}</div>)
}, {
  handleClickOutside: () => ModalBody.handleClickOutside
})

export default Modal
