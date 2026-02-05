'use client';

import React from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

interface PaymentDetailsSectionProps {
  onPayNow: () => void;
  disabled?: boolean;
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
  onPayNow,
  disabled = false,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Payment Details
        </label>
        <div className="border border-gray-300 rounded-lg p-4">
          <PaymentElement />
        </div>
      </div>
      <p className="text-xs text-gray-600 italic">
        By providing your card information, you allow Anderson Wembley Lawyers to charge your card for future payments in accordance with their terms.
      </p>
      <button
        onClick={onPayNow}
        disabled={disabled}
        className="w-full bg-[#002a25] text-white py-3 rounded-lg font-semibold hover:bg-[#003d35] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentDetailsSection;
