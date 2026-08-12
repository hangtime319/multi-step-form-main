const StepIndicator = ({ number, label, title, isActive }) => {
  return (
    <div className="flex items-center gap-4">
      <span className={`flex items-center justify-center shrink-0 size-9  rounded-full font-semibold md:size-10 ${isActive ? "bg-blue-200 text-blue-950" : "border border-white text-white"}`}>{number}</span>
      <div className="hidden md:flex md:flex-col">
        <span className="text-gray-400 uppercase">{label}</span>
        <p className="text-blue-50 tracking-wide font-semibold uppercase ">{title}</p>
      </div>
    </div>
  );
};

export default StepIndicator;
