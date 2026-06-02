"use client"

import { CipherInputLabel } from "./CipherInputLabel";
import { useEffect } from "react";
import { useCipherResult } from "@/hooks/useCipherResult";
import { useCipherState } from "@/hooks/useCipherState";
import type { CipherConfig } from "@/types/components/forms";

interface CipherFormProps {
    config: CipherConfig;
}

export function CipherForm({ config }: CipherFormProps) {
    const { values, handleChange, handleSubmit, errors, clearValues } =
        useCipherResult({
            config
        });
    const { shouldCleanInputs, setShouldCleanInputs } = useCipherState();

    useEffect(() => {
        if (shouldCleanInputs) {
            clearValues();
            setShouldCleanInputs(false);
        }
    }, [shouldCleanInputs, setShouldCleanInputs]);

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
                            className="w-full p-3 bg-background-dark/70 border border-primary/30 rounded focus:border-primary focus:ring-primary text-white font-mono"
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
                            className="w-full p-3 bg-background-dark/70 border border-primary/30 rounded focus:border-primary focus:ring-primary placeholder-white/40 text-white font-mono"
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            min={field.min}
                            max={field.max}
                            placeholder={field.placeholder}
                            value={values[field.name]}
                            onChange={handleChange}
                        />
                    )}
                    {errors[field.name] ? (
                        <p className="text-red-700">{errors[field.name]}</p>
                    ) : null}
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
