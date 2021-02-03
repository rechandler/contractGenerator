import LargeHeader from 'src/components/LargeHeader/LargeHeader';
import Footer from 'src/components/Footer/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <LargeHeader />
      <main className="-mt-24 pb-8 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
