interface CipherHeaderProps {
    cipherName: string;
}

export function CipherHeader({ cipherName }: CipherHeaderProps) {
    return (
        <header className="p-4">
            <div className="flex items-center justify-between">
                <img alt="Cipherhub Logo" className="h-8 w-auto" src="" />
                <nav className="text-xs font-bold uppercase tracking-widest text-primary">
                    CIPHERHUB / {cipherName ?? "Cifrado"}
                </nav>
            </div>
        </header>
    );
}
