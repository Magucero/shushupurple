import Link from "next/link";

export default function Catalogo() {
  return (
    <>
        <section className="flex-1 p-8">
          {/* Dynamic Sorting Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-[var(--secondary)] font-bold uppercase mb-2 block">DISCOVER</span>
              <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
                Catalog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)]">01A</span>
              </h1>
            </div>
            <div className="flex items-center gap-8 border-b border-[var(--outline-variant)]/30 pb-2 w-full md:w-auto">
              <span className="font-label text-xs tracking-widest text-[var(--on-surface-variant)] uppercase">SORT BY:</span>
              <select className="bg-transparent border-none font-label text-xs tracking-widest uppercase text-[var(--primary)] focus:ring-0 cursor-pointer py-0">
                <option>NEWEST RELEASES</option>
                <option>PRICE: LOW TO HIGH</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>POPULARITY</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="catalogo/1">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--primary)]/0 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Mechanical Keyboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMzrBcD2x3fHzLTiarmcZcq8mNFBBOkhDZ4e40ZWMG24qnEdaK13IUXGwUachIEkNIMRuPPo9ZjaF6T0p19mOCFjdsCImsGjAufkvHS7kS2YRcTf1HtZoQqeoO8Yeizu9pKP3PrxCrmHpabq_toJ6Y6uZ0GHZnxO4SRGtEKjO4Ru9mXjfZMj0oLvlczCQOAHx64c13Exr0suev96M21gqvudXbACyp3MURzHrbGu37IdJtqkbTJXOtD1aouzP_SWszvAcpYMpDog"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--secondary)] text-[var(--on-secondary)] px-3 py-1 font-label text-[10px] tracking-widest uppercase">BESTSELLER</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--primary)] transition-colors">NEON_STRIKE TKL</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">4.9</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">Custom haptic switches with modular CNC aluminum chassis and OLED display.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--primary)]">$189.00</span>
                  <button className="bg-[var(--primary)] text-[var(--on-primary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>

            {/* Card 2 */}
            <Link href="catalogo/2">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--secondary)]/0 group-hover:border-[var(--secondary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Anime Figure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClBwONPWY92rSbpK8MZoDVSzz7m7TtTbOhKtVdX4M2OL57SnkyfGIpqVExTR5MfvyzCm7LhS91-myRu9P2xk_csoquqNRJzznxsoZ0z3fmyhCGxko3spFwQKvboUHp9ygqd6dbrHlOC4g33Q4TgtKz_Vub_FtK3K5Xriwohs3mCPTxidqURxciOYapgpWzSgiM665z5C6TjWhJCuDvs04z6NlFwPXNYd5yQhHeYC2QGMEgKW6WRcoFD5ejbSe-EECDsg0n9hBUHYA"/>
                <div className="absolute top-4 right-4">
                  <span className="bg-[var(--surface-container-lowest)]/80 backdrop-blur-md border border-[var(--tertiary)]/30 text-[var(--tertiary)] px-3 py-1 font-label text-[10px] tracking-widest uppercase">LIMITED</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--secondary)] transition-colors">CYBER_REI V2.0</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">5.0</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">1/7 scale statue with integrated LED ambient lighting and interchangeable armor sets.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--secondary)]">$245.00</span>
                  <button className="bg-[var(--secondary)] text-[var(--on-secondary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">shopping_bag</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>

            {/* Card 3 */}
            <Link href="catalogo/3">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--primary)]/0 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Retro Console" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Yq0AjnzS4riCJhoSi-VmEC_rQKZNgNsGvSRstd9kft_6ldF9YLkPGdip4o0qIm9nZ1o4cNaaYCJERj313VW8ux47hmp7R_YQhFA8fnPmjNYoZXDM-fHqTH-gl-ruP14AbqE1aRFWiYYJeVGj8xk6CxdLTIGg28XNXaFRxp0ym8wtXzMycUO2Xh63KI-ibTbJFGD3-Kp8c4GGF1HC1hPTaZ4UiYIG2Zx_K8BXylHHUz-1BmMb_Ozo1YWOJJAYStrT6Q1eE3BpR0"/>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--primary)] transition-colors">GHOST_FRAME PRO</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">4.7</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">Transparent shell handheld with IPS display and custom retro emulation kernel.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--primary)]">$120.00</span>
                  <button className="bg-[var(--primary)] text-[var(--on-primary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 4 */}
            <Link href="catalogo/4">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--primary)]/0 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Gaming Mouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgdvGgBofDJrNytGZ8E8kXe_duNP9zaNX-605FXshP4b8YjhFQay6xrbjRFVwGDTemPJdwBo-_QcpvHC3c5MafNUp4PpuiAfbC8ziIfwfafBX6hZQNMr25Bmd_jaZknIAh9o96F017G4uJ1FOQzUMcBzUZOf6oHDoHzmzrbyYVanzQKUATUizelTV-mpwlkJQkM0cVBqFMKb5nQfe6Jif2FVfWQnuAVtqhPuxeNZL38PilwfteKc8YT_EK7zQMP8va9CebwUUwALg"/>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--primary)] transition-colors">VOID_GLIDE X</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">4.8</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">45g ultralight wireless mouse with 26k DPI optical sensor and PTFE feet.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--primary)]">$159.00</span>
                  <button className="bg-[var(--primary)] text-[var(--on-primary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>

            {/* Card 5 */}
            <Link href="catalogo/5">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--secondary)]/0 group-hover:border-[var(--secondary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvPah5yZXOqyVrVzFDxFGzgGb7LcdfA22OMJS_qBmGd-8PmfcYn7kMz9Y6RsdK-u9DrHcaSX1SmmRj4uNQ3l1nxA5J96YCvgvSaxf_wPvPgTlPCx-z6Nzir_FU3X-E_Sb-FtDKL6bf6Q5e9RJTYL1ar7U4PCvDBnCm_yu8uI3YZF4Zbjd-gTe9rkKMcEkQ_CTlyhqi2Qq86HY7FMiAvErOLD4ptT1uUT-bdaGa8-hK4YATcjqG-UOdlunSAWUCqDaYchK-bi2lIqg"/>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[var(--primary)] text-[var(--on-primary)] px-3 py-1 font-label text-[10px] tracking-widest uppercase">NEW</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--secondary)] transition-colors">MONOLITH HOODIE</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">4.9</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">Heavyweight cotton with reflective thermal prints and modular tech-straps.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--secondary)]">$85.00</span>
                  <button className="bg-[var(--secondary)] text-[var(--on-secondary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>

            {/* Card 6 */}
            <Link href="catalogo/6">
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--primary)]/0 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt="Headphones" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDehugbkTEoR5CB-pv1k8rKnGxru_zt1Fsi0vSwF9yzNfuCGUM5PD5wjyU0XLqzQWHlix3KK2a_zSr2TPvr_fcAdfvBAicpX-mCIvnwyEdLTRKO6h5NyY3sHJnlxpMyyKBZ0PinlP7PhbsHZjrSxEca1jpeIhTeauIoU6PuO90OBbmj9gUQ4biST5lZk_qdlzzDo9ST_ljksLLcrHSYTEMIcTVGVqyMMl58mWXqYEaPmnjUirotLEGwGGiphyn2RAUhYqPZYXoa1TU"/>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--primary)] transition-colors">SONIC_VOID PRO</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">4.6</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">Planar magnetic drivers with active noise cancellation and spatial audio tech.</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--primary)]">$320.00</span>
                  <button className="bg-[var(--primary)] text-[var(--on-primary)] p-3 transition-all active:scale-95">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </section>
    </>
  );
}