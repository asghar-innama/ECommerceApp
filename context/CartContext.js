import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then(data => {
      if (data) setCartItems(JSON.parse(data));
    });
  }, []);

  const addToCart = item => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
