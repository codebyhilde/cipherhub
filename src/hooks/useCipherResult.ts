import { useState } from "react";
import type { CipherConfig } from "../types/components/forms";

interface useCipherResultArgs {
    config: CipherConfig;
    onResult: (result: string) => void;
    onOperation: (operation: "cipher" | "decipher") => void;
}

export function useCipherResult({
    config,
    onResult,
    onOperation
}: useCipherResultArgs) {
    const [values, setValues] = useState<Record<string, any>>(
        config.fields.reduce(
            (acc, field) => {
                acc[field.name] = field.defaultValue ?? "";
                return acc;
            },
            {} as Record<string, any>
        )
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const args = config.fields.map(field => {
            if (field.type === "number") {
                const value = values[field.name];
                return Number(value);
            }
            return values[field.name];
        });
        const result = (config.algorithm as Function)(...args);
        onResult(result);
        onOperation(values["operation"]);
    };

    return {
        values,
        handleChange,
        handleSubmit
    };
}
