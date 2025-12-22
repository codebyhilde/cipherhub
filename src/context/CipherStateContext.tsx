import React, { createContext, useState, useEffect } from "react";
interface CipherStateContextType {
    operation: "cipher" | "decipher";
    setOperation: React.Dispatch<React.SetStateAction<"cipher" | "decipher">>;
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
    shouldCleanInputs: boolean;
    setShouldCleanInputs: React.Dispatch<React.SetStateAction<boolean>>;
    currentAlgorithm: string;
    setCurrentAlgorithm: React.Dispatch<React.SetStateAction<string>>
}

export const CipherStateContext = createContext<
    CipherStateContextType | undefined
>(undefined);

interface CipherProviderProps {
    children: React.ReactNode;
}

export function CipherProvider({ children }: CipherProviderProps) {
    const [result, setResult] = useState<string>("");
    const [operation, setOperation] = useState<"cipher" | "decipher">("cipher");
    const [shouldCleanInputs, setShouldCleanInputs] = useState<boolean>(false);
    const [currentAlgorithm, setCurrentAlgorithm] = useState<string>("");
    
    useEffect(() => {
    if (currentAlgorithm) {
        setResult(""); // Limpiar al cambiar de algoritmo
    }
    }, [currentAlgorithm]);

    
    return (
        <CipherStateContext.Provider
            value={{
                result,
                setResult,
                operation,
                setOperation,
                shouldCleanInputs,
                setShouldCleanInputs,
                currentAlgorithm,
                setCurrentAlgorithm
            }}
        >
            {children}
        </CipherStateContext.Provider>
    );
}
