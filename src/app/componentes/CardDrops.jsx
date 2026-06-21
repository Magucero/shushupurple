import React from 'react'

export default function CardDrops({img,name,orden,descrption}) {
  return (
    <div className="bg-[var(--surface)] p-8 group hover:bg-[var(--surface-container)] transition-colors duration-500">
                <div className="aspect-square bg-[var(--surface-container-high)] mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="abstract tech clothing jacket with reflective strips and futuristic buckles on a dark background"
                    src={img}
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-headline uppercase tracking-tight">
                    {name}
                  </h3>
                  <span className="text-[var(--primary)] font-headline text-sm font-bold">{orden}</span>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm mb-8 leading-relaxed">
                  {descrption}
                </p>
          <button className="w-full border border-[var(--outline-variant)] py-4 font-headline uppercase tracking-widest text-xs hover:bg-[var(--secondary)] hover:text-[var(--on-secondary)] hover:border-[var(--secondary)] transition-all active:scale-95">
                  QUEUE FOR NOTIFICATION
          </button>
    </div>
  )
}
