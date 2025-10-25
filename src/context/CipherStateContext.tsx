import React, { createContext, useState } from "react";

interface CipherStateContextType {
    operation: "cipher" | "decipher";
    setOperation: React.Dispatch<React.SetStateAction<"cipher" | "decipher">>;
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
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

    return (
        <CipherStateContext.Provider
            value={{ result, setResult, operation, setOperation }}
        >
            {children}
        </CipherStateContext.Provider>
    );
}
