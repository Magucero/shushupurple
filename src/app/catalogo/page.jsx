import Link from "next/link";
import CardCatalog from "../componentes/CardCatalog";

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
            {/* Card 1 1.1*/}

            <CardCatalog
            nameP={"NEON_STRIKE TKL"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuBWMzrBcD2x3fHzLTiarmcZcq8mNFBBOkhDZ4e40ZWMG24qnEdaK13IUXGwUachIEkNIMRuPPo9ZjaF6T0p19mOCFjdsCImsGjAufkvHS7kS2YRcTf1HtZoQqeoO8Yeizu9pKP3PrxCrmHpabq_toJ6Y6uZ0GHZnxO4SRGtEKjO4Ru9mXjfZMj0oLvlczCQOAHx64c13Exr0suev96M21gqvudXbACyp3MURzHrbGu37IdJtqkbTJXOtD1aouzP_SWszvAcpYMpDog"}
            alt={"figura"}
            price={189.00}
            text2={"Custom haptic switches with modular CNC aluminum chassis and OLED display."}
            text1={"BESTSELLER"}
            enlace={"catalogo/1"}
            />

            {/* Card 2 */}

            <CardCatalog
            nameP={"CYBER_REI V2.0"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuClBwONPWY92rSbpK8MZoDVSzz7m7TtTbOhKtVdX4M2OL57SnkyfGIpqVExTR5MfvyzCm7LhS91-myRu9P2xk_csoquqNRJzznxsoZ0z3fmyhCGxko3spFwQKvboUHp9ygqd6dbrHlOC4g33Q4TgtKz_Vub_FtK3K5Xriwohs3mCPTxidqURxciOYapgpWzSgiM665z5C6TjWhJCuDvs04z6NlFwPXNYd5yQhHeYC2QGMEgKW6WRcoFD5ejbSe-EECDsg0n9hBUHYA"}
            alt={"figura"}
            price={245.00}
            text2={"1/7 scale statue with integrated LED ambient lighting and interchangeable armor sets."}
            text1={"LIMITED"}
            enlace={"catalogo/2"}
            />

            {/* Card 3 */}
            <CardCatalog
            nameP={"GHOST_FRAME PRO"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAs7Yq0AjnzS4riCJhoSi-VmEC_rQKZNgNsGvSRstd9kft_6ldF9YLkPGdip4o0qIm9nZ1o4cNaaYCJERj313VW8ux47hmp7R_YQhFA8fnPmjNYoZXDM-fHqTH-gl-ruP14AbqE1aRFWiYYJeVGj8xk6CxdLTIGg28XNXaFRxp0ym8wtXzMycUO2Xh63KI-ibTbJFGD3-Kp8c4GGF1HC1hPTaZ4UiYIG2Zx_K8BXylHHUz-1BmMb_Ozo1YWOJJAYStrT6Q1eE3BpR0"}
            alt={"figura"}
            price={120.00}
            text2={"Transparent shell handheld with IPS display and custom retro emulation kernel."}
            text1={""}
            enlace={"catalogo/3"}
            />
            
            {/* Card 4 */}
            <CardCatalog
            nameP={"VOID_GLIDE X"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuDgdvGgBofDJrNytGZ8E8kXe_duNP9zaNX-605FXshP4b8YjhFQay6xrbjRFVwGDTemPJdwBo-_QcpvHC3c5MafNUp4PpuiAfbC8ziIfwfafBX6hZQNMr25Bmd_jaZknIAh9o96F017G4uJ1FOQzUMcBzUZOf6oHDoHzmzrbyYVanzQKUATUizelTV-mpwlkJQkM0cVBqFMKb5nQfe6Jif2FVfWQnuAVtqhPuxeNZL38PilwfteKc8YT_EK7zQMP8va9CebwUUwALg"}
            alt={"figura"}
            price={155.00}
            text2={"45g ultralight wireless mouse with 26k DPI optical sensor and PTFE feet."}
            text1={"enjoy"}
            enlace={"catalogo/4"}
            />
            {/* Card 5 */}
            <CardCatalog
            nameP={"MONOLITH HOODIE"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuBvPah5yZXOqyVrVzFDxFGzgGb7LcdfA22OMJS_qBmGd-8PmfcYn7kMz9Y6RsdK-u9DrHcaSX1SmmRj4uNQ3l1nxA5J96YCvgvSaxf_wPvPgTlPCx-z6Nzir_FU3X-E_Sb-FtDKL6bf6Q5e9RJTYL1ar7U4PCvDBnCm_yu8uI3YZF4Zbjd-gTe9rkKMcEkQ_CTlyhqi2Qq86HY7FMiAvErOLD4ptT1uUT-bdaGa8-hK4YATcjqG-UOdlunSAWUCqDaYchK-bi2lIqg"}
            alt={"figura"}
            price={85}
            text2={"Heavyweight cotton with reflective thermal prints and modular tech-straps."}
            text1={"XL"}
            enlace={"catalogo/5"}
            />
            

            {/* Card 6 */}
            <CardCatalog
            nameP={"SONIC_VOID PRO"}
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuDehugbkTEoR5CB-pv1k8rKnGxru_zt1Fsi0vSwF9yzNfuCGUM5PD5wjyU0XLqzQWHlix3KK2a_zSr2TPvr_fcAdfvBAicpX-mCIvnwyEdLTRKO6h5NyY3sHJnlxpMyyKBZ0PinlP7PhbsHZjrSxEca1jpeIhTeauIoU6PuO90OBbmj9gUQ4biST5lZk_qdlzzDo9ST_ljksLLcrHSYTEMIcTVGVqyMMl58mWXqYEaPmnjUirotLEGwGGiphyn2RAUhYqPZYXoa1TU"}
            alt={"figura"}
            price={120}
            text2={"Planar magnetic drivers with active noise cancellation and spatial audio tech."}
            text1={"new"}
            enlace={"catalogo/6"}
            />
            
          </div>
        </section>
    </>
  );
}