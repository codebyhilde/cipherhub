import { useState, useMemo, useCallback } from "react";
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
    const initialValues = useMemo(() => {
        return config.fields.reduce(
            (acc, field) => {
                acc[field.name] = field.defaultValue ?? "";
                return acc;
            },
            {} as Record<string, any>
        );
    }, [config.fields]);

    const [values, setValues] = useState<Record<string, any>>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const getValidationError = (
        name: string,
        value: string
    ): string | undefined => {
        const fieldConfig = config.fields.find(f => f.name === name);
        if (!fieldConfig) return;

        if (fieldConfig.required && value === "") {
            return "Este campo es requerido";
        } else if (fieldConfig.pattern && value !== "") {
            const regex = new RegExp(fieldConfig.pattern);
            if (!regex.test(value)) {
                return fieldConfig.title || "Formato inválido";
            }
        }
        return undefined;
    };

    const validateField = (name: string, value: string) => {
        const error = getValidationError(name, value);
        setErrors(prev => {
            const newErrors = { ...prev };
            if (error) {
                newErrors[name] = error;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (value.startsWith(" ")) return;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));

        validateField(name, value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};
        config.fields.forEach(field => {
            const error = getValidationError(field.name, values[field.name]);
            if (error) {
                newErrors[field.name] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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

    const clearValues = useCallback(() => {
        setValues(() => initialValues);
        setErrors({});
    }, [initialValues]);

    return {
        values,
        handleChange,
        handleSubmit,
        errors,
        clearValues
    };
}
