'use client';

import React, { useState } from 'react';
import MembershipHeader from '@/components/cart/MembershipHeader';
import MembershipPlanDetails from '@/components/cart/MembershipPlanDetails';
import PaymentSummary from '@/components/cart/PaymentSummary';
import TermsAndConditions from '@/components/cart/TermsAndConditions';
import CheckoutButton from '@/components/cart/CheckoutButton';

const CartPage = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Placeholder prices - these will come from cart selection context in future
  const subtotal = 'PRICE';
  const gst = 'PRICE_GST';
  const total = 'PRICE_TOTAL';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4">
      <div className="w-full max-w-4xl bg-white overflow-hidden">
        <MembershipHeader />
        <MembershipPlanDetails />
        <PaymentSummary subtotal={subtotal} gst={gst} total={total} />
        <TermsAndConditions onAgreementChange={setTermsAgreed} />
        <CheckoutButton disabled={!termsAgreed} />
      </div>
    </div>
  );
};

export default CartPage;
