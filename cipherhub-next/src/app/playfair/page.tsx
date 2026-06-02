import type { Metadata } from "next"
import { PlayfairClientView } from "./PlayfairClientView";

export const metadata: Metadata = {
  title: "Cifrado Playfair Interactivo — Cipherhub",
  description: "Explora el cifrado polialfabético digrámico de Playfair. Aprende cómo se genera la matriz de 5x5 basada en una palabra clave para encriptar pares de letras.",
  keywords: ["cifrado playfair", "digramico", "matriz 5x5", "criptografia clasica", "cipherhub"],
};

export default function CaesarPage() {
    return <PlayfairClientView />;
}