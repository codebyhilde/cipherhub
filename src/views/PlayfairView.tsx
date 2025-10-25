import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { useResetForm } from "../hooks/useResetForm.ts";
import { playfairConfig } from "../config/playfairConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function PlayfairView() {
    const { result } = useCipherState();
    const { handleClearClick, handleSetReset } = useResetForm();

    return (
        <AlgorithmLayout
            title={playfairConfig.name}
            breadcrumbText={playfairConfig.breadcrumbName}
            description={playfairConfig.description}
            formContent={
                <CipherForm
                    config={playfairConfig}
                    onFormReset={handleSetReset}
                />
            }
            resultContent={
                result && <CipherResult handleFormReset={handleClearClick} />
            }
        />
    );
}

export default PlayfairView;
