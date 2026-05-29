import { Lock, LockOpen } from "lucide-react";
import { CopyButton } from "./CopyButton.tsx";
import { useCipherState } from "../hooks/useCipherState.ts";
import { ResetButton } from "./ResetButton.tsx";
import { ShareTextButton } from "./ShareButton.tsx";
export function CipherResult() {
    const { result, operation } = useCipherState();

    return (
        <div className="flex flex-col gap-2">
            <div className="result-header">
                <h3 className="text-xl flex gap-1 font-bold uppercase tracking-wider text-primary mb-2">
                    {operation === "cipher" ? <Lock /> : <LockOpen />}{" "}
                    Resultado:
                </h3>
                <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
                    <CopyButton text={result} />
                    <ShareTextButton />
                    <ResetButton />
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
