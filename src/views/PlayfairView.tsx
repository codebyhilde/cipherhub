import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { playfairConfig } from "../config/playfairConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";

function PlayfairView() {
    const { result } = useCipherState();

    return (
        <AlgorithmLayout
            title={playfairConfig.name}
            breadcrumbText={playfairConfig.breadcrumbName}
            description={playfairConfig.description}
            formContent={<CipherForm config={playfairConfig} />}
            resultContent={result && <CipherResult />}
        />
    );
}

export default PlayfairView;
