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
        <button
            className={`
                inline-flex items-center gap-2 
                px-4 py-2 
                rounded-lg 
                border 
                transition-all duration-300 
                font-medium text-sm
                hover:scale-105 active:scale-95
                ${
                    copied
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"
                }
            `}
            onClick={handleCopy}
            aria-label="Copiar al portapapeles"
        >
            {copied ? <BookCopy /> : <Copy />}
            {copied ? "Copiado" : "Copiar"}
        </button>
    );
}
