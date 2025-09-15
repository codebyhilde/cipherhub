import { useState } from "react";

export function useCipherState() {
    const [result, setResult] = useState("");
    const [operation, setOperation] = useState<"cipher" | "decipher">("cipher");

    const handleResult = (value: string) => setResult(value);
    const handleOperation = (value: "cipher" | "decipher") =>
        setOperation(value);

    return {
        result,
        operation,
        handleResult,
        handleOperation
    };
}
