"use client"

import { CipherForm } from "@/components/CipherForm";
import { CipherResult } from "@/components/CipherResult";
import { AlgorithmLayout } from "@/components/AlgorithmLayout";
import { playfairConfig } from "@/config/playfairConfig";
import { useCipherState } from "@/hooks/useCipherState";
import { useEffect } from "react";

export function PlayfairClientView() {
    const { result, setCurrentAlgorithm } = useCipherState();

    useEffect(() => {
        setCurrentAlgorithm("playfair");
    }, []);

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
