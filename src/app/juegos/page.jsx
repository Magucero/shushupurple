"use client"
import { useState } from "react"
import GameSearch from "../componentes/buscadorjuego"
import GameRequirements from "../componentes/requerimientosjuegos"

export default function Juegos() {
  const [juegoElegido, setJuegoElegido] = useState(null)

  return (
    <section className="flex-1 p-8 max-w-5xl mx-auto">
      <div className="mb-10">
        <span className="text-[10px] tracking-[0.4em] text-[var(--secondary)] font-bold uppercase mb-2 block">
          REQUISITOS
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none mb-4">
          Que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)]">necesitas</span>
        </h1>
        <p className="text-[var(--on-surface-variant)] max-w-xl">
          Busca tu juego, revisa los requisitos minimos y recomendados, y te
          mostramos que productos del catalogo te sirven para armar el setup.
        </p>
      </div>

      <GameSearch onSelectGame={setJuegoElegido} />
      <GameRequirements game={juegoElegido} />
    </section>
  )
}