'use client';

import React, { useState } from 'react';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import PaymentDetailsSection from '@/components/checkout/PaymentDetailsSection';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    businessAddress: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    country: '',
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePayNow = () => {
    // TODO: Implement payment processing
    console.log('Processing payment with:', { ...formData, ...paymentData });
  };

  // Placeholder prices - these will come from cart selection context in future
  const planName = 'PLAN_NAME';
  const planPrice = 'PRICE';
  const subtotal = 'SUBTOTAL';
  const gst = 'PRICE_GST';
  const total = 'PRICE_TOTAL';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4">
      <div className="w-full max-w-5xl bg-white overflow-hidden">
        <CheckoutHeader />
        
        {/* Two Column Layout - Form and Order Summary */}
        <div className="grid grid-cols-2 gap-12 p-6">
          {/* Left Column - Personal Details Form */}
          <div className="flex flex-col">
            <CheckoutForm formData={formData} onChange={handleFormChange} />
          </div>

          {/* Right Column - Order Summary */}
          <div className="flex flex-col h-full">
            <OrderSummary
              planName={planName}
              planPrice={planPrice}
              subtotal={subtotal}
              gst={gst}
              total={total}
            />
          </div>
        </div>

        {/* Full Width - Payment Details Section */}
        <div className="px-6 pb-6">
          <PaymentDetailsSection
            formData={paymentData}
            onChange={handlePaymentChange}
            onPayNow={handlePayNow}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
