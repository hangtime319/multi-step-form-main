import { formatPrice } from "../../../utils/formatPrice";

const AddOnItem = ({ addOn, isChecked, billingCycle, onToggle }) => {
  return (
    <label className={`flex items-center justify-between border ${isChecked ? "border-blue-950 bg-blue-50" : "border-gray-300"} rounded-lg p-4 cursor-pointer hover:border-purple-600 transition-colors duration-200`} >
      <div className="flex gap-6">
        <input type="checkbox" className="m-auto h-6 w-6 md:h-4 md:w-4" value={addOn.id} checked={isChecked} onChange={onToggle}/>
        <div>
          <h3 className="text-blue-950 font-semibold">{addOn.name}</h3>
          <p className="text-sm text-gray-500">{addOn.description}</p>
        </div>
      </div>
      <span className="text-purple-600 text-sm font-medium">{`+${formatPrice(addOn, billingCycle)}`}</span>
    </label>
  );
};

export default AddOnItem;
