import { useState } from 'react';
import LargeHeader from 'src/components/LargeHeader/LargeHeader';
import Footer from 'src/components/Footer/Footer'
import SlideOver from 'src/components/SlideOver/SlideOver'

const MainLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => {
    setSidebarOpen(true)
    setSidebarVisible(true)
  }

  // This is a hack to make sure that our styles and transition work ok
  const closeSidebar = () => {
    setSidebarOpen(false)
    setTimeout(() => {
      setSidebarVisible(false)
    }, 500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div>
        <LargeHeader openSidebar={openSidebar} />
        <main className="-mt-24 pb-8 flex-grow" >
          {children}
        </main>
        <SlideOver showSidebar={sidebarVisible} isOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
