import PlanCard from "./PlanCard";
import BillingToggle from "./BillingToggle";
import { plans } from "../../../data/plans.js";

const StepSelectPlan = ({ handleBillingToggle, billingCycle, selectedPlanId, setSelectedPlanId }) => {
  return (
    <article className="flex flex-col gap-4 p-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-blue-950">Select your plan</h2>
        <p className="text-sm text-gray-500">You have the option of monthly or yearly billing</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} isSelected={selectedPlanId === plan.id} onSelect={() => setSelectedPlanId(plan.id)} />
        ))}
      </div>
      <BillingToggle onToggle={handleBillingToggle} billingCycle={billingCycle} />
    </article>
  );
};

export default StepSelectPlan;
