import { useContext } from "react";
import { CipherStateContext } from "../context/CipherStateContext.tsx";

export function useCipherState() {
    const context = useContext(CipherStateContext);

    if (context === undefined) {
        throw new Error("useCipherState must be used within a CipherProvider");
    }

    return context;
}
