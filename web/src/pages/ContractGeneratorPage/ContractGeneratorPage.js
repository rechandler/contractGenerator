import { lazy, Suspense, useState, useEffect} from 'react';
import VehicleInfo from 'src/components/VehicleInfo/VehicleInfo';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ThreeColGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout';
import OneColSpanLayout from 'src/layouts/OneColSpanLayout/OneColSpanLayout';
import TwoColSpanLayout from 'src/layouts/TwoColSpanLayout/TwoColSpanLayout';
import FormProgress from 'src/components/FormProgress/FormProgress';
import dynamicImporter from 'src/helpers/dynamicLoader'

const ContractGeneratorPage = () => {

  const formJson = [
    {
      id: 123,
      header: 'Mileage',
      subHeader: 'Provide the current vehicle mileage',
      component: 'mileage'
    },
    {
      id: 321,
      header: 'Contract Selection',
      subHeader: 'View contract details and select one',
      component: 'contractSelection'
    },
    {
      id: 234,
      header: 'Buyer Information',
      subHeader: 'Buyers current Name, Email, and Address',
      component: 'buyerInformation'
    }
  ]

  const [completed, setCompleted] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [dynamicComponent, setDynamicComponent] = useState();

  useEffect(() => {
    loadView(formJson[currentStep].component)
  }, [currentStep])

  const importView = component => {
    return lazy(() =>
      dynamicImporter(component)
    );
  }

  const loadView = async (componentName) => {
    const Component = await importView(componentName)
    setDynamicComponent(<Component />)
  }

  const handleContinue = () => {
    setCompleted([...completed, formJson[currentStep].id])

    if (currentStep + 1 < formJson.length) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep !== 0) setCurrentStep(currentStep - 1)
  }

  return (
    <MainLayout>
      <ThreeColGridLayout>
       <VehicleInfo />

        <OneColSpanLayout>
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h1>Progress</h1>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:p-6">
              <FormProgress completed={completed} currentStep={currentStep} setCurrentStep={setCurrentStep} formJson={formJson} />
            </div>
          </div>
        </OneColSpanLayout>

        <TwoColSpanLayout>
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h1>{formJson[currentStep].header}</h1>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:p-6">
              {/* <FormDisplay /> */}
              <Suspense fallback={<div>Loading...</div>}>
                {dynamicComponent}
              </Suspense>
            </div>

            <div className="flex space-x-4 apx-4 py-4 sm:px-6">
              <button onClick={handleBack} type="submit" className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" >
                Back
              </button>
              <button onClick={handleContinue} type="submit" className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" >
                Continue
              </button>
            </div>
          </div>
        </TwoColSpanLayout>

      </ThreeColGridLayout>
    </MainLayout>
  )
}

export default ContractGeneratorPage
