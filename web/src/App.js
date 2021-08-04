import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'

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
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
        {/* </PersistGate> */}
      </Provider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
