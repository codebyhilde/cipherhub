import { vigenereCipher } from "../algorithms/vigenere";

export const vigenereConfig = {
    name: "Cifrado Vigenère",
    breadcrumbName: "Vigenère",
    description: `El cifrado Vigenère es una evolución del cifrado por sustitución simple (como el César) que utiliza una palabra clave para definir desplazamientos variables en el alfabeto.

A diferencia del César, donde cada letra se desplaza uniformemente, en Vigenère cada letra del texto original se desplaza según el valor de la letra correspondiente en la clave (por ejemplo, A=0, B=1, etc.). La palabra clave se repite cuanto sea necesario para alcanzar la longitud del texto a cifrar, generando una secuencia de desplazamientos diferentes en cada letra, lo que lo convierte en un cifrado polialfabético.

Por ejemplo, con la clave "CLAVE" y el texto "HOLA":

• La primera letra del texto se desplaza según C (valor 2).

• La segunda letra se desplaza según L (valor 11).

• La tercera según A (valor 0), y así sucesivamente.

El método Vigenère fue considerado "indescifrable" durante más de dos siglos gracias a su resistencia al análisis de frecuencia. Este hito técnico lo convirtió en uno de los cifrados más usados en ámbitos militares y diplomáticos. Fue finalmente vulnerado en el siglo XIX, lo que marcó el final de su uso práctico, pero su principio polialfabético sentó las bases para la criptografía moderna.`,
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text" as const,
            placeholder: "Escribe tu texto aquí...",
            required: true
        },
        {
            name: "inputKey",
            label: "Clave:",
            type: "text" as const,
            pattern: "[A-Za-z]+",
            title: "Por favor ingrese solo una palabra con caracteres alfabéticos, sin espacios ni números",
            placeholder: "Escribe tu clave aquí...",
            required: true
        },
        {
            name: "operation",
            label: "Operación",
            type: "select" as const,
            required: true,
            options: [
                { value: "cipher", label: "Cifrar" },
                { value: "decipher", label: "Descifrar" }
            ]
        }
    ],
    algorithm: vigenereCipher
};
