import { vigenereCipher } from "../algorithms/vigenere";

export const vigenereConfig = {
    name: "Cifrado Vigenère",
    description: "Usa una clave para enmascarar tu texto",
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text",
            placeholder: "Escribe tu texto aquí...",
            required: true
        },
        {
            name: "inputKey",
            label: "Clave:",
            type: "text",
            pattern: "[A-Za-z]+",
            title: "Por favor ingrese solo una palabra con caracteres alfabéticos, sin espacios ni números",
            placeholder: "Escribe tu clave aquí...",
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
    algorithm: vigenereCipher
};
