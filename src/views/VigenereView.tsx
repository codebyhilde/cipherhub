import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { useResetForm } from "../hooks/useResetForm.ts";
import { vigenereConfig } from "../config/vigenereConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function VigenereView() {
    const { result } = useCipherState();
    const { handleClearClick, handleSetReset } = useResetForm();

    return (
        <AlgorithmLayout
            title={vigenereConfig.name}
            breadcrumbText={vigenereConfig.breadcrumbName}
            description={vigenereConfig.description}
            formContent={
                <CipherForm
                    config={vigenereConfig}
                    onFormReset={handleSetReset}
                />
            }
            resultContent={
                result && <CipherResult handleFormReset={handleClearClick} />
            }
        />
    );
}

export default VigenereView;
