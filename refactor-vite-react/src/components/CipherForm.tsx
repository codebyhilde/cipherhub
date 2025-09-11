import { useState, FormEvent } from "react";
import { KeyRound } from "lucide-react";

type FieldOption = {
    value: string;
    label: string;
};

type FieldConfig = {
    name: string;
    label: string;
    type: "text" | "number" | "select";
    required?: boolean;
    min?: number;
    max?: number;
    defaultValue?: string | number;
    placeholder?: string;
    options?: FieldOption[];
};

interface CipherConfig {
    name: string;
    description: string;
    fields: FieldConfig[];
    algorithm: (...args: (string | number)[]) => string;
}

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const args = config.fields.map(field => {
            if (field.type === "number") {
                const value = values[field.name];
                return Number(value);
            }
            return values[field.name];
        });
        const result = config.algorithm(...args);
        onResult(result);
        onOperation(values["operation"]);
    };

    return (
        <form onSubmit={handleSubmit}>
            {config.fields.map(field => (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>

                    {field.type === "select" ? (
                        <select
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
                </div>
            ))}

            <button type="submit">
                <KeyRound size={17} color="yellow" /> Procesar
            </button>
        </form>
    );
}
