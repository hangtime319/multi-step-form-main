const SummaryItem = ({ label, price, showChangeLink, goToStep }) => {
  return (
    
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`flex font-medium ${showChangeLink ? 'text-blue-950' : 'text-gray-500'}`}>{label}</h3>
          {showChangeLink && (
            <button className="text-sm text-gray-400 underline decoration-2 cursor-pointer" onClick={() => goToStep(2)}>
              Change
            </button>
          )}
        </div>
        <span className={`${showChangeLink ? 'text-blue-950 font-semibold' : ' font-medium'}`}>{price}</span>
      </div>
      
  );
};

export default SummaryItem;
