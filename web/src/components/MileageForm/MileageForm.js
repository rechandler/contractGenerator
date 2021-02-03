const MileageForm = () => {
  return (
    <form action="#" method="POST">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">Vehicle Mileage</label>
          <input type="number" name="mileage" id="mileage" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>
      </div>
    </form>
  )
}

export default MileageForm
