import { useState } from 'react'
import { navigate, Link, routes } from '@redwoodjs/router'
import ThreeColumnGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout';
import ThreeColSpanLayout from 'src/layouts/ThreeColSpanLayout/ThreeColSpanLayout';
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import Spinner from 'src/components/Spinner/Spinner';

const LoginPage = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { logIn } = useAuth()

  const onSubmit = async data => {
    setError(null)
    setLoading(true)
    try {
      await logIn({email: data.email, password: data.password, remember: true})
      navigate(routes.home())
    } catch (exception) {
      setError(exception.message)
    }
    setLoading(false)
  }

  return (
    <div className="bg-gradient-to-r from-light-blue-800 to-cyan-600">
      <ThreeColumnGridLayout>
        <ThreeColSpanLayout>
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white overflow-hidden shadow-xl rounded-lg h-3/5 w-full">
              <div className="max-w-3xl lg:max-w-7xl h-full">
                {/* <!-- Main 2 column grid --> */}
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 h-full">

                  <div className="flex items-center justify-center h-full bg-gradient-to-l from-light-blue-800 to-cyan-600">
                    {/* Left panel */}
                  </div>

                  <div className="flex items-center justify-center h-full">
                    <Form onSubmit={onSubmit} className="space-y-8 divide-y divide-gray-200 w-3/5">
                      {error && <p>{error}</p>}
                      <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Sign In
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">

                            </p> */}
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <TextField name="email" id="email" autoComplete="email" className="flex-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <PasswordField name="password" id="password" className="flex-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Submit className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                        {loading ? <Spinner /> : 'Go'}
                      </Submit>
                      <br />
                      <Link to={routes.signUp()}>Sign Up</Link>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ThreeColSpanLayout>
      </ThreeColumnGridLayout>
    </div>
  )
}

export default LoginPage
