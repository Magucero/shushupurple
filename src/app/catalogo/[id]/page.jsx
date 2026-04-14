import Link from "next/link";



const products = {
  1: {
    id: 1,
    nombre: "NEON_STRIKE TKL",
    descripcion: "Custom haptic switches with modular CNC aluminum chassis and OLED display.",
    precio: 189.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWMzrBcD2x3fHzLTiarmcZcq8mNFBBOkhDZ4e40ZWMG24qnEdaK13IUXGwUachIEkNIMRuPPo9ZjaF6T0p19mOCFjdsCImsGjAufkvHS7kS2YRcTf1HtZoQqeoO8Yeizu9pKP3PrxCrmHpabq_toJ6Y6uZ0GHZnxO4SRGtEKjO4Ru9mXjfZMj0oLvlczCQOAHx64c13Exr0suev96M21gqvudXbACyp3MURzHrbGu37IdJtqkbTJXOtD1aouzP_SWszvAcpYMpDog"
  },
  2: {
    id: 2,
    nombre: "CYBER_REI V2.0",
    descripcion: "1/7 scale statue with integrated LED ambient lighting and interchangeable armor sets.",
    precio: 245.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClBwONPWY92rSbpK8MZoDVSzz7m7TtTbOhKtVdX4M2OL57SnkyfGIpqVExTR5MfvyzCm7LhS91-myRu9P2xk_csoquqNRJzznxsoZ0z3fmyhCGxko3spFwQKvboUHp9ygqd6dbrHlOC4g33Q4TgtKz_Vub_FtK3K5Xriwohs3mCPTxidqURxciOYapgpWzSgiM665z5C6TjWhJCuDvs04z6NlFwPXNYd5yQhHeYC2QGMEgKW6WRcoFD5ejbSe-EECDsg0n9hBUHYA"
  },
  3: {
    id: 3,
    nombre: "GHOST_FRAME PRO",
    descripcion: "Transparent shell handheld with IPS display and custom retro emulation kernel.",
    precio: 120.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Yq0AjnzS4riCJhoSi-VmEC_rQKZNgNsGvSRstd9kft_6ldF9YLkPGdip4o0qIm9nZ1o4cNaaYCJERj313VW8ux47hmp7R_YQhFA8fnPmjNYoZXDM-fHqTH-gl-ruP14AbqE1aRFWiYYJeVGj8xk6CxdLTIGg28XNXaFRxp0ym8wtXzMycUO2Xh63KI-ibTbJFGD3-Kp8c4GGF1HC1hPTaZ4UiYIG2Zx_K8BXylHHUz-1BmMb_Ozo1YWOJJAYStrT6Q1eE3BpR0"
  },
  4: {
    id: 4,
    nombre: "VOID_GLIDE X",
    descripcion: "45g ultralight wireless mouse with 26k DPI optical sensor and PTFE feet.",
    precio: 159.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgdvGgBofDJrNytGZ8E8kXe_duNP9zaNX-605FXshP4b8YjhFQay6xrbjRFVwGDTemPJdwBo-_QcpvHC3c5MafNUp4PpuiAfbC8ziIfwfafBX6hZQNMr25Bmd_jaZknIAh9o96F017G4uJ1FOQzUMcBzUZOf6oHDoHzmzrbyYVanzQKUATUizelTV-mpwlkJQkM0cVBqFMKb5nQfe6Jif2FVfWQnuAVtqhPuxeNZL38PilwfteKc8YT_EK7zQMP8va9CebwUUwALg"
  },
  5: {
    id: 5,
    nombre: "MONOLITH HOODIE",
    descripcion: "Heavyweight cotton with reflective thermal prints and modular tech-straps.",
    precio: 85.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPah5yZXOqyVrVzFDxFGzgGb7LcdfA22OMJS_qBmGd-8PmfcYn7kMz9Y6RsdK-u9DrHcaSX1SmmRj4uNQ3l1nxA5J96YCvgvSaxf_wPvPgTlPCx-z6Nzir_FU3X-E_Sb-FtDKL6bf6Q5e9RJTYL1ar7U4PCvDBnCm_yu8uI3YZF4Zbjd-gTe9rkKMcEkQ_CTlyhqi2Qq86HY7FMiAvErOLD4ptT1uUT-bdaGa8-hK4YATcjqG-UOdlunSAWUCqDaYchK-bi2lIqg"
  },
  6: {
    id: 6,
    nombre: "SONIC_VOID PRO",
    descripcion: "Planar magnetic drivers with active noise cancellation and spatial audio tech.",
    precio: 320.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDehugbkTEoR5CB-pv1k8rKnGxru_zt1Fsi0vSwF9yzNfuCGUM5PD5wjyU0XLqzQWHlix3KK2a_zSr2TPvr_fcAdfvBAicpX-mCIvnwyEdLTRKO6h5NyY3sHJnlxpMyyKBZ0PinlP7PhbsHZjrSxEca1jpeIhTeauIoU6PuO90OBbmj9gUQ4biST5lZk_qdlzzDo9ST_ljksLLcrHSYTEMIcTVGVqyMMl58mWXqYEaPmnjUirotLEGwGGiphyn2RAUhYqPZYXoa1TU"
  }
};

export default async function ProductDetalle({ params }) {
  const { id } = await params;
  const product = products[id];

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
          
          <button className="w-full bg-[var(--primary)] text-[var(--on-primary)] py-3 rounded-lg font-bold hover:bg-[var(--primary-dim)] transition-colors">
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}