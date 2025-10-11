import { Lock, LockOpen } from "lucide-react";
import { CopyButton } from "./CopyButton.tsx";

interface CipherResultProps {
    result: string;
    operation: "cipher" | "decipher";
}

export function CipherResult({ result, operation }: CipherResultProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="result-header">
                <h3 className="text-xl flex gap-1 font-bold uppercase tracking-wider text-primary mb-2">
                    {operation === "cipher" ? <Lock /> : <LockOpen />}{" "}
                    Resultado:
                </h3>
                <CopyButton text={result} />
            </div>
            <textarea className="w-full p-3 bg-background-dark/70 dark:bg-background-light/10 border border-primary/30 rounded placeholder-white/40 text-white font-mono" placeholder="El resultado aparecerá aquí..." readonly="" rows="6" value={result}></textarea>
        </div>
    );
}
