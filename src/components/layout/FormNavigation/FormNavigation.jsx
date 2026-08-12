const FormNavigation = ({ handleNextStep, goToPreviousStep, isLastStep, showGoBack }) => {
  return (
    <nav className='flex items-center justify-between px-4 py-4 md:px-2 md:py-0'>
        {showGoBack && (
          <button type='button' className='text-gray-500 font-medium cursor-pointer hover:text-blue-950 transition-colors duration-200' onClick={goToPreviousStep}>
            Go Back
          </button>
        )}
        <button type='button' className={` text-white rounded-md px-6 py-3 cursor-pointer ml-auto transition-colors duration-200 ${isLastStep ? 'bg-blue-700 hover:bg-blue-500' : 'bg-blue-950 hover:bg-blue-900'}`} onClick={handleNextStep}>
          {isLastStep ? 'Confirm' : 'Next Step'}
        </button>
    </nav>
  )
}

export default FormNavigation;