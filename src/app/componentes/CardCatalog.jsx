import React from 'react'
import Link from 'next/link'
import AddToCar from './AddToCar'

export default function  CardCatalog({img,alt,nameP,price,text1,text2,enlace}){
  return (
        <Link href={enlace}>
            <div className="group relative bg-[var(--surface-container-high)] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border border-[var(--secondary)]/0 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none"></div>
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--surface-container)]">
                <img alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src={img}/>
                <div className="absolute top-4 right-4">
                  <span className="bg-[var(--surface-container-lowest)]/80 backdrop-blur-md border border-[var(--tertiary)]/30 text-[var(--tertiary)] px-3 py-1 font-label text-[10px] tracking-widest uppercase">{text1}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-xl tracking-tight leading-none group-hover:text-[var(--secondary)] transition-colors">{nameP}</h3>
                  <div className="flex items-center gap-1 text-[var(--secondary)]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label text-xs">5.0</span>
                  </div>
                </div>
                <p className="text-[var(--on-surface-variant)] text-sm line-clamp-2 font-light">{text2}</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-headline font-black text-[var(--primary)]">${price}.00</span>
                  <AddToCar
                    nombre={nameP}
                    img={img}
                    precio={price}
                    style={"bg-[var(--primary)] text-[var(--on-primary)] p-3 transition-all active:scale-95"}
                    nameBoton = {"Add"}
                />
                

                </div>
              </div>
            </div>
            </Link>
              
  )
}
 