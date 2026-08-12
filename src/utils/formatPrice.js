export const formatPrice = (item, billingCycle) => {

    if (billingCycle !== "monthly" && billingCycle !== "yearly") {
        throw new Error("Billing Cycle not found!");        
    }
    
     return billingCycle === "monthly" ? `$${item.priceMonthly}/mo` : `$${item.priceYearly}/yr`;

}