import Image from "next/image";

export default function Home() {
  return (
    <>   
      <section className="relative min-h-[921px] flex flex-col md:flex-row items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] via-transparent to-transparent z-10"></div>
        
        <div className="relative z-20 w-full md:w-1/2 px-8 md:pl-20 py-12">
          <p className="font-label uppercase tracking-[0.4em] text-[var(--primary)] mb-4 text-sm">
            ARCHIVE SERIES // 001
          </p>

          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-8">
            TITAN <br /><span className="text-[var(--secondary)]">PRO_X</span>
          </h1>

          <p className="text-[var(--on-surface-variant)] max-w-md mb-10 text-lg leading-relaxed">
            The ultimate artifact for those who traverse the digital void. Hall-effect switches meet aerospace-grade aluminum.
          </p>

          <button className="bg-[var(--primary)] text-[var(--on-primary)] px-12 py-5 font-headline font-bold uppercase tracking-widest text-lg hero-glow hover:scale-105 active:scale-95 transition-all duration-300">
            SHOP NOW
          </button>
        </div>

        <div className="relative w-full md:w-1/2 h-[512px] md:h-[921px] flex items-center justify-center">
          <div className="absolute w-[120%] h-[120%] bg-radial-gradient from-[var(--primary)]/10 to-transparent blur-3xl"></div>
          <img
            alt="Gaming Peripheral"
            className="relative z-20 w-4/5 h-4/5 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd9UMlJQeZlKOKzy9XU-rcIv_E9ySD0oPhkqCPFZwI8JafpCExLWpmKA6nURX2AH_pRJWgOxTKX5xrsrEHl02Mmn4BpkM9aKgi4FkZ78cbO-oGSWurQFlgCfgbTijK8u3URU7bLvV8aPkBgvFwqz748qrF0kgh5RlEQ2vLpHNzJOxKRhI9L3QFn3oURrnoKk84EJOH9GuOoVh4wemYGY3pOtbXU8ff3DEGy08ipGhoGbkDqFAZQTXIB8fTTGqycmVhVz4LeaAVxWg"
          />
        </div>
      </section>

      <section className="px-8 py-24 bg-[var(--surface-container-lowest)]">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">

          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[var(--surface-container-high)]">
            <img
              alt="Gaming Setup"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1sP6bJDkjz6BzEk9IRI5bpyR4ez-4mZZ9dKdDZBKtCyHEdskU2vugDM3noukce4H1uX9v8QAaPTNVyGxjOsqYcuT70_908V15jlSr1wCUbO2TBcVidWUUIg4TEdHxIFNmw1mVB4arBpJ9EvZ7KnNvGgBNKWOEER6cXjos_ZTjACIFqjL15-XYoUdCnqwyeqB1DnvZUg-0q-mqCgrUOB5EWei4UowjGhUaTUPtgsDorRHsJXETrLVX9rHH5xNffcdqpX_eQc_8Do0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-container-lowest)] via-transparent to-transparent"></div>

            <div className="absolute bottom-8 left-8">
              <h3 className="font-headline font-black text-4xl uppercase tracking-tighter">
                BATTLESTATIONS
              </h3>
              <p className="text-[var(--primary)] font-label text-sm tracking-widest mt-2">
                COMPLETE KITS AVAILABLE
              </p>
            </div>
          </div>

          <div className="md:col-span-2 relative group overflow-hidden bg-[var(--surface-container-high)]">
            <img
              alt="Figures"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2MrUEkM19D3TOLreI4L06x6vSqpmAHo5BCCAnGPMKAlHEmG_aOmBNMPgIkWbd_SfJgXmTSDrqqj9cEOASmmwpW-uf1czmJBQ0JQ8SDnQUzLrbgksJqBcbRt61_e4USL4PD8E7hunRUqLdCp4fq8LJUk_An1DUvqk0zC7ELcouX1t8fAxCpyFuLYOFkis8-EcgKonzw5AlvBYyfI-a3xrEjBfS75CUBnI8mwxQ5_-FdEUWU16HBeNInTcarbJ7l7MPLI8zyyXg5nE"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="absolute bottom-8 left-8">
              <h3 className="font-headline font-black text-3xl uppercase tracking-tighter">
                ANIME FIGURES
              </h3>
              <p className="text-[var(--secondary)] font-label text-sm tracking-widest mt-2">
                RARE JAPAN IMPORTS
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-[var(--surface-container-high)]">
            <div className="absolute inset-0 bg-[var(--surface-variant)] flex items-center justify-center glass-artifact">
              <span
                className="material-symbols-outlined text-[var(--primary)] text-6xl opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mouse
              </span>
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end border border-white/0 group-hover:border-[var(--primary)]/50 transition-colors">
              <h3 className="font-headline font-bold text-xl uppercase">MICE</h3>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1">OPTICAL PRECISION</p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-[var(--surface-container-high)]">
            <div className="absolute inset-0 bg-[var(--surface-variant)] flex items-center justify-center glass-artifact">
              <span
                className="material-symbols-outlined text-[var(--secondary)] text-6xl opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                headphones
              </span>
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end border border-white/0 group-hover:border-[var(--secondary)]/50 transition-colors">
              <h3 className="font-headline font-bold text-xl uppercase">AUDIO</h3>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1">SPATIAL IMMERSION</p>
            </div>
          </div>

        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline font-black text-5xl uppercase tracking-tighter">
              NEW_ARRIVALS
            </h2>
            <div className="h-1 w-24 bg-[var(--primary)] mt-4"></div>
          </div>
          <a
            className="font-label uppercase text-sm tracking-widest text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors"
            href="#"
          >
            VIEW_ALL_COLLECTION
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <div className="bg-[var(--surface-container-high)] relative group">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Figure Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiF-Eb0YUJykbk0Vzjuz5WbYyS7VDlgUlf_Cp9IhM6zMA6qm1HiWipq5uyp71SGhSXEpGYDkICl2guy221pkI3DTwsvG1Lhm7QWUATjE0QycqSnHObPq9TRR6Eg23VqTNaElgdfU-yXaEWwgxJO_YvSTO5TuzkfCfZXCBnzIQCpLg3HZZ9PPDk9dkAPixFtB98ofjJCqjbhbzmqz5cuKdkLibmFV1XRtpd_ud6QAvG7_aUCGJ0ttOUbnsXKmsveE-W7oaoozUzvCo"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[var(--secondary)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--on-secondary)]">LIMITED_DROP</span>
                <span className="text-[var(--primary)] font-headline font-black">$249.00</span>
              </div>

              <h4 className="font-headline font-bold text-lg uppercase tracking-tight">KAIZEN_SERIES: VALKYRIE</h4>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1 uppercase tracking-widest">1/7 SCALE STATUE</p>

              <button className="w-full mt-6 border border-[var(--outline-variant)] py-3 font-label text-sm uppercase tracking-[0.2em] hover:bg-[var(--on-surface)] hover:text-[var(--surface)] transition-colors">ADD TO_CART</button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-[var(--surface-container-high)] relative group">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Figure Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKd0ncOteP-fmSBuqARnx6MRfzEPyxcQShATIloMpfmTgv7ZUDOmlTL7iNs3qHdkfHtTth08gZqAORMnU4T8irNm-vn7skdWV8nH2nfx7lH3CReV4Ggkb1wLWlSnfbbnWWu9BIN8P4EgY4fxMZjXXyO4QivTBrGs-RGp4h5Wee0KAaa4coQgn6y6Ao1QFGDPOocpkT2hmhr8zZVmMRXvzSnN5aat525T85YEmpcTnbtMnavtCTg8Mu4SE9HQDayZMJ3MXw-RtyQY"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[var(--surface-variant)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--primary)]">PRE_ORDER</span>
                <span className="text-[var(--primary)] font-headline font-black">$185.00</span>
              </div>

              <h4 className="font-headline font-bold text-lg uppercase tracking-tight">CYBER_DRUID V.2</h4>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1 uppercase tracking-widest">COLLECTOR EDITION</p>

              <button className="w-full mt-6 border border-[var(--outline-variant)] py-3 font-label text-sm uppercase tracking-[0.2em] hover:bg-[var(--on-surface)] hover:text-[var(--surface)] transition-colors">RESERVE_UNIT</button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-[var(--surface-container-high)] relative group">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Audio Gear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsms6lNRNcjXNPzn4Enb1EP5orfrIeL-6WNAfMjBlGJ8m2rdtkN__8kgbN9Aos2jTsQUzb_H2o2vWO1BGc0nOOOyZUqM70kGiAIYZSGRpCeN4DW4a7g8G7SIlDN75DrwB9mzmsDIhLOMxBbm1LGdOTGoVnWmfpcBldxNmBflAhgUzqiKpPbug01RsKNpprvG_msIe4rLjZl6ms05k95o-HXJgdNVydh6gKLfr2xccNto2XicWftkFIzRZExNVulaCcpK4P9C5meGk"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[var(--surface-variant)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--on-surface)]">RESTOCKED</span>
                <span className="text-[var(--primary)] font-headline font-black">$320.00</span>
              </div>

              <h4 className="font-headline font-bold text-lg uppercase tracking-tight">VOID_SOUND PRO_7</h4>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1 uppercase tracking-widest">WIRELESS HI-RES</p>

              <button className="w-full mt-6 border border-[var(--outline-variant)] py-3 font-label text-sm uppercase tracking-[0.2em] hover:bg-[var(--on-surface)] hover:text-[var(--surface)] transition-colors">ADD TO_CART</button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-[var(--surface-container-high)] relative group">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Mouse Gear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWlU46J8D165D7qcUXUJUNYDq2mURsruGldBq31IRiE1QCkHFOQGm0XoqDKIqI2HZopL-9fHTXUzzh8v-xffmCLftH-EgBCAdON7vv8i9NtRq4KWlHRSQkxYC5gTEytJqIvzidpYXZO_wAm6ocOjyT3dOdAser0bqM1b9pISYsEMNZ10vx8f2-d67TKi8-U_2v4UJPOoMqO_1P5cCj3eZymYfyIQVFBLzodTEvL5PeFZEtcD0eT54Xl87Fh2UWDtSPlBmATezzFiM"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[var(--secondary)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--on-secondary)]">NEW_DROP</span>
                <span className="text-[var(--primary)] font-headline font-black">$129.00</span>
              </div>

              <h4 className="font-headline font-bold text-lg uppercase tracking-tight">PHANTOM_GLIDE X</h4>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1 uppercase tracking-widest">8000HZ POLLING RATE</p>

              <button className="w-full mt-6 border border-[var(--outline-variant)] py-3 font-label text-sm uppercase tracking-[0.2em] hover:bg-[var(--on-surface)] hover:text-[var(--surface)] transition-colors">ADD TO_CART</button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-8 border-y border-[var(--outline-variant)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none">
            JOIN THE <span className="text-[var(--tertiary)]">MONOLITH</span>
          </h2>

          <p className="font-body text-[var(--on-surface-variant)] text-lg mb-12 max-w-xl mx-auto">
            Access exclusive member-only drops, secret pre-order links, and rare artifact alerts.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow bg-[var(--surface-container)] border-0 border-b-2 border-[var(--outline-variant)] focus:ring-0 focus:border-[var(--primary)] text-[var(--on-surface)] font-label tracking-widest py-4 px-6 uppercase text-sm"
              placeholder="YOUR_ENCRYPTED_EMAIL"
              type="email"
            />

            <button className="bg-[var(--tertiary)] text-[var(--on-tertiary)] px-12 py-4 font-headline font-black uppercase tracking-widest hover:brightness-110 transition-all">
              CONNECT_IDENTITY
            </button>
          </div>
        </div>
      </section>
    </>
  );
}