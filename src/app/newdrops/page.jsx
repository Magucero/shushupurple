import Link from "next/link";
import Head from "next/head";

export default function Newdrops() {
  return (
    <>
      <main className="pt-24 min-h-screen bg-[var(--surface)] text-[var(--on-surface)] font-body selection:bg-[var(--tertiary)] selection:text-[var(--on-tertiary)]">
        {/* Hero Section: The Monolith Teaser */}
        <section className="relative h-[819px] w-full flex items-center justify-center overflow-hidden bg-[var(--surface-container-lowest)]">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              className="w-full h-full object-cover grayscale"
              alt="abstract dark 3D render of sharp monolithic structures rising from a digital void with cyan laser light beams"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_fVh4adTW3lLq0KTKTC7a6bsA_Nlwf46tqXxvZgPeSP9bD25PHWgBHnDV9bvnCURfntRr4ZulC5k3HTSvz1dA4ofQWKgn4H_g5QHFInDQpg9uRjzDIJFHUFvng_5bs8BYnpU7XgXBiJpsBov9KIEMeRfTSntHw8NZXn_xTTf-xIblR5KjloRMmL6xsc7IyMD5rKstIyi9SZYRm2Oc7_fhnQtRzdu8bGUfoBzu_ttcV9eSNswqdlnhUSof-rbATIVLUIbyRTpWOOI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-[var(--surface-container-lowest)]"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <label className="text-[var(--primary)] font-headline tracking-[0.4em] uppercase text-xs mb-6 block">
              COMMENCING SEQUENCE: DROPS_04.24
            </label>
            <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter uppercase text-[var(--on-surface)] leading-none mb-8">
              FUTURE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--tertiary)] to-[var(--secondary)]">
                ARTIFACTS
              </span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-headline">
              <div className="bg-[var(--surface-container-high)] p-6 min-w-[120px] glass-top">
                <div className="text-4xl font-bold">14</div>
                <div className="text-[10px] tracking-widest text-[var(--on-surface-variant)] uppercase">
                  DAYS
                </div>
              </div>
              <div className="bg-[var(--surface-container-high)] p-6 min-w-[120px] glass-top">
                <div className="text-4xl font-bold">08</div>
                <div className="text-[10px] tracking-widest text-[var(--on-surface-variant)] uppercase">
                  HOURS
                </div>
              </div>
              <div className="bg-[var(--surface-container-high)] p-6 min-w-[120px] glass-top">
                <div className="text-4xl font-bold">42</div>
                <div className="text-[10px] tracking-widest text-[var(--on-surface-variant)] uppercase">
                  MINUTES
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legendary Drops: Asymmetric Grid */}
        <section className="px-8 py-24 bg-[var(--surface)]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-black font-headline uppercase tracking-tighter mb-2">
                LEGENDARY_DROPS
              </h2>
              <p className="text-[var(--on-surface-variant)] max-w-md font-body">
                Limited edition technological relics designed for the elite digital architect. Once
                they're gone, the data is wiped.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-[var(--secondary)] font-headline text-xs tracking-[0.3em] uppercase">
                Status: ENCRYPTED
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Large Featured Item */}
            <div className="col-span-12 md:col-span-8 group relative bg-[var(--surface-container-high)] overflow-hidden glass-top h-[600px]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="cinematic shot of a high-tech robotic helmet with glowing purple visors in a dark rainy cyberpunk alley"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLxHAj5M3ZflNOWV5Rpo1TcY2ycPM0QGmjYuMffnldcVeciSxO-0MYzPc5SptDwmwBqBJVKy_GbE9MRJptANODAr2DUFaf50UbeuyfYKEVnvd9RYuPX-xW8ZXLACJNjfRLf18j-rnAT21isrdItYkWQpH0EpCkecrkVY4EyHcgoaLti4K8956N7MOkHObooCaaACJbQGeMGtWoKafGOGH5ZDVSTTmwINkP6VENdA58grt4o-7Lc99T3m6SP2DNpX8cc5QdySALdCI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-container-lowest)] to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-[var(--tertiary)] text-[var(--on-tertiary)] font-headline text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                      RARE
                    </span>
                    <span className="bg-[var(--surface-container-highest)] text-[var(--primary)] font-headline text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                      CYBERNETICS
                    </span>
                  </div>
                  <h3 className="text-4xl font-black font-headline uppercase tracking-tighter mb-2">
                    MONOLITH MK.VII HELMET
                  </h3>
                  <p className="text-[var(--on-surface-variant)] font-body">
                    Full neural integration. Bio-metric authentication included.
                  </p>
                </div>
                <button className="bg-[var(--primary)] text-[var(--on-primary)] font-headline font-black uppercase tracking-widest px-8 py-4 hover:bg-[var(--primary-container)] transition-all active:scale-95 glow-cyan">
                  NOTIFY_ME
                </button>
              </div>
            </div>

            {/* Small Side Items */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-[var(--surface-container-high)] relative group overflow-hidden glass-top">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="close-up of mechanical keyboard with transparent glowing keycaps and purple backlight on a black desk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb1RaY8daAnDATtTM9e9fp-nP_hqw1RivVzxAZWMdC3_8XwXgYezQVOSsBln85pLxZvtcXHCPN6T_2mjJvy9RauaEm8Vky0wUOSBtbqcz7s2XyHTbhk_et2kHne4td-KcSFTOhgrRs9fgSvN4cvMA3jX2mdwG4BF5YMp5mUDtkrmV_uEU97OpTl6UBYvf4NgorWfCKvpWnJnrsxX9WnRDVrAoKskAREKbjBb1R9R5_ZgnZ_F0mejfYjeAdw_nnK8Je_uZ5Rrofglg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-container-lowest)]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-xl font-bold font-headline uppercase tracking-tight mb-4">
                    TACTICAL_KEYBOARD_V4
                  </h4>
                  <button className="text-[var(--secondary)] font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    REMIND ME{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-[var(--surface-container-high)] relative group overflow-hidden glass-top">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="modern minimalist gaming mouse with sharp geometric angles and purple neon accent light strips"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIqzfBZ2M-DOla98AwGD_AX_ahNYISY00E-zsTmAWY0x5FVuwhC6zbUHn7VoFizoECcTg3bw0DZYceaMrBmmIOsE1cvCyn0KLLM6iH0LJVpFn7Z-nUcgWYEdSMO6O6TEPH2pAiksiwdD4XBgVO45fXvTYvI7kLDXe7SmGKtrQR-xlbxbNLgPHSv6TdzOn8zSVstHKY188W1ohSEq0y3t2wAduMbZR9mK4s-U1fmGxa2YeCDwEG8-SShqaTB1HYpx54FOK-EDMx11o"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-container-lowest)]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-xl font-bold font-headline uppercase tracking-tight mb-4">
                    NEURAL_INTERFACE_MOUSE
                  </h4>
                  <button className="text-[var(--secondary)] font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    REMIND ME{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Drops: Kinetic Grid */}
        <section className="px-8 py-24 bg-[var(--surface-container-lowest)]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 border-l-4 border-[var(--tertiary)] pl-8">
              <h2 className="text-4xl font-black font-headline uppercase tracking-tighter">
                PHASE_02: UPCOMING
              </h2>
              <p className="text-[var(--on-surface-variant)] font-headline tracking-widest uppercase text-xs mt-2">
                Expected deployment: within 30 days
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-[var(--outline-variant)]/20">
              {/* Drop Card 01 */}
              <div className="bg-[var(--surface)] p-8 group hover:bg-[var(--surface-container)] transition-colors duration-500">
                <div className="aspect-square bg-[var(--surface-container-high)] mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="abstract tech clothing jacket with reflective strips and futuristic buckles on a dark background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJMdtp_hiw13fPxfQskW4fNwbaR_jUbGWheUhuXl1REkeMH6PG0Orxaklrjmd-I-8y5CPeXUgPPuhERG6wYmQggeoysl4u_Nt4ijODRWvIqjR7AeuudDjKdZCTlk6uysynRhwnsbEOg3jzHZhwCJNMul-9t-YUTtWBXXiqXh1D0CMRJE9QxA-XXySPbUEzFTC4wWAiGlN_9TgoT04Oza1DbAity_1zeJHDknnzhkdWnX0qAtvc_w2V-FvfDWAce6f7ZCSuQAPGcvc"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">
                    KINETIC JACKET
                  </h3>
                  <span className="text-[var(--primary)] font-headline text-sm font-bold">#001</span>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm mb-8 leading-relaxed">
                  Integrated thermal shielding with modular utility pouches for high-risk zones.
                </p>
                <button className="w-full border border-[var(--outline-variant)] py-4 font-headline uppercase tracking-widest text-xs hover:bg-[var(--secondary)] hover:text-[var(--on-secondary)] hover:border-[var(--secondary)] transition-all active:scale-95">
                  QUEUE FOR NOTIFICATION
                </button>
              </div>

              {/* Drop Card 02 */}
              <div className="bg-[var(--surface)] p-8 group hover:bg-[var(--surface-container)] transition-colors duration-500">
                <div className="aspect-square bg-[var(--surface-container-high)] mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="futuristic backpack with rigid outer shell and internal purple LED illumination"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQd0wkjgkEOwDa8wGOCgpoHVIrAqk7Fg4bTmHlQU7l5qLWGvLG7e7rzKRB2VhV7lFbODU6EbLw6_zzdRKkplrrMI9R1NtRL5v-P8894dtjqQn0_ur1pOdJtkjt0t5Fs6v_YWbQVDeHjkkD-7Od1kdIp-a_tqf_Uq2n14vlKw2uxCpfm-vBMzxZ-vMs5O52cAPLVbRpuaMKwkNASRGipWZXaPgV6Fv8XJZX5gE4KAfyX0vKLZZhyfTioLhhhry6PF4x0wSjBSDnQ_k"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">
                    VOID PACK_04
                  </h3>
                  <span className="text-[var(--primary)] font-headline text-sm font-bold">#002</span>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm mb-8 leading-relaxed">
                  Stealth-tech surface fabric. Waterproof rating beyond industry standards.
                </p>
                <button className="w-full border border-[var(--outline-variant)] py-4 font-headline uppercase tracking-widest text-xs hover:bg-[var(--secondary)] hover:text-[var(--on-secondary)] hover:border-[var(--secondary)] transition-all active:scale-95">
                  QUEUE FOR NOTIFICATION
                </button>
              </div>

              {/* Drop Card 03 */}
              <div className="bg-[var(--surface)] p-8 group hover:bg-[var(--surface-container)] transition-colors duration-500">
                <div className="aspect-square bg-[var(--surface-container-high)] mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="cyberpunk glasses with orange tinted lenses and digital HUD display projections on the surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFa43HPrkyDFIjmRXnPqNoL2ljkbFL3P-uoZwzl2Cei2gxkgjsQA0ABcfJvSoLIT2KmKtAvda6VDP8YVgCKQVt6_HBlxMphTYJfJXNzTmeS9RM9w5oJPFZvpEXKY_HDNvKZYtWrDs6r0BaWq-3GrVhITMrXT_KS3nZNKd9jmeHa3WNnf-icTwjK-DLWJQXJ9U40L8OmOabXkGpi5ktPLruCVooTgcdfoDq4XhqKNC5jMbNhhfMtZXohP6U9xeBLcZjm4CS9W0qd0"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">
                    OPTIC SCAN_V2
                  </h3>
                  <span className="text-[var(--primary)] font-headline text-sm font-bold">#003</span>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm mb-8 leading-relaxed">
                  Real-time AR overlay with encrypted messaging capabilities.
                </p>
                <button className="w-full border border-[var(--outline-variant)] py-4 font-headline uppercase tracking-widest text-xs hover:bg-[var(--secondary)] hover:text-[var(--on-secondary)] hover:border-[var(--secondary)] transition-all active:scale-95">
                  QUEUE FOR NOTIFICATION
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / HUD Input Section */}
        <section className="px-8 py-32 bg-[var(--surface)]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-[var(--tertiary)] via-[var(--secondary)] to-[var(--primary)] mb-12">
              <div className="bg-[var(--surface)] px-8 py-2">
                <span className="text-xs font-headline font-black uppercase tracking-[0.5em]">
                  SYSTEM ACCESS
                </span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black font-headline uppercase tracking-tighter mb-8 italic">
              GET_PRIORITY_BYPASS
            </h2>
            <p className="text-[var(--on-surface-variant)] font-body mb-12 text-lg">
              Subscribers receive drop alerts 15 minutes before global deployment. No delays. No
              missed data.
            </p>
            <form className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <input
                  className="w-full bg-[var(--surface-container-high)] border-0 border-b-2 border-[var(--outline-variant)] text-[var(--on-surface)] font-headline tracking-widest uppercase placeholder:text-[var(--outline)] p-6 focus:ring-0 focus:border-[var(--primary)] transition-all"
                  placeholder="ENTER_IDENTITY_EMAIL"
                  type="email"
                />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--primary)]"></div>
              </div>
              <button className="bg-[var(--primary)] text-[var(--on-primary)] font-headline font-black uppercase tracking-[0.2em] px-12 py-6 hover:bg-[var(--primary-container)] transition-all glow-cyan">
                AUTHENTICATE
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}