const FormProgress = ({
  currentStep,
  setCurrentStep,
  completed,
  formJson
}) => {

  const getStepStatus = (formElement, idx) => {
    if (completed.indexOf(formElement.id) > -1) return completedDot();
    if (idx === currentStep) return currentDot();
    return notCompleted();
  }

  const currentDot = () => {
    return (
      <span className="h-9 flex items-center" aria-hidden="true">
        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-cyan-600 rounded-full">
          <span className="h-2.5 w-2.5 bg-cyan-600 rounded-full"></span>
        </span>
      </span>
    )
  }

  const completedDot = () => {
    return (
      <span className="h-9 flex items-center">
        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-cyan-600 rounded-full group-hover:bg-cyan-800">
          <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      </span>
    )
  }

  const notCompleted = () => {
    return (
      <span className="h-9 flex items-center" aria-hidden="true">
        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
        </span>
      </span>
    )
  }

  const isLastElement = idx => {
    return idx + 1 === formJson.length
  }

  return (
    <ol className="overflow-hidden">
      {
        formJson.map((formElement, idx) => {
          return (
            <li key={idx} className={`relative ${!isLastElement(idx) ? 'pb-10' : ''}`}>
              {
               !isLastElement(idx)  && <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-cyan-600" aria-hidden="true"></div>
              }
              <a onClick={() => setCurrentStep(idx)} className="relative flex items-start group">
                {getStepStatus(formElement, idx)}
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide">{formElement.header}</span>
                  <span className="text-sm text-gray-500">{formElement.subHeader}</span>
                </span>
              </a>
            </li>
          )
        })
      }
    </ol>
  )
}

export default FormProgress
