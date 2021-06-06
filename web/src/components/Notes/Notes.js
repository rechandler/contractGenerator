import { useState } from 'react'
import NotesDisplay from './notesDisplay'
import NoteForm from './noteForm'
import NoteModal from './notemodal'


const Note = ({ notes, id }) => {
  const [displayNotes, setDisplayNotes] = useState(notes)
  const [showModal, setShowModal] = useState(false)
  const [modalNote, setModalNote] = useState()

  const addCreatedNote = note => {
    setDisplayNotes([...displayNotes, note])
  }

  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Notes
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              for the current Contract
            </p>
          </div>
        </div>
      </div>
      <NotesDisplay notes={displayNotes} setModalNote={setModalNote} setShowModal={setShowModal} />
      <NoteForm id={id} addCreatedNote={addCreatedNote} />
      <NoteModal modalNote={modalNote} setNotes={setDisplayNotes} showModal={showModal} setShowModal={setShowModal} contractId={id} />
    </div>
  )
}

export default Note
