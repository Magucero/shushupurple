"use client";

import { useCart } from "./CartContext";

export default function AddToCar({
  nombre,
  img,
  precio,
  style,
  nameBoton,
}) {
  const { addProduct } = useCart();

  const handleClick = () => {
    addProduct({
      nombre,
      img,
      precio,
    });
  };

  return (
    <button
      onClick={handleClick}
      className={style}
    >
      {nameBoton}
    </button>
  );
}