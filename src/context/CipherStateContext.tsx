import React, { createContext, useState } from "react";
interface CipherStateContextType {
    operation: "cipher" | "decipher";
    setOperation: React.Dispatch<React.SetStateAction<"cipher" | "decipher">>;
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
    shouldCleanInputs: boolean;
    setShouldCleanInputs: React.Dispatch<React.SetStateAction<boolean>>;
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

    return (
        <CipherStateContext.Provider
            value={{
                result,
                setResult,
                operation,
                setOperation,
                shouldCleanInputs,
                setShouldCleanInputs
            }}
        >
            {children}
        </CipherStateContext.Provider>
    );
}
