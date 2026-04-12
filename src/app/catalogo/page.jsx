import Link from "next/link";

export default function Catalogo() {
  return (
    <>
    <div class="pt-24 min-h-screen flex flex-col md:flex-row max-w-[1920px] mx-auto">
    <aside className=" w-full mt-20 md:w-80  p-8 border-r border-[#48474d]/10 space-y-12">
        <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[#8ff5ff] mb-6">CATEGORY</h3>
            <ul className="space-y-4">
                <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none border-[#48474d] bg-[#1f1f26] checked:bg-[#8ff5ff] checked:border-[#8ff5ff] focus:ring-0 transition-all" type="checkbox"/>
                    <span className="font-label text-sm uppercase tracking-widest text-[#acaab1] group-hover:text-[#8ff5ff] transition-colors">FIGURE</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                    <input  className="w-4 h-4 rounded-none border-[#48474d] bg-[#1f1f26] checked:bg-[#8ff5ff] checked:border-[#8ff5ff] focus:ring-0 transition-all" type="checkbox"/>
                    <span className="font-label text-sm uppercase tracking-widest text-[#8ff5ff]">PERIPHERAL</span>
                    </label>
                    </li>
                <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none border-[#48474d] bg-[#1f1f26] checked:bg-[#8ff5ff] checked:border-[#8ff5ff] focus:ring-0 transition-all" type="checkbox"/>
                    <span className="font-label text-sm uppercase tracking-widest text-[#acaab1] group-hover:text-[#8ff5ff] transition-colors">APPAREL</span>
                    </label>
                </li>
            </ul>
        </div>
        <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[#8ff5ff] mb-6">SERIES</h3>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#25252c] text-[#8ff5ff] font-label text-[10px] tracking-widest border border-[#8ff5ff]/20">ONE PIECE</span>
                <span className="px-3 py-1 bg-[#25252c] text-[#acaab1] font-label text-[10px] tracking-widest border border-[#48474d]/20 hover:border-[#8ff5ff]/50 cursor-pointer">CYBERPUNK</span>
                <span className="px-3 py-1 bg-[#25252c] text-[#acaab1] font-label text-[10px] tracking-widest border border-[#48474d]/20 hover:border-[#8ff5ff]/50 cursor-pointer">NARUTO</span>
                <span className="px-3 py-1 bg-[#25252c] text-[#acaab1] font-label text-[10px] tracking-widest border border-[#48474d]/20 hover:border-[#8ff5ff]/50 cursor-pointer">EVANGELION</span>
                <span className="px-3 py-1 bg-[#ff6b98]/10 text-[#ff6b98] font-label text-[10px] tracking-widest border border-[#ff6b98]/20">LTD EDITION</span>
            </div>
        </div>
        <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[#8ff5ff] mb-6">PRICE RANGE</h3>
            <div className="space-y-6">
                <input className="w-full accent-[#8ff5ff] bg-[#25252c] h-1 appearance-none cursor-pointer" type="range"/>
                <div className="flex justify-between font-label text-xs text-[#acaab1] tracking-widest">
                <span>$0</span>
                <span>$1000+</span>
                </div>
            </div>
        </div>
    </aside>

<section className="flex-1 p-8">

  {/* <!-- Dynamic Sorting Header --> */}

  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
    <div>
      <span className="text-[10px] tracking-[0.4em] text-[#ff6b98] font-bold uppercase mb-2 block">DISCOVER</span>
      <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
        Catalog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ff5ff] to-[#d674ff]">01A</span>
      </h1>
    </div>
    <div className="flex items-center gap-8 border-b border-[#48474d]/30 pb-2 w-full md:w-auto">
      <span className="font-label text-xs tracking-widest text-[#acaab1] uppercase">SORT BY:</span>
      <select className="bg-transparent border-none font-label text-xs tracking-widest uppercase text-[#8ff5ff] focus:ring-0 cursor-pointer py-0">
        <option>NEWEST RELEASES</option>
        <option>PRICE: LOW TO HIGH</option>
        <option>PRICE: HIGH TO LOW</option>
        <option>POPULARITY</option>
      </select>
    </div>
  </div>

  {/* <!-- Grid --> */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* <!-- Card 1 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#8ff5ff]/0 group-hover:border-[#8ff5ff]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Mechanical Keyboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="sleek mechanical keyboard with translucent keycaps and glowing cyan rgb lighting on a dark reflective tech surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMzrBcD2x3fHzLTiarmcZcq8mNFBBOkhDZ4e40ZWMG24qnEdaK13IUXGwUachIEkNIMRuPPo9ZjaF6T0p19mOCFjdsCImsGjAufkvHS7kS2YRcTf1HtZoQqeoO8Yeizu9pKP3PrxCrmHpabq_toJ6Y6uZ0GHZnxO4SRGtEKjO4Ru9mXjfZMj0oLvlczCQOAHx64c13Exr0suev96M21gqvudXbACyp3MURzHrbGu37IdJtqkbTJXOtD1aouzP_SWszvAcpYMpDog"/>
        <div className="absolute top-4 left-4">
          <span className="bg-[#ff6b98] text-[#47001d] px-3 py-1 font-label text-[10px] tracking-widest uppercase">BESTSELLER</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#8ff5ff] transition-colors">NEON_STRIKE TKL</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">4.9</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">Custom haptic switches with modular CNC aluminum chassis and OLED display.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#8ff5ff]">$189.00</span>
          <button className="bg-[#8ff5ff] text-[#005d63] p-3 group-hover:neon-glow-primary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Card 2 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#ff6b98]/0 group-hover:border-[#ff6b98]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Anime Figure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="highly detailed anime figure of a cybernetic warrior with glowing pink energy effects on a dark minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClBwONPWY92rSbpK8MZoDVSzz7m7TtTbOhKtVdX4M2OL57SnkyfGIpqVExTR5MfvyzCm7LhS91-myRu9P2xk_csoquqNRJzznxsoZ0z3fmyhCGxko3spFwQKvboUHp9ygqd6dbrHlOC4g33Q4TgtKz_Vub_FtK3K5Xriwohs3mCPTxidqURxciOYapgpWzSgiM665z5C6TjWhJCuDvs04z6NlFwPXNYd5yQhHeYC2QGMEgKW6WRcoFD5ejbSe-EECDsg0n9hBUHYA"/>
        <div className="absolute top-4 right-4">
          <span className="bg-[#000000]/80 backdrop-blur-md border border-[#d674ff]/30 text-[#d674ff] px-3 py-1 font-label text-[10px] tracking-widest uppercase">LIMITED</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#ff6b98] transition-colors">CYBER_REI V2.0</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">5.0</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">1/7 scale statue with integrated LED ambient lighting and interchangeable armor sets.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#ff6b98]">$245.00</span>
          <button className="bg-[#ff6b98] text-[#47001d] p-3 group-hover:neon-glow-secondary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Card 3 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#8ff5ff]/0 group-hover:border-[#8ff5ff]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Retro Console" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="vintage handheld gaming console with a modern transparent shell and violet internal lighting on a dark textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Yq0AjnzS4riCJhoSi-VmEC_rQKZNgNsGvSRstd9kft_6ldF9YLkPGdip4o0qIm9nZ1o4cNaaYCJERj313VW8ux47hmp7R_YQhFA8fnPmjNYoZXDM-fHqTH-gl-ruP14AbqE1aRFWiYYJeVGj8xk6CxdLTIGg28XNXaFRxp0ym8wtXzMycUO2Xh63KI-ibTbJFGD3-Kp8c4GGF1HC1hPTaZ4UiYIG2Zx_K8BXylHHUz-1BmMb_Ozo1YWOJJAYStrT6Q1eE3BpR0"/>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#8ff5ff] transition-colors">GHOST_FRAME PRO</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">4.7</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">Transparent shell handheld with IPS display and custom retro emulation kernel.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#8ff5ff]">$120.00</span>
          <button className="bg-[#8ff5ff] text-[#005d63] p-3 group-hover:neon-glow-primary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Card 4 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#8ff5ff]/0 group-hover:border-[#8ff5ff]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Gaming Mouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="aerodynamic ultralight gaming mouse with honeycomb design and glowing purple and blue lighting on dark carbon fiber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgdvGgBofDJrNytGZ8E8kXe_duNP9zaNX-605FXshP4b8YjhFQay6xrbjRFVwGDTemPJdwBo-_QcpvHC3c5MafNUp4PpuiAfbC8ziIfwfafBX6hZQNMr25Bmd_jaZknIAh9o96F017G4uJ1FOQzUMcBzUZOf6oHDoHzmzrbyYVanzQKUATUizelTV-mpwlkJQkM0cVBqFMKb5nQfe6Jif2FVfWQnuAVtqhPuxeNZL38PilwfteKc8YT_EK7zQMP8va9CebwUUwALg"/>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#8ff5ff] transition-colors">VOID_GLIDE X</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">4.8</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">45g ultralight wireless mouse with 26k DPI optical sensor and PTFE feet.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#8ff5ff]">$159.00</span>
          <button className="bg-[#8ff5ff] text-[#005d63] p-3 group-hover:neon-glow-primary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Card 5 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#ff6b98]/0 group-hover:border-[#ff6b98]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="black oversized streetwear hoodie with glowing magenta cybernetic prints and kanji text in a dark urban alley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvPah5yZXOqyVrVzFDxFGzgGb7LcdfA22OMJS_qBmGd-8PmfcYn7kMz9Y6RsdK-u9DrHcaSX1SmmRj4uNQ3l1nxA5J96YCvgvSaxf_wPvPgTlPCx-z6Nzir_FU3X-E_Sb-FtDKL6bf6Q5e9RJTYL1ar7U4PCvDBnCm_yu8uI3YZF4Zbjd-gTe9rkKMcEkQ_CTlyhqi2Qq86HY7FMiAvErOLD4ptT1uUT-bdaGa8-hK4YATcjqG-UOdlunSAWUCqDaYchK-bi2lIqg"/>
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#8ff5ff] text-[#005d63] px-3 py-1 font-label text-[10px] tracking-widest uppercase">NEW</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#ff6b98] transition-colors">MONOLITH HOODIE</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">4.9</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">Heavyweight cotton with reflective thermal prints and modular tech-straps.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#ff6b98]">$85.00</span>
          <button className="bg-[#ff6b98] text-[#47001d] p-3 group-hover:neon-glow-secondary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Card 6 --> */}

    <div className="group relative bg-[#1f1f26] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 border border-[#8ff5ff]/0 group-hover:border-[#8ff5ff]/40 transition-colors pointer-events-none"></div>
      <div className="aspect-[4/5] relative overflow-hidden bg-[#19191f]">
        <img alt="Headphones" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="modern wireless headphones with brushed metal finish and glowing blue accents on a dark glass stand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDehugbkTEoR5CB-pv1k8rKnGxru_zt1Fsi0vSwF9yzNfuCGUM5PD5wjyU0XLqzQWHlix3KK2a_zSr2TPvr_fcAdfvBAicpX-mCIvnwyEdLTRKO6h5NyY3sHJnlxpMyyKBZ0PinlP7PhbsHZjrSxEca1jpeIhTeauIoU6PuO90OBbmj9gUQ4biST5lZk_qdlzzDo9ST_ljksLLcrHSYTEMIcTVGVqyMMl58mWXqYEaPmnjUirotLEGwGGiphyn2RAUhYqPZYXoa1TU"/>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[#8ff5ff] transition-colors">SONIC_VOID PRO</h3>
          <div className="flex items-center gap-1 text-[#ff6b98]">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-label text-xs">4.6</span>
          </div>
        </div>
        <p className="text-[#acaab1] text-sm line-clamp-2 font-light">Planar magnetic drivers with active noise cancellation and spatial audio tech.</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-2xl font-headline font-black text-[#8ff5ff]">$320.00</span>
          <button className="bg-[#8ff5ff] text-[#005d63] p-3 group-hover:neon-glow-primary transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>

  </div>

</section>
</div>

    </>
  );
}