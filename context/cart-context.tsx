"use client";

import { Product } from "@/lib/products";
import { createContext, useEffect, useState } from "react";

type CartContextValue = {
  cart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (productId: number) => void;
  totalItems: number;
  updateQuantity: (productId: number, quantity: number) => void;
};

export type ProductInCart = {
  quantity: number;
  color: string;
  size: string;
} & Product;

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue
);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  // get cart from local storage
  const cartFromLocalStorage = localStorage.getItem("cart");

  const [cart, setCart] = useState<ProductInCart[]>(
    cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : []
  );

  const addToCart = (product: ProductInCart) => {
    // check if product already in cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // if product already in cart, increase quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
      return;
    } else {
      // if product not in cart, add product to cart
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalItems, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
