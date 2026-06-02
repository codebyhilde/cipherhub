import type { Metadata } from "next";
import { VigenereClientView } from "./VigenereClientView";

export const metadata: Metadata = {
  title: "Cifrado Vigenère Interactivo — Cipherhub",
  description: "Cifra y descifra mensajes utilizando el algoritmo polialfabético de Vigenère. Descubre cómo romper la frecuencia de caracteres usando una palabra clave interactiva.",
  keywords: ["cifrado vigenere", "polialfabetico", "criptografia clasica", "clave vigenere", "cipherhub"],
};

export default function VigenerePage() {
  return <VigenereClientView />;
}
