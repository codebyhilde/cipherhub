import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { playfairConfig } from "../config/playfairConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function PlayfairView() {
    const { result, operation, handleResult, handleOperation } =
        useCipherState();

    return (
        <AlgorithmLayout
            title={playfairConfig.name}
            breadcrumbText={playfairConfig.breadcrumbName}
            description={playfairConfig.description}
            formContent={
                <CipherForm
                    config={playfairConfig}
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

export default PlayfairView;
