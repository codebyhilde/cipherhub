import { useState } from "react";
import { Copy, BookCopy } from "lucide-react";

interface CopyButtonProps {
    text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset después de dos segundos
        } catch (err) {
            console.error("Error al copiar:", err);
        }
    };

    return (
        <button className="copy-btn" onClick={handleCopy} aria-label="Copiar al portapapeles">
            {copied ? <BookCopy /> : <Copy />}
            {copied ? "Copiado" : "Copiar"}
        </button>
    );
}
