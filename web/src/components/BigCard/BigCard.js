const BigCard = ({header, subHeader, children}) => {
  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="bg-gray-50 p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {header}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {subHeader}
        </p>
      </div>
      {children}
    </div>
  )
}

export default BigCard
