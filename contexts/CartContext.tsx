'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  productId: number;
  productName: string;
  monthlyPrice: number;
  billingType: 'monthly' | 'annual';
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    // Only one membership allowed at a time - always replace old with new
    setCartItems([item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.monthlyPrice, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
