import { useState } from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import FormNavigation from "../layout/FormNavigation/FormNavigation";
import StepSelectPlan from "../steps/StepSelectPlan/StepSelectPlan";
import StepAddOns from "../steps/StepAddOns/StepAddOns";
import StepSummary from "../steps/StepSummary/StepSummary";
import StepYourInfo from "../steps/StepYourInfo/StepYourInfo";
import ThankYouScreen from "../steps/ThankYouScreen/ThankYouScreen";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState("arcade");
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errorInfo, setErrorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleUserInfoChange = (field, value) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const errorMessage = !value ? "This field is required" : field === "email" && !isValidEmail ? "Please enter a valid email" : "";
    setUserInfo((prev) => ({ ...prev, [field]: value }));
    setErrorInfo((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const validateUserInfo = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
    const errors = {
      name: !userInfo.name ? "This field is required" : "",
      email: !userInfo.email ? "This field is required" : !isValidEmail ? "Please enter a valid email" : "",
      phone: !userInfo.phone ? "This field is required" : "",
    };
    setErrorInfo(errors);
    return errors;
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      const errors = validateUserInfo();
      let isValid = Object.values(errors).every((error) => error === "");
      if (isValid) {
        return goToNextStep();
      }
    } else {
      return goToNextStep();
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleBillingToggle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const toggleAddOn = (id) => {
    setSelectedAddOnIds((prev) => (prev.includes(id) ? prev.filter((addOnId) => addOnId !== id) : [...prev, id]));
  };

  let stepComponents = {
    1: <StepYourInfo userInfo={userInfo} handleUserInfoChange={handleUserInfoChange} errorInfo={errorInfo} />,
    2: <StepSelectPlan handleBillingToggle={handleBillingToggle} billingCycle={billingCycle} setSelectedPlanId={setSelectedPlanId} selectedPlanId={selectedPlanId} />,
    3: <StepAddOns billingCycle={billingCycle} onToggle={toggleAddOn} selectedAddOnIds={selectedAddOnIds} />,
    4: <StepSummary billingCycle={billingCycle} selectedPlanId={selectedPlanId} selectedAddOnIds={selectedAddOnIds} goToStep={goToStep} />,
    5: <ThankYouScreen />,
  };
  const isLastStep = currentStep === 4;

  return (
    <section className="md:bg-white md:rounded-lg md:drop-shadow-sm shadow-gray-500 flex flex-col justify-between md:justify-start md:flex-row md:p-3 w-full md:max-w-3xl min-h-screen md:min-h-0">
      <div className="flex flex-col md:flex-row md:flex-1">
        <Sidebar currentStep={currentStep} />

        <div className="bg-white rounded-lg drop-shadow-sm -mt-14 flex flex-col flex-1 justify-between py-6 px-3 md:px-8 md:pt-8 mx-5 h-auto md:bg-transparent md:rounded-none md:shadow-none md:mt-0">
          {stepComponents[currentStep]}
          <div className="hidden md:block">{currentStep < 5 && <FormNavigation handleNextStep={handleNextStep} goToPreviousStep={goToPreviousStep} isLastStep={isLastStep} showGoBack={currentStep > 1} />}</div>
        </div>
      </div>

      <div className="md:hidden block bg-white w-full md:bg-transparent">{currentStep < 5 && <FormNavigation handleNextStep={handleNextStep} goToPreviousStep={goToPreviousStep} isLastStep={isLastStep} showGoBack={currentStep > 1} />}</div>
    </section>
  );
};

export default MultiStepForm;
