'use client';

import React from 'react';

interface PaymentDetailsSectionProps {
  formData: {
    cardNumber: string;
    expiryDate: string;
    securityCode: string;
    country: string;
  };
  onChange: (field: string, value: string) => void;
  onPayNow: () => void;
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
  formData,
  onChange,
  onPayNow,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Column 1 (50% width): Card Number and Country */}
      <div className="col-span-2 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => onChange('cardNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => onChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent"
          />
        </div>
      </div>

      {/* Column 2 (25% width): Expiry Date and Disclaimer */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            value={formData.expiryDate}
            onChange={(e) => onChange('expiryDate', e.target.value)}
            placeholder="MM/YY"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent"
          />
        </div>
        <p className="text-xs text-gray-600 italic">
          By providing your card information, you allow Anderson Wembley Lawyers to charge your card for future payments in accordance with their terms.
        </p>
      </div>

      {/* Column 3 (25% width): Security Code and Pay Now */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Security Code
          </label>
          <input
            type="text"
            value={formData.securityCode}
            onChange={(e) => onChange('securityCode', e.target.value)}
            placeholder="CVV"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent"
          />
        </div>
        <button
          onClick={onPayNow}
          className="w-full bg-[#002a25] text-white py-3 rounded-lg font-semibold hover:bg-[#003d35] transition-colors"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentDetailsSection;
