import type { Metadata } from "next"
import { CaesarClientView } from "./CaesarClientView";

export const metadata: Metadata = {
  title: "Cifrado César interactivo — Cipherhub",
  description: "Cifra y descifra mensajes utilizando el clásico algoritmo de desplazamiento de César. Ajusta la clave en tiempo real con nuestra intuitiva interfaz retro.",
  keywords: ["cifrado cesar", "desplazamiento", "criptografia clasica", "cipherhub", "julio cesar", "cifrado monoalfabetico"],
};

export default function CaesarPage() {
    return <CaesarClientView />;
}