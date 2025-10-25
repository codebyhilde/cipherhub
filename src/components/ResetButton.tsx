import { Eraser } from "lucide-react";
import { useCipherState } from "../hooks/useCipherState";

export function ResetButton() {
    const { setResult, setShouldCleanInputs } = useCipherState();
    const clearAll = () => {
        setResult("");
        setShouldCleanInputs(true);
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
                hover:scale-105 active:scale-95 bg-primary/10 border-primary/30 text-primary hover:bg-primary/20
            `}
            onClick={clearAll}
            aria-label="Eliminar todo el texto"
        >
            <Eraser /> Eliminar
        </button>
    );
}
