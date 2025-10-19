import { Lock, LockOpen } from "lucide-react";
import { CopyButton } from "./CopyButton.tsx";
import { ResetButton } from "./ResetButton.tsx";

interface CipherResultProps {
    result: string;
    operation: "cipher" | "decipher";
    handleClearResult: () => void;
    handleFormReset: () => void;
}

export function CipherResult({
    result,
    operation,
    handleClearResult,
    handleFormReset
}: CipherResultProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="result-header">
                <h3 className="text-xl flex gap-1 font-bold uppercase tracking-wider text-primary mb-2">
                    {operation === "cipher" ? <Lock /> : <LockOpen />}{" "}
                    Resultado:
                </h3>
                <div className="flex justify-around gap-3">
                    <CopyButton text={result} />
                    <ResetButton
                        onClearResult={handleClearResult}
                        onResetForm={handleFormReset}
                    />
                </div>
            </div>
            <textarea
                className="w-full p-3 bg-background-dark/70 dark:bg-background-light/10 border border-primary/30 rounded placeholder-white/40 text-white font-mono"
                placeholder="El resultado aparecerá aquí..."
                readOnly
                rows={6}
                value={result}
            ></textarea>
        </div>
    );
}
