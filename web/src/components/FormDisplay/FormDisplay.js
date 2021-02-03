const FormDisplay = () => {
  return (
    <form action="#" method="POST">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
          <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
          <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-4">
          <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" name="phone_number" id="phone_number" autoComplete="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6">
          <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
          <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" name="city" id="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
          <input type="text" name="state" id="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
          <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
        </div>
      </div>
    {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button type="submit" className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" >
        Save
      </button>
    </div> */}
    </form>


  )
}

export default FormDisplay
