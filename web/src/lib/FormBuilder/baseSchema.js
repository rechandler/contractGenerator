export default [
  {
    current: true,
    pageName: 'Buyer Info',
    description: 'Standard buyer information',
    rows: [
      {
        type: 'text',
        fieldName: 'firstName',
        label: 'First Name',
      },
      {
        type: 'text',
        fieldName: 'lastName',
        label: 'Last Name',
      },
      {
        type: 'text',
        fieldName: 'address',
        label: 'Address',
      },
      {
        type: 'text',
        fieldName: 'city',
        label: 'City',
      },
      {
        type: 'text',
        fieldName: 'state',
        label: 'State',
      },
      {
        type: 'number',
        fieldName: 'zipcode',
        label: 'Zipcode',
      },
    ],
  },
]
