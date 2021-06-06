import Footer from 'src/components/Footer/Footer'
import ThreeColGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout'
import ThreeColSpanLayout from 'src/layouts/ThreeColSpanLayout/ThreeColSpanLayout'

const SecondaryLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"></div>
            <div className="w-full py-10"></div>
          </div>
        </div>
        <div className="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden" aria-hidden="true"></div>
        <h1 className="text-3xl font-bold text-white ml-52">
          {title}
        </h1>

      </header>
      <main className="-mt-20 pb-8 flex-grow">
        <ThreeColGridLayout>
          <ThreeColSpanLayout>
            {children}
          </ThreeColSpanLayout>
        </ThreeColGridLayout>
      </main>

      <Footer />
    </div>
  )
}

export default SecondaryLayout
