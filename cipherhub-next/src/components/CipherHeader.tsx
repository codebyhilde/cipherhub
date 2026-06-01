import { Logo } from "./Logo";

interface CipherHeaderProps {
    cipherName: string;
}

export function CipherHeader({ cipherName }: CipherHeaderProps) {
    return (
        <header className="p-4">
            <div className="flex items-center justify-between">
                <nav className="text-xs font-bold uppercase tracking-widest text-primary">
                    CIPHERHUB / {cipherName ?? "Cifrado"}
                </nav>
                <Logo />
            </div>
        </header>
    );
}
