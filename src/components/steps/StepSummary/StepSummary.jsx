import SummaryItem from "./SummaryItem";
import { formatPrice } from "../../../utils/formatPrice";
import { addOns } from "../../../data/addOns.js";
import { plans } from "../../../data/plans.js";

const StepSummary = ({ billingCycle, selectedPlanId, selectedAddOnIds, goToStep }) => {
  const selectedPlan = plans.find((p) => p.id === selectedPlanId);
  
  const selectedAddOns = addOns.filter((addOn) => selectedAddOnIds.includes(addOn.id));
  
  const totalPrice = selectedAddOns.reduce((total, addOn) => total + (billingCycle === "yearly" ? addOn.priceYearly : addOn.priceMonthly), billingCycle === "yearly" ? selectedPlan.priceYearly : selectedPlan.priceMonthly);

  return (
    <article className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-blue-950">Finishing up</h2>
        <p className="text-sm text-gray-500">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="flex flex-col gap-4 bg-gray-50 rounded-md px-5 py-4 divide-y divide-gray-200">
        <div className="pb-5">
          <SummaryItem label={`${selectedPlan.name} (${billingCycle === "yearly" ? "Yearly" : "Monthly"}) `} price={formatPrice(selectedPlan, billingCycle)} showChangeLink={true} goToStep={goToStep} />
        </div>
        <div className="flex flex-col gap-4 text-sm">
          {selectedAddOns.map((addOn) => (
            <SummaryItem key={addOn.id} label={addOn.name} price={`+${formatPrice(addOn, billingCycle)}`} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-5">
        <p className="text-sm text-gray-400">{`Total (per ${billingCycle === "yearly" ? "year" : "month"})`}</p>
        <span className="text-blue-600 font-semibold">{`+$${totalPrice}/${billingCycle === "yearly" ? "yr" : "mo"}`}</span>
      </div>
    </article>
  );
};

export default StepSummary;
