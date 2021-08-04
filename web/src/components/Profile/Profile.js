import { useEffect, useState } from 'react'
import { Form, TextField, FileField, Submit } from '@redwoodjs/forms'
import { useLazyQuery } from '@apollo/client'

const GET_SIGNED_URL = gql`
  query GetSignedUrl($filename: String!) {
    getSignedUrl(filename: $filename) {
      signedUrl
    }
  }
`

const Profile = ({ currentUser }) => {
  const [fileToUpload, setFileToUpload] = useState()

  const [fetchSignedUrl, { loading, data }] = useLazyQuery(GET_SIGNED_URL, {
    fetchPolicy: 'no-cache',
  })

  const submitForm = (data) => {
    console.log(data)
  }

  const getSignedUrl = (event) => {
    const file = event.target.files[0]
    const filename = file.name
    setFileToUpload(file)
    fetchSignedUrl({ variables: { filename: filename } })
  }

  useEffect(() => {
    if (data) {
      const { getSignedUrl } = data
      // fetch(getSignedUrl.signedUrl, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'image/png'
      //   },
      //   body: fileToUpload
      // })
      const xhr = new XMLHttpRequest()

      xhr.open('PUT', getSignedUrl.signedUrl, true)
      xhr.setRequestHeader('Content-Type', 'image/png')
      xhr.send(fileToUpload)
      // try {
      //   fetch(getSignedUrl.signedUrl, {
      //       method: 'POST',
      //       headers: {
      //         "Content-Type": "image/png",
      //       },
      //       mode: 'no-cors',
      //       body: fileToUpload
      //     }).then(response => {
      //       console.log(response)
      //     })
      // } catch (exception) {
      //   console.error(exception)
      // }
    }
  }, [data])

  return (
    <div className="space-y-6">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form className="space-y-6" onSubmit={submitForm}>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <TextField
                      name="firstName"
                      id="firstName"
                      value={currentUser.firstName}
                      className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <TextField
                      name="lastName"
                      id="lastName"
                      value={currentUser.lastName}
                      className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <TextField
                      name="email"
                      id="email"
                      value={currentUser.email}
                      className="focus:ring-cyan-500 focus:border-cyan-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                      placeholder="email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 flex items-center space-x-5">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <label
                    htmlFor="profilePicUpload"
                    className="relative cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span>Change Profile Pic</span>
                    <FileField
                      onChange={getSignedUrl}
                      id="profilePicUpload"
                      name="profilePicUpload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">

                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Submit className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  Save
                </Submit>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
