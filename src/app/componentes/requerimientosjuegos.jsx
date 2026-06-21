"use client"
import { useState, useEffect } from "react"
import CardCatalog from "./CardCatalog"

export default function GameRequirements({ game }) {
  const [detalle, setDetalle] = useState(null)
  const [sugeridos, setSugeridos] = useState([])
  const [error, setError] = useState(null)

  const loading = Boolean(game) && !error && (!detalle || detalle.id !== game.id)

  useEffect(() => {
    if (!game) return

    let cancelado = false

    fetch(`/api/juegos/detalle?id=${game.id}`)
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok || data.error) {
          throw new Error(data.error || "Error al obtener los requisitos")
        }
        if (cancelado) return
        setDetalle(data.result)
        setSugeridos(data.sugeridos || [])
        setError(null)
      })
      .catch((err) => {
        if (!cancelado) setError(err.message)
      })

    return () => {
      cancelado = true
    }
  }, [game])

  if (!game) return null

  return (
    <div className="mt-10 space-y-8">
      {loading && <p className="text-[var(--on-surface-variant)]">Cargando requisitos...</p>}
      {error && <p className="text-[var(--error)]">{error}</p>}

      {detalle && (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-start bg-[var(--surface-container)] p-6 rounded-lg">
            {detalle.img && (
              <img src={detalle.img} alt={detalle.nombre} className="w-full md:w-64 rounded-lg object-cover" />
            )}
            <div>
              <h2 className="text-3xl font-headline font-black text-[var(--on-surface)]">{detalle.nombre}</h2>
              {!detalle.requisitos && (
                <p className="text-[var(--on-surface-variant)] mt-2">
                  Este juego no tiene requisitos de sistema cargados en RAWG.
                </p>
              )}
            </div>
          </div>

          {detalle.requisitos && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RequirementCard titulo="MINIMOS" texto={detalle.requisitos.minimo} />
              <RequirementCard titulo="RECOMENDADOS" texto={detalle.requisitos.recomendado} />
            </div>
          )}

          {sugeridos.length > 0 && (
            <div>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight text-[var(--on-surface)] mb-4">
                Mejora tu setup para este juego
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sugeridos.map((p) => (
                  <CardCatalog
                    key={p.id}
                    nameP={p.nombre}
                    img={p.img}
                    alt={p.category}
                    price={p.precio}
                    text2={p.descripcion}
                    text1={p.text1}
                    enlace={p.enlace}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function RequirementCard({ titulo, texto }) {
  return (
    <div className="bg-[var(--surface-container-high)] p-6 rounded-lg border border-[var(--outline-variant)]/30">
      <span className="text-[10px] tracking-[0.3em] text-[var(--secondary)] font-bold uppercase block mb-3">
        {titulo}
      </span>
      {texto ? (
        <p className="text-sm text-[var(--on-surface-variant)] whitespace-pre-line leading-relaxed">
          {texto}
        </p>
      ) : (
        <p className="text-sm text-[var(--on-surface-variant)]">No especificado</p>
      )}
    </div>
  )
}