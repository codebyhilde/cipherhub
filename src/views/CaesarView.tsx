import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { useResetForm } from "../hooks/useResetForm.ts";
import { caesarConfig } from "../config/caesarConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function CaesarView() {
    const {
        result,
        operation,
        handleResult,
        handleOperation,
        handleClearResult
    } = useCipherState();
    const { handleClearClick, handleSetReset } = useResetForm();

    return (
        <AlgorithmLayout
            title={caesarConfig.name}
            breadcrumbText={caesarConfig.breadcrumbName}
            description={caesarConfig.description}
            formContent={
                <CipherForm
                    config={caesarConfig}
                    onResult={handleResult}
                    onOperation={handleOperation}
                    onFormReset={handleSetReset}
                />
            }
            resultContent={
                result && (
                    <CipherResult
                        result={result}
                        operation={operation}
                        handleClearResult={handleClearResult}
                        handleFormReset={handleClearClick}
                    />
                )
            }
        />
    );
}

export default CaesarView;
