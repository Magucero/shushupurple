"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("carrito")) || [];
    setCart(storedCart);
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem(
      "carrito",
      JSON.stringify(newCart)
    );
  };

  const addProduct = (product) => {
    const existing = cart.find(
      (p) => p.nombre === product.nombre
    );

    let newCart;

    if (existing) {
      newCart = cart.map((p) =>
        p.nombre === product.nombre
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      newCart = [
        ...cart,
        {
          nombre: product.nombre,
          img: product.img,
          precio: product.precio,
          quantity: 1,
        },
      ];
    }

    saveCart(newCart);
  };

  const removeProduct = (nombre) => {
    const existing = cart.find(
      (p) => p.nombre === nombre
    );

    if (!existing) return;

    let newCart;

    if (existing.quantity > 1) {
      newCart = cart.map((p) =>
        p.nombre === nombre
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );
    } else {
      newCart = cart.filter(
        (p) => p.nombre !== nombre
      );
    }

    saveCart(newCart);
  };

  const getTotalProducts = () => {
    return cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        getTotalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);