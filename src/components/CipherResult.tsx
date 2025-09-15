import { Lock, LockOpen } from "lucide-react";
import { CopyButton } from "./CopyButton.tsx";

interface CipherResultProps {
    result: string;
    operation: "cipher" | "decipher";
}

export function CipherResult({ result, operation }: CipherResultProps) {
    return (
        <div className="result-container">
            <div className="result-header">
                <h3>
                    {operation === "cipher" ? <Lock /> : <LockOpen />}{" "}
                    Resultado:
                </h3>
                <CopyButton text={result} />
            </div>
            <p>{result}</p>
        </div>
    );
}
