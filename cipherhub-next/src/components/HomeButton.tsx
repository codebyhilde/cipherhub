import Link from "next/link";
import { House } from "lucide-react";

export function HomeButton() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center p-2 text-white/60 hover:text-primary transition-colors"><House/> Inicio
    </Link>
  )
}