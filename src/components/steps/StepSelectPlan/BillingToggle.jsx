const BillingToggle = ({ billingCycle, onToggle }) => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 rounded-md py-3">
      <label className="flex items-center gap-2 relative cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={billingCycle === "yearly"} onChange={onToggle} aria-label="Toggle between monthly and yearly billing"/>
        <div className="flex justify-start w-9 p-1 rounded-full bg-blue-950 peer-checked:justify-end absolute left-17">
          <span className="size-3 bg-gray-50 text-gray-500 rounded-full "></span>
        </div>
        <span className="text-sm font-medium peer-checked:text-gray-500 text-blue-950 mr-7">Monthly</span>        
        <span className="text-sm font-medium text-gray-500 peer-checked:text-blue-950 ml-7">Yearly</span>
      </label>
    </div>
  );
};

export default BillingToggle;
