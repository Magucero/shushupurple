import AddToCar from "@/app/componentes/AddToCar";
import Link from "next/link";
import { getProductById } from "@/app/lib/productos";

export default async function ProductDetalle({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return <div className="text-center text-2xl mt-20 text-[var(--on-surface)]">Producto no encontrado</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div>
          <img
            src={product.img}
            alt={product.nombre}
            className="w-full rounded-lg"
          />
        </div>

        {/* Información */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[var(--on-surface)]">{product.nombre}</h1>
          <p className="mb-4 text-[var(--on-surface-variant)]">{product.descripcion}</p>
          <p className="text-3xl font-bold mb-6 text-[var(--primary)]">${product.precio.toFixed(2)}</p>
          {/* eliminamos objetos duplicados */}
          <AddToCar
            nombre={product.nombre}
            img={product.img}
            precio={product.precio}
            style={"w-full bg-[var(--primary)] text-[var(--on-primary)] py-3 rounded-lg font-bold hover:bg-[var(--primary-dim)] transition-colors"}
            nameBoton={"Buy now"} />
        </div>
      </div>
    </div>
  );
}