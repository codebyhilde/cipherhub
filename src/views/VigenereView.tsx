import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { vigenereConfig } from "../config/vigenereConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function VigenereView() {
    const { result } = useCipherState();

    return (
        <AlgorithmLayout
            title={vigenereConfig.name}
            breadcrumbText={vigenereConfig.breadcrumbName}
            description={vigenereConfig.description}
            formContent={<CipherForm config={vigenereConfig} />}
            resultContent={result && <CipherResult />}
        />
    );
}

export default VigenereView;
