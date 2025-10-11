import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { vigenereConfig } from "../config/vigenereConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function VigenereView() {
    const { result, operation, handleResult, handleOperation } =
        useCipherState();

    return (
        <AlgorithmLayout
            title={vigenereConfig.name}
            breadcrumbText={vigenereConfig.breadcrumbName}
            description={vigenereConfig.description}
            formContent={
                <CipherForm
                    config={vigenereConfig}
                    onResult={handleResult}
                    onOperation={handleOperation}
                />
            }
            resultContent={
                result && <CipherResult result={result} operation={operation} />
            }
        />
    );
}

export default VigenereView;
