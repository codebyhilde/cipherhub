"use client"

import { CipherForm } from "@/components/CipherForm";
import { CipherResult } from "@/components/CipherResult";
import { AlgorithmLayout } from "@/components/AlgorithmLayout";
import { caesarConfig } from "@/config/caesarConfig";
import { useCipherState } from "@/hooks/useCipherState";
import { useEffect } from "react";

function CaesarPage() {
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

export default CaesarPage;
