export type FieldOption = {
    value: string;
    label: string;
};

export type FieldConfig = {
    name: string;
    label: string;
    type: "text" | "number" | "select";
    required?: boolean;
    min?: number;
    max?: number;
    defaultValue?: string | number;
    pattern?: string;
    title?: string;
    placeholder?: string;
    options?: FieldOption[];
};

export type CipherAlgorithm = 
  | ((text: string, displacement: number, operation: "cipher" | "decipher") => string)
  | ((text: string, key: string, operation: "cipher" | "decipher") => string);

export interface CipherConfig {
    name: string;
    description: string;
    fields: FieldConfig[];
    algorithm: CipherAlgorithm;
}
