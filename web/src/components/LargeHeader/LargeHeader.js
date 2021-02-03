import { useState } from 'react';
import { NavLink, routes } from '@redwoodjs/router';
import VinSearch from 'src/components/VinSearch/VinSearch';
import { useAuth } from '@redwoodjs/auth'

const LargeHeader = () => {
  const [userDropdownOpen, setUserDropdown] = useState(false)
  const { logIn } = useAuth()

  return (
    <header className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
          <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
            <a href="#">
              <span className="sr-only">Workflow</span>
              {/* <!-- https://tailwindui.com/img/logos/workflow-mark-cyan-200.svg --> */}
              <svg className="h-8 w-auto" fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A5F3FC" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z" />
              </svg>
            </a>
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
            <button type="button" className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: bell --> */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="ml-4 relative flex-shrink-0">
              <div>
                <button type="button" onClick={() => setUserDropdown(!userDropdownOpen)} className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                </button>
              </div>
              <div className={`${userDropdownOpen ? 'transform opacity-100 scale-100 block' : 'transform opacity-0 scale-95 hidden' } transition ease-in duration-75 origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                <a onClick={logIn} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign in</a>
              </div>
            </div>
          </div>
          <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              {/* <!-- Left nav --> */}
              <div className="hidden lg:block lg:col-span-2">
                <nav className="flex space-x-4 text-cyan-100">
                  <NavLink to={routes.home()} activeClassName="text-white" className="text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                    Home
                  </NavLink>

                  <NavLink to={routes.contracts()} activeClassName="text-white" className="text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10">
                    Contracts
                  </NavLink>

                  <a href="#" className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" >
                    Claims
                  </a>

                  <a href="#" className="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" >
                    Contract Setup
                  </a>
                </nav>
              </div>
              <div className="px-12 lg:px-0">
                {/* <!-- Search --> */}
                <VinSearch />
              </div>
            </div>
          </div>

          {/* <!-- Menu button --> */}
          <div className="absolute right-0 flex-shrink-0 lg:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden" aria-hidden="true"></div>

    </header>
  )
}

export default LargeHeader;
