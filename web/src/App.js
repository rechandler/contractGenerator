import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Provider } from 'react-redux'


import store from './store'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: 'https://m2m-contract.netlify.app/.netlify/identity',
  setCookie: false,
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={goTrueClient} type="goTrue">
      <Provider store={store}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </Provider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
