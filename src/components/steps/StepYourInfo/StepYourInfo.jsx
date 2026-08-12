const StepYourInfo = ({ userInfo, handleUserInfoChange, errorInfo }) => {
  return (
    <article className="flex flex-col gap-4 p-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-blue-950">Personal Info</h2>
        <p className="text-sm text-gray-500">Please provide your name,email address and phone number.</p>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            {errorInfo.name && <span className="text-red-500 text-sm font-medium">{errorInfo.name}</span>}
          </div>
          <input
            type="text"
            id="name"
            className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errorInfo.name ? "border-red-500" : ""}`}
            placeholder="e.g., Stephen King"
            value={userInfo.name}
            onChange={(e) => handleUserInfoChange("name", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            {errorInfo.email && <span className="text-red-500 text-sm font-medium">{errorInfo.email}</span>}
          </div>
          <input type="email" id="email" className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errorInfo.email ? "border-red-500" : ""}`} placeholder="e.g., stephenking@lorem.com" value={userInfo.email} onChange={(e) => handleUserInfoChange("email", e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            {errorInfo.phone && <span className="text-red-500 text-sm font-medium">{errorInfo.phone}</span>}
          </div>
          <input type="tel" id="phone" className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errorInfo.phone ? "border-red-500" : ""}`} placeholder="e.g., +1 234 567 890" value={userInfo.phone} onChange={(e) => handleUserInfoChange("phone", e.target.value)} />
        </div>
      </form>
    </article>
  );
};

export default StepYourInfo;
