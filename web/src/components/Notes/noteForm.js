import { useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'
import { Form, TextAreaField, TextField, NumberField, Submit } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useAuth } from '@redwoodjs/auth'
import Spinner from 'src/components/Spinner/Spinner'

const CREATE_NOTE = gql`
  mutation CreateNoteMutation($input: CreateNoteInput!) {
    createNote(input: $input) {
      id,
      createdAt,
      author,
      message,
      userId
    }
  }
`

const NoteForm = ({ id, addCreatedNote }) => {
  const [create, { loading, error, data}] = useMutation(CREATE_NOTE)
  const formMethods = useForm()
  const { currentUser } = useAuth()

  const addNote = (data) => {
    if (data.message !== "") {
      create({ variables: { input: data } })
      formMethods.reset()
    }
  }

  useEffect(() => {
    if (data && data.createNote) addCreatedNote(data.createNote)
  }, [data])

  return (
    <div className="bg-gray-50 px-4 py-6 sm:px-6">
      <div className="flex space-x-3">
        <div className="min-w-0 flex-1">
          <Form formMethods={formMethods} onSubmit={addNote}>
            <div>
              <label htmlFor="message" className="sr-only">Note</label>
              <TextAreaField id="message" name="message" rows="3" className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="Whats on your mind?"></TextAreaField>
            </div>
            <div>
              <NumberField type="hidden" name="id" transformValue={(val) => parseInt(val)} value={id} />
              <TextField type="hidden" name="author" value={`${currentUser.firstName} ${currentUser.lastName}`} />
              <TextField type="hidden" name="type" value="contract" />
              <NumberField type="hidden" name="userId" transformValue={(val) => parseInt(val)} value={currentUser.id} />
            </div>
            <div className="mt-3 flex items-end justify-end">
              <Submit className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                {loading? <Spinner /> : 'Add Note'}
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default NoteForm
