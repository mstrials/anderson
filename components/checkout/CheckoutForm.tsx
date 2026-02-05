'use client';

import React, { useState } from 'react';

interface CheckoutFormProps {
  formData: {
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNo: string;
    businessAddress: string;
  };
  onChange: (field: string, value: string) => void;
  errors: {
    companyName?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    mobileNo?: string;
    businessAddress?: string;
  };
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4">
      <FormField
        label="Company Name"
        value={formData.companyName}
        onChange={(value) => onChange('companyName', value)}
        error={errors.companyName}
        required
      />
      <FormField
        label="First Name"
        value={formData.firstName}
        onChange={(value) => onChange('firstName', value)}
        error={errors.firstName}
        required
      />
      <FormField
        label="Last Name"
        value={formData.lastName}
        onChange={(value) => onChange('lastName', value)}
        error={errors.lastName}
        required
      />
      <FormField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => onChange('email', value)}
        error={errors.email}
        required
      />
      <FormField
        label="Mobile No."
        type="tel"
        value={formData.mobileNo}
        onChange={(value) => onChange('mobileNo', value)}
        error={errors.mobileNo}
        required
      />
      <FormField
        label="Your Registered Business Address"
        value={formData.businessAddress}
        onChange={(value) => onChange('businessAddress', value)}
        multiline
        error={errors.businessAddress}
        required
      />
    </div>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  error?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  multiline = false,
  error,
  required = false,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  const showError = touched && error;

  return (
    <div className="flex items-start gap-4">
      <label className="w-40 text-sm text-gray-700 text-right pt-2 flex-shrink-0">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex-1">
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent resize-none h-20 ${
              showError ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent ${
              showError ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        )}
        {showError && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
