import React from 'react'
import AddToCar from './AddToCar'

export default function  CardHome({img,alt,nameP,price,text1,text2}){
  return (
        <div className="bg-[var(--surface-container-high)] relative group">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={img}
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[var(--secondary)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--on-secondary)]">{text1}</span>
                <span className="text-[var(--primary)] font-headline font-black">${price}</span>
              </div>

              <h4 className="font-headline font-bold text-lg uppercase tracking-tight">{nameP}</h4>
              <p className="text-[var(--on-surface-variant)] text-xs mt-1 uppercase tracking-widest">{text2}</p>

              <AddToCar
                nombre={nameP}
                img={img}
                precio={price}
                style={"w-full mt-6 border border-[var(--outline-variant)] py-3 font-label text-sm uppercase tracking-[0.2em] hover:bg-[var(--on-surface)] hover:text-[var(--surface)] transition-colors"}
                nameBoton = {"Add"}
              
              />
            </div>
        </div>
  )
}
        
        
        
        
        
        
        
        
        
        