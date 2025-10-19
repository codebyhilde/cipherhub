import { useState, useCallback } from 'react';

export function useResetForm() {
  const [resetForm, setResetForm] = useState<(() => void) | null>(null);

    const handleSetReset = useCallback((clearFn: () => void) => {
        setResetForm(() => clearFn);
    }, []);

    const handleClearClick = useCallback(() => {
        if (resetForm) {
            resetForm();
        }
    }, [resetForm]);
    
    return {  
      handleClearClick,
      handleSetReset
    }
}