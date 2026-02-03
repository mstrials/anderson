'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  productId: number;
  productName: string;
  monthlyPrice: number;
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
    setCartItems((prevItems) => {
      // Check if item already exists, if so replace it (only one membership at a time)
      const existingIndex = prevItems.findIndex((i) => i.productId === item.productId);
      if (existingIndex >= 0) {
        const newItems = [...prevItems];
        newItems[existingIndex] = item;
        return newItems;
      }
      return [...prevItems, item];
    });
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
