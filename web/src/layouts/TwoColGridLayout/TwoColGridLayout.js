const TwoColGridLayout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* <!-- Main 2 column grid --> */}
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2 lg:gap-8">
        {children}
      </div>
    </div>
  )
}

export default TwoColGridLayout
