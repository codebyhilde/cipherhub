import { useState } from "react";
import { CipherInputLabel } from "./CipherInputLabel";
import type { CipherConfig } from "../types/components/forms";

interface CipherFormProps {
    config: CipherConfig;
    onResult: (result: string) => void;
    onOperation: (operation: "cipher" | "decipher") => void;
}

export function CipherForm({ config, onResult, onOperation }: CipherFormProps) {
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

    return (
        <form onSubmit={handleSubmit}>
            {config.fields.map(field => (
                <div className="mb-2" key={field.name}>
                    <CipherInputLabel
                        key={field.name}
                        name={field.name}
                        content={field.label}
                    />

                    {field.type === "select" ? (
                        <select
                            className="w-full p-3 bg-background-dark/70 dark:bg-background-light/10 border border-primary/30 rounded focus:border-primary focus:ring-primary text-white font-mono"
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            value={values[field.name]}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Selecciona una opción
                            </option>
                            {field.options?.map(opt => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            className="w-full p-3 bg-background-dark/70 dark:bg-background-light/10 border border-primary/30 rounded focus:border-primary focus:ring-primary placeholder-white/40 text-white font-mono"
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            min={field.min}
                            max={field.max}
                            pattern={field.pattern}
                            title={field.title}
                            placeholder={field.placeholder}
                            value={values[field.name]}
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}

            <button
                type="submit"
                className="w-full py-4 text-center font-bold text-lg uppercase tracking-wider bg-primary text-background-dark rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-[0_0_15px_rgba(6,234,74,0.5)]"
            >
                Procesar
            </button>
        </form>
    );
}
