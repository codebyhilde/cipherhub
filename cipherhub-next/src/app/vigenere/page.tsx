"use client"

import { CipherForm } from "@/components/CipherForm";
import { CipherResult } from "@/components/CipherResult";
import { AlgorithmLayout } from "@/components/AlgorithmLayout";
import { vigenereConfig } from "@/config/vigenereConfig";
import { useCipherState } from "@/hooks/useCipherState";
import { useEffect } from "react";

function VigenerePage() {
    const { result, setCurrentAlgorithm } = useCipherState();

    useEffect(() => {
        setCurrentAlgorithm("vigenere");
    }, []);

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

export default VigenerePage;
