import { NextResponse } from "next/server";
import { esJuegoExigente, getSuggestedProducts } from "@/app/lib/juegosSugeridos";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Falta el id del juego" }, { status: 400 });
    }

    const apiKey = process.env.RAWG_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Configuracion incompleta: FALTA EL API KEY!" }, { status: 500 });
    }

    const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("Error en la API de RAWG:", data.error);
      return NextResponse.json({
        error: `Error en la API de RAWG: ${data.error || "Peticion invalida"}`
      }, { status: response.status || 400 });
    }

    const plataformaConRequisitos = (data.platforms || []).find(
      (p) => p.requirements && (p.requirements.minimum || p.requirements.recommended)
    );

    const resultado = {
      id: data.id,
      nombre: data.name,
      img: data.background_image,
      descripcion: data.description_raw || "",
      requisitos: plataformaConRequisitos
        ? {
            minimo: plataformaConRequisitos.requirements.minimum || null,
            recomendado: plataformaConRequisitos.requirements.recommended || null,
          }
        : null,
    };

    const textoRequisitos = `${resultado.requisitos?.minimo || ""} ${resultado.requisitos?.recomendado || ""}`;
    const exigente = esJuegoExigente(textoRequisitos);
    const sugeridos = getSuggestedProducts({ exigente });

    return NextResponse.json({ success: true, result: resultado, sugeridos });

  } catch (err) {
    console.error(`Error critico en la ruta /api/juegos/detalle: ${err}`);
    return NextResponse.json({ error: err.message || "Error desconocido" }, { status: 500 });
  }
}