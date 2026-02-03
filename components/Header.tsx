'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Header: React.FC = () => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <header className="bg-[#002a25] text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo/logo.png" 
            alt="Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation link in center */}
        <nav className="flex-1 flex justify-center">
          <Link 
            href="/plans" 
            className="text-white hover:text-gray-200 font-semibold transition-colors"
          >
            Membership Plans
          </Link>
        </nav>

        {/* Cart button on the right */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            {totalPrice > 0 && (
              <span className="font-semibold">
                {formatCurrency(totalPrice)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
