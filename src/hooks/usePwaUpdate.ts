import { useRegisterSW } from "virtual:pwa-register/react";

/**
 * Hook personalizado para manejar el estado de la actualización de la PWA
 * Escucha al Service Worker para detectar cuando hay una nueva versión esperando
 */
export function usePwaUpdate() {
    const {
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker
    } = useRegisterSW({
        // Callback que se ejecuta cuando Workbox detecta una nueva versión y esta pasa al estado 'waiting'
        onNeedRefresh() {
            setNeedRefresh(true);
        },
        // Para debugging
        onRegistered(registration) {
            if (registration) {
                if (import.meta.env.DEV) {
                    console.log(
                        "SW registrado en el scope:",
                        registration.scope
                    );
                }
            }
        }
    });

    /**
     * Función que el componente de UI llamará para activar la actualización.
     * Al pasar 'true' a 'updateServiceWorker', se ejecuta el método skipWaiting() del nuevo Service Worker, forzando su activación.
     */
    const handleUpdate = () => {
        updateServiceWorker(true);
        setNeedRefresh(false);
    };

    return { needRefresh, handleUpdate };
}
