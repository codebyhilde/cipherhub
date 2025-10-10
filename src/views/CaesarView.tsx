import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { caesarConfig } from "../config/caesarConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function CaesarView() {
    const { result, operation, handleResult, handleOperation } =
        useCipherState();

    return (
        <AlgorithmLayout
            title="César"
            description={caesarConfig.description}
            formContent={
                <CipherForm
                    config={caesarConfig}
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

export default CaesarView;
