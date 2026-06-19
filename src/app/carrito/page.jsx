"use client";

import { useEffect, useState } from "react";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(productos);
  }, []);

  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce(
    (acc, producto) => acc + Number(producto.precio),
    0
  );

  return (
    <main className="min-h-screen bg-[var(--surface)] p-8">
      <h1 className="text-5xl font-black mb-10 text-[var(--primary)]">
        Mi Carrito
      </h1>

      <div className="grid gap-6">
        {carrito.map((producto, index) => (
          <div
            key={index}
            className="bg-[var(--surface-container-high)] border border-[var(--outline)]/20 hover:border-[var(--primary)]/30 transition-all duration-300 p-5 flex items-center justify-between"
          >
            <div className="flex gap-5 items-center">
              <img
                src={producto.img}
                alt={producto.nombre}
                className="w-24 h-24 object-cover"
              />

              <div>
                <h2 className="font-bold text-xl">{producto.nombre}</h2>
                <p className="text-[var(--on-surface-variant)]">
                  Producto seleccionado
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-2xl font-black text-[var(--primary)]">
                ${producto.precio}
              </span>

              <button
                onClick={() => eliminarProducto(index)}
                className="bg-red-500/20 border border-red-500/30 px-4 py-2 hover:bg-red-500/30 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[var(--surface-container-high)] p-6 border border-[var(--primary)]/20">
        <div className="flex justify-between items-center">
          <span className="text-xl">Total</span>

          <span className="text-4xl font-black text-[var(--primary)]">
            ${total}
          </span>
        </div>

        <button className="mt-6 w-full bg-[var(--primary)] text-[var(--on-primary)] py-4 font-bold tracking-wider uppercase hover:opacity-90 transition-opacity">
          Finalizar compra
        </button>
      </div>
    </main>
  );
}