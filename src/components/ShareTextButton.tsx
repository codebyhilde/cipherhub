"use client"

import { useCipherState } from "@/hooks/useCipherState";
import { Share2 } from "lucide-react";

export function ShareTextButton() {
  const { result } = useCipherState();

  // Verificamos si el navegador soporta compartir archivos/texto de forma nativa
  const isShareSupported = typeof navigator !== "undefined" && !!navigator.share;

  const handleShare = async () => {
    // El textarea ya valida que el texto no este vacio, se valida nuevamente por buena práctica
    if (!result) return;
    try {
      await navigator.share({
        title: "Cipherhub",
        text: result,
      });
    } catch (err) {
      // Evitamos loguear error si el usuario simplemente canceló la acción de compartir
      if ((err as Error).name !== "AbortError") {
        console.error("Error al compartir:", err);
      }
    }
  };

  // Si no es compatible, el componente no se muestra para no confundir
  if (!isShareSupported) return null;

  return (
    <button
      className={`
        inline-flex items-center gap-2 
        px-4 py-2 rounded-lg border 
        transition-all duration-300 font-medium text-sm
        ${!result 
          ? "opacity-40 cursor-not-allowed bg-primary/5 border-primary/20 text-primary/50" 
          : "bg-primary/10 border-primary/30 text-primary hover:scale-105 hover:bg-primary/20 active:scale-95"
        }
      `}
      onClick={handleShare}
      disabled={!result}
      aria-label="Compartir texto"
    >
      <Share2 /> Compartir
    </button>
  );
}