import { products } from "@/app/lib/productos";

// Heurística simple: un juego "exigente" (pide GPU dedicada en los requisitos)
// sugiere periféricos gamer de mayor gama. Cualquier juego sugiere siempre
// el combo base de setup (mouse + teclado + auriculares).
const GPUS_INTEGRADAS = ["intel hd", "intel uhd", "intel iris", "vega", "integrated"];

export function esJuegoExigente(requirementsText = "") {
  const texto = requirementsText.toLowerCase();
  const tieneGpuDedicada = /(nvidia|geforce|radeon|rtx|gtx|rx \d{3,4})/.test(texto);
  const soloIntegrada = GPUS_INTEGRADAS.some((g) => texto.includes(g)) && !tieneGpuDedicada;
  return tieneGpuDedicada && !soloIntegrada;
}

// Devuelve productos del catálogo sugeridos para armar/mejorar el setup
// según el juego elegido. Siempre incluye el combo base (mouse, teclado,
// auriculares) y si el juego es exigente prioriza esos primero.
export function getSuggestedProducts({ exigente }) {
  const base = products.filter((p) =>
    ["mouse", "teclado", "auriculares"].includes(p.category)
  );

  return [...base].sort((a, b) => {
    if (!exigente) return 0;
    // con juego exigente, prioriza productos de mayor precio (gama alta)
    return b.precio - a.precio;
  });
}