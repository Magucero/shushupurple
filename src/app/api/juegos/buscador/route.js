import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim();

    if (!q) {
      return NextResponse.json({ success: true, result: [] });
    }

    const apiKey = process.env.RAWG_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Configuracion incompleta: FALTA EL API KEY!" }, { status: 500 });
    }

    const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(q)}&page_size=10`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("Error en la API de RAWG:", data.error);
      return NextResponse.json({
        error: `Error en la API de RAWG: ${data.error || "Peticion invalida"}`
      }, { status: response.status || 400 });
    }

    const juegos = (data.results || []).map((g) => ({
      id: g.id,
      nombre: g.name,
      img: g.background_image,
      plataformas: (g.platforms || []).map((p) => p.platform.name),
    }));

    return NextResponse.json({ success: true, result: juegos });

  } catch (err) {
    console.error(`Error critico en la ruta /api/juegos/buscador: ${err}`);
    return NextResponse.json({ error: err.message || "Error desconocido" }, { status: 500 });
  }
}