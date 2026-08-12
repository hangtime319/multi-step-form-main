import StepIndicator from "./StepIndicator";

const steps = [
  { number: 1, label: "Step 1", title: "Your info" },
  { number: 2, label: "Step 2", title: "Select plan" },
  { number: 3, label: "Step 3", title: "Add-ons" },
  { number: 4, label: "Step 4", title: "Summary" },
];

const Sidebar = ({ currentStep }) => {
  return (
    <aside className="flex items-start justify-center gap-4 bg-[url(../../images/bg-sidebar-mobile.svg)] bg-no-repeat bg-cover w-full h-40 pt-10 md:justify-start md:flex-col md:rounded-lg md:w-1/3 md:min-h-125 md:bg-[url(../../images/bg-sidebar-desktop.svg)] md:bg-center md:gap-6 md:px-6 md:pt-8">
      {steps.map((step) => {
        const isActive = step.number === currentStep;
        return <StepIndicator key={step.number} number={step.number} label={step.label} title={step.title} isActive={isActive} />;
      })}
    </aside>
  );
};

export default Sidebar;
