import type { Metadata } from "next";
import localFont from "next/font/local";
import { CipherProvider } from "@/context/CipherStateContext";
import "./globals.css";

// Configuración de las fuentes
const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cipherhub — Cifrados Clásicos, Arquitectura Moderna",
  description: "Explora y experimenta con la encriptación clásica de forma interactiva. Cifra y descifra mensajes usando César, Vigenère y Playfair con una interfaz retro moderna.",
  keywords: ["criptografía clásica", "criptografía", "cifrado cesar", "vigenere", "playfair", "cipherhub", "seguridad"],
  authors: [{ name: "Hildemar González" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.variable}>
        <CipherProvider>
          {children}
        </CipherProvider>
      </body>
    </html>
  );
}
