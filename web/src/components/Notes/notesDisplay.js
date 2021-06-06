import { getDateForNotes } from 'src/helpers/date'
const NotesDisplay = ({ notes, setModalNote, setShowModal }) => {

  const noteAlert = note => {
    setModalNote(note)
    setShowModal(true)
  }

  return (
    <div className="p-1">
      <ul className="divide-y divide-gray-200">
        {notes.map(note => {
          return (
            <li onClick={() => noteAlert(note)} key={note.id} className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600">
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <button className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    <p className="text-sm font-medium text-gray-900 truncate">{note.author}</p>
                  </button>
                </div>
                <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{getDateForNotes(note.createdAt)}</time>
              </div>
              <div className="mt-1">
                <p className="line-clamp-2 text-sm text-gray-600">
                  {note.message}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NotesDisplay
