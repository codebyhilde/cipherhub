import { CipherForm } from "../components/CipherForm.tsx";
import { CipherResult } from "../components/CipherResult.tsx";
import { AlgorithmLayout } from "../components/AlgorithmLayout.tsx";
import { caesarConfig } from "../config/caesarConfig.ts";
import { useCipherState } from "../hooks/useCipherState.ts";
import { useEffect } from "react";

function CaesarView() {
    const { result, setCurrentAlgorithm } = useCipherState();

    useEffect(() => {
        setCurrentAlgorithm("caesar");
    }, []);

    return (
        <AlgorithmLayout
            title={caesarConfig.name}
            breadcrumbText={caesarConfig.breadcrumbName}
            description={caesarConfig.description}
            formContent={<CipherForm config={caesarConfig} />}
            resultContent={result && <CipherResult />}
        />
    );
}

export default CaesarView;
