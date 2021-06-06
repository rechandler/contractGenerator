import Modal from 'src/components/Modal/Modal';
import Spinner from 'src/components/Spinner/Spinner'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { getDateForNotes } from 'src/helpers/date'

const DELETE_NOTE = gql`
  mutation DeleteNoteMutation($id: Int!, $contractId: Int!, $type: String!, $userId: Int!) {
    deleteNote(id: $id, contractId: $contractId, type: $type, userId: $userId) {
      id,
      message,
      author,
      createdAt,
      userId
    }
  }
`

const NoteModal = ({contractId, setNotes, modalNote, showModal, setShowModal}) => {

  const [noteDelete, {loading}] = useMutation(DELETE_NOTE)

  const deleteNote = async() => {
    try {
      const { data } = await noteDelete({ variables: {id: modalNote.id, contractId: contractId, type: 'contract', userId: modalNote.userId}})
      setNotes(data.deleteNote)
    } catch ( exception ) {
      toast.error('Error Saving Note, exception.message')
    }
    setShowModal(false)
  }

  if(!modalNote) return null

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex justify-between space-x-3 ">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                {modalNote.author}
              </h3>
              <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{getDateForNotes(modalNote.createdAt)}</time>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {modalNote.message}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={deleteNote} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          {loading ? <Spinner /> : 'Delete Note' }
        </button>
        <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default NoteModal
