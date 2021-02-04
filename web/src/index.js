import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'


import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Provider } from 'react-redux'


import store from './store'

import Routes from 'src/Routes'

import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: 'https://cocky-mayer-741fef.netlify.app/.netlify/identity',
  setCookie: true,
})

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={goTrueClient} type="goTrue">
      <Provider store={store}>
        <RedwoodProvider>
          <Routes />
        </RedwoodProvider>
      </Provider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
