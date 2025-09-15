import { playfairCipher } from "../algorithms/playfair";

export const playfairConfig = {
    name: "Cifrado Playfair",
    description: "Codifica y decodifica digramas usando una matriz generada por clave",
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text",
            pattern: "[a-zA-Z ]*",
            title: "Por favor ingrese solo letras y espacios",
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
    algorithm: playfairCipher
};
