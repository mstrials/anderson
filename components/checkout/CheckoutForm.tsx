'use client';

import React from 'react';

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
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-4">
      <FormField
        label="Company Name"
        value={formData.companyName}
        onChange={(value) => onChange('companyName', value)}
      />
      <FormField
        label="First Name"
        value={formData.firstName}
        onChange={(value) => onChange('firstName', value)}
      />
      <FormField
        label="Last Name"
        value={formData.lastName}
        onChange={(value) => onChange('lastName', value)}
      />
      <FormField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => onChange('email', value)}
      />
      <FormField
        label="Mobile No."
        type="tel"
        value={formData.mobileNo}
        onChange={(value) => onChange('mobileNo', value)}
      />
      <FormField
        label="Your Registered Business Address"
        value={formData.businessAddress}
        onChange={(value) => onChange('businessAddress', value)}
        multiline
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
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  multiline = false,
}) => {
  return (
    <div className="flex items-start gap-4">
      <label className="w-40 text-sm text-gray-700 text-right pt-2 flex-shrink-0">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent resize-none h-20"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002a25] focus:border-transparent"
        />
      )}
    </div>
  );
};

export default CheckoutForm;
