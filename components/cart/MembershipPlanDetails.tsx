import React from 'react';

interface MembershipPlanDetailsProps {
  productName: string;
  billingType: 'monthly' | 'annual';
  price: number;
}

const MembershipPlanDetails: React.FC<MembershipPlanDetailsProps> = ({ productName, billingType, price }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const billingTypeText = billingType === 'monthly' ? 'Monthly' : 'Annual';

  return (
    <div className="px-6 py-4 mb-6">
      <div className="grid grid-cols-3 gap-4 items-start">
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{productName || 'No membership selected'}</span>
          <span className="text-gray-600 text-sm mt-1 italic">{billingTypeText} Subscription</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full border-t border-dotted border-gray-400 mt-6"></div>
        </div>
        <div className="text-left ml-18 mt-4">
          <span className="text-gray-700 font-bold whitespace-nowrap">
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlanDetails;
