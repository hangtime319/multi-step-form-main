import { formatPrice } from "../../../utils/formatPrice";

const PlanCard = ({ plan, billingCycle, isSelected, onSelect }) => {
  return (
    <div className={`flex md:flex-col gap-4 md:gap-8 items-center md:items-start md:justify-between border ${isSelected ? "border-blue-950 bg-blue-50" : "border-gray-300"} rounded-lg p-3 cursor-pointer hover:border-purple-600 transition-colors duration-200`} onClick={onSelect}>
      <img src={plan.icon} alt={plan.name} className="md:w-6 md:h-6" />
      <div className="flex flex-col gap-1">
        <h3 className="text-blue-950 font-semibold">{plan.name}</h3>
        <span className="text-sm text-gray-500">{formatPrice(plan, billingCycle)}</span>
        {billingCycle === "yearly" && <span className="text-xs text-blue-950 font-medium">2 months free</span>}
      </div>
    </div>
  );
};

export default PlanCard;
