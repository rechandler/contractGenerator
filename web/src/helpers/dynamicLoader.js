export default (componentName) => {
  switch(componentName) {
    case 'mileage':
      return import ('../components/MileageForm/MileageForm');
    case 'contractSelection':
      return import ('../components/ContractSelection/ContractSelection');
    case 'buyerInformation':
      return import ('../components/BuyerInfo/BuyerInfo');
  }
}
