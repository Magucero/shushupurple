import Link from "next/link";

export default function CatalogoLayout( { children } ) {
  return (
    <div className="pt-24 min-h-screen flex flex-col md:flex-row max-w-[1920px] mx-auto">
       <aside className="w-full mt-20 md:w-80 p-8 border-r border-[var(--outline-variant)]/10 space-y-12">
          <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[var(--primary)] mb-6">CATEGORY</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/catalogo/figuras">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <span className="font-label text-sm uppercase tracking-widest text-[var(--on-surface-variant)] group-hover:text-[var(--primary)] transition-colors">FIGURE</span>
                </label>
                </Link>
              </li>
              <li>
                <Link href="/catalogo/peripherical">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <span className="font-label text-sm uppercase tracking-widest text-[var(--on-surface-variant)] group-hover:text-[var(--primary)] transition-colors">PERIPHERICAL</span>
                </label>
                </Link>
              </li>
              <li>
                <Link href="/catalogo/apparel">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <span className="font-label text-sm uppercase tracking-widest text-[var(--on-surface-variant)] group-hover:text-[var(--primary)] transition-colors">APPAREL</span>
                </label>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[var(--primary)] mb-6">SERIES</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[var(--surface-variant)] text-[var(--primary)] font-label text-[10px] tracking-widest border border-[var(--primary)]/20">ONE PIECE</span>
              <span className="px-3 py-1 bg-[var(--surface-variant)] text-[var(--on-surface-variant)] font-label text-[10px] tracking-widest border border-[var(--outline-variant)]/20 hover:border-[var(--primary)]/50 cursor-pointer">CYBERPUNK</span>
              <span className="px-3 py-1 bg-[var(--surface-variant)] text-[var(--on-surface-variant)] font-label text-[10px] tracking-widest border border-[var(--outline-variant)]/20 hover:border-[var(--primary)]/50 cursor-pointer">NARUTO</span>
              <span className="px-3 py-1 bg-[var(--surface-variant)] text-[var(--on-surface-variant)] font-label text-[10px] tracking-widest border border-[var(--outline-variant)]/20 hover:border-[var(--primary)]/50 cursor-pointer">EVANGELION</span>
              <span className="px-3 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] font-label text-[10px] tracking-widest border border-[var(--secondary)]/20">LTD EDITION</span>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-xs tracking-[0.3em] uppercase text-[var(--primary)] mb-6">PRICE RANGE</h3>
            <div className="space-y-6">
              <input className="w-full accent-[var(--primary)] bg-[var(--surface-variant)] h-1 appearance-none cursor-pointer" type="range"/>
              <div className="flex justify-between font-label text-xs text-[var(--on-surface-variant)] tracking-widest">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>
        </aside>

       
       {children}
    </div>

  );
}