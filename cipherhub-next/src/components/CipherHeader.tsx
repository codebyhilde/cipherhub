import Link from "next/link";
import { Logo } from "./Logo";

interface CipherHeaderProps {
    cipherName: string;
}

export function CipherHeader({ cipherName }: CipherHeaderProps) {
    return (
        <header className="p-4">
            <div className="flex items-center justify-between">
                <nav className="text-xs font-bold uppercase tracking-widest text-primary">
                    <Link href="/" className="hover:underline decoration-primary/40 underline-offset-4">
                        CIPHERHUB
                    </Link>
                    <span className="text-primary/50">/</span>
                    <span className="text-white">{cipherName ?? "Cifrado"}</span>
                </nav>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
        </header>
    );
}
