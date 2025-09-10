import { caesarCipher } from "../algorithms/caesar";

export const caesarConfig = {
    name: "Cifrado Cesár",
    description: "Cifra y descifra texto usando el método clásico",
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text",
            placeholder: "Escribe tu texto aquí...",
            required: true
        },
        {
            name: "displacement",
            label: "Desplazamiento",
            type: "number",
            min: "0",
            max: "26",
            defaultValue: "3",
            placeholder: "0",
            required: true
        },
        {
            name: "operation",
            label: "Operación",
            type: "select",
            required: true,
            options: [
                { value: "cipher", label: "Cifrar" },
                { value: "decipher", label: "Descifrar" }
            ]
        }
    ],
    algorithm: caesarCipher
};
