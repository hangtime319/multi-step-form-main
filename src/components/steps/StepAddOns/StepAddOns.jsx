import AddOnItem from "./AddOnItem";
import { addOns } from "../../../data/addOns.js";

const StepAddOns = ({ billingCycle, selectedAddOnIds, onToggle }) => {
  return (
    <article className="flex flex-col gap-4 p-2 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-blue-950">Pick add-ons</h2>
        <p className="text-sm text-gray-500">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        {addOns.map((addOn) => (
          <AddOnItem key={addOn.id} addOn={addOn} isChecked={selectedAddOnIds.includes(addOn.id)} billingCycle={billingCycle} onToggle={() => onToggle(addOn.id)} />
        ))}
      </div>
    </article>
  );
};

export default StepAddOns;
