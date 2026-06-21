"use client"
import { useState, useEffect } from "react"

export default function GameSearch({ onSelectGame }) {
  const [query, setQuery] = useState("")
  const [opciones, setOpciones] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query.trim()) {
      setOpciones([])
      return
    }

    setLoading(true)
    setError(null)

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`/api/juegos/buscador?q=${encodeURIComponent(query)}`)
        const data = await response.json()

        if (!response.ok || data.error) {
          throw new Error(data.error || "Error al buscar juegos")
        }

        setOpciones(data.result)
      } catch (err) {
        setError(err.message)
        setOpciones([])
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [query])

  const handleSelect = (e) => {
    const id = e.target.value
    if (!id) return
    const juego = opciones.find((g) => String(g.id) === id)
    if (juego) onSelectGame(juego)
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar juego (ej: Cyberpunk 2077)..."
        className="w-full bg-[var(--surface-container)] border border-[var(--outline-variant)] px-4 py-3
        rounded outline-none focus:border-[var(--primary)] text-[var(--on-surface)]"
      />

      {loading && (
        <p className="text-sm text-[var(--on-surface-variant)]">Buscando...</p>
      )}

      {error && (
        <p className="text-sm text-[var(--error)]">{error}</p>
      )}

      {!loading && opciones.length > 0 && (
        <select
          onChange={handleSelect}
          defaultValue=""
          className="w-full bg-[var(--surface-container)] border border-[var(--outline-variant)] px-4 py-3
          rounded outline-none focus:border-[var(--primary)] text-[var(--on-surface)] cursor-pointer"
        >
          <option value="" disabled>Elegi un juego de la lista ({opciones.length} resultados)</option>
          {opciones.map((g) => (
            <option key={g.id} value={g.id}>
              {g.nombre} {g.plataformas.length ? `— ${g.plataformas.join(", ")}` : ""}
            </option>
          ))}
        </select>
      )}

      {!loading && query.trim() && opciones.length === 0 && !error && (
        <p className="text-sm text-[var(--on-surface-variant)]">Sin resultados para &quot;{query}&quot;</p>
      )}
    </div>
  )
}