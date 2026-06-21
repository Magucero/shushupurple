"use client"
import { useCart } from "./CartContext";
import Link from "next/link";


export default function Carritou() {
  const { getTotalProducts } = useCart();
  
    return (
        <button className="hover:text-white transition-colors relative">
          <Link href="/carrito">
          <span className="material-symbols-outlined">car</span>
          </Link>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 flex items-center justify-center font-bold">
            {getTotalProducts()}
          </span>
        </button>

);
}