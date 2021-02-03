import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'

import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Provider } from 'react-redux'


import store from './store'

import Routes from 'src/Routes'

import './index.css'

const goTrue = new GoTrue({
  APIUrl: 'https://cocky-mayer-741fef.netlify.app/.netlify/identity',
  setCookie: true,
})

netlifyIdentity.init()
ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <Provider store={store}>
        <RedwoodProvider>
          <Routes />
        </RedwoodProvider>
      </Provider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
