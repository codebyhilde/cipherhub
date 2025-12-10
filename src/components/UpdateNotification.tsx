import { usePwaUpdate } from "../hooks/usePwaUpdate";
import { Sparkles, RotateCcw } from "lucide-react";

export function UpdateNotification() {
    const { needRefresh, handleUpdate } = usePwaUpdate();

    // No renderizar nada si no hay una actualización pendiente
    if (!needRefresh) {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 p-4 bg-primary text-background-dark rounded-lg shadow-2xl transition-all duration-500 animate-slideUp">
            <div className="flex justify-between items-center space-x-4">
                <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <p className="font-bold text-base">
                        ¡Cipherhub tiene una actualización!
                    </p>
                </div>
                <button
                    onClick={handleUpdate}
                    className="flex items-center space-x-2 py-1.5 px-4 bg-background-dark text-primary font-semibold rounded-md hover:bg-background-dark/80 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span>Recargar</span>
                </button>
            </div>
        </div>
    );
}
