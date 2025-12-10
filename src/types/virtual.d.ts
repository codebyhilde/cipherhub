declare module 'virtual:pwa-register/react' {
  import { Dispatch, SetStateAction } from 'react';

  export interface RegisterSWOptions {
    onNeedRefresh?: () => void;
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
    onRegisteredError?: (error: any) => void;
    immediate?: boolean;
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}