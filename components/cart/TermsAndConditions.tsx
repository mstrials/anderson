'use client';

import React, { useState } from 'react';
import { Checkbox } from '@headlessui/react';

interface TermsAndConditionsProps {
  onAgreementChange: (agreed: boolean) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onAgreementChange }) => {
  const [agreed, setAgreed] = useState(false);

  const handleChange = (checked: boolean) => {
    setAgreed(checked);
    onAgreementChange(checked);
  };

  return (
    <div className="px-6 py-4">
      <Checkbox
        checked={agreed}
        onChange={handleChange}
        className="group flex items-center gap-3 cursor-pointer"
      >
         {({ checked }: { checked: boolean }) => (
          <>
            <div
              className={`w-10 h-10 border-2 rounded flex items-center justify-center transition-colors ${
                checked
                  ? 'bg-[#002a25] border-[#002a25]'
                  : 'border-gray-400 bg-white group-hover:border-[#002a25]'
              }`}
            >
              {checked && (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-gray-700 font-bold">
              I have read and agree to the Terms & Conditions of this membership.
            </span>
          </>
        )}
      </Checkbox>
    </div>
  );
};

export default TermsAndConditions;
