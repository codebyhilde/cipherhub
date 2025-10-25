import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { useResetForm } from "../hooks/useResetForm.ts";
import { caesarConfig } from "../config/caesarConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function CaesarView() {
    const { result } = useCipherState();
    const { handleClearClick, handleSetReset } = useResetForm();

    return (
        <AlgorithmLayout
            title={caesarConfig.name}
            breadcrumbText={caesarConfig.breadcrumbName}
            description={caesarConfig.description}
            formContent={
                <CipherForm
                    config={caesarConfig}
                    onFormReset={handleSetReset}
                />
            }
            resultContent={
                result && <CipherResult handleFormReset={handleClearClick} />
            }
        />
    );
}

export default CaesarView;
