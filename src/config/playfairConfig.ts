import { playfairCipher } from "../algorithms/playfair";

export const playfairConfig = {
    name: "Cifrado Playfair",
    breadcrumbName: "Playfair",
    description:
        `El cifrado Playfair es un método de sustitución poligráfica que, a diferencia de César o Vigenère (que cifran letra por letra), cifra el mensaje agrupando el texto claro en pares de letras (dígramas).

Su funcionamiento se basa en una matriz de 5×5 (que omite la 'J', reemplazandola por una 'I' para mantener 25 letras) que se construye usando una palabra clave. Cada par de letras del texto original se localiza en la matriz, y su par cifrado se determina aplicando una de tres reglas geométricas sencillas:

• Misma fila: Se sustituyen por las letras inmediatamente a la derecha (a la izquierda al descifrar).

• Misma columna: Se sustituyen por las letras inmediatamente debajo (arriba al descifrar).

• Diferente fila/columna: Se sustituyen por las letras que forman el vértice opuesto del rectángulo creado por el dígrama.

Esto lo convierte en un sistema más robusto que los cifrados monoalfabéticos, ya que el análisis de frecuencia debe realizarse sobre pares de letras (dígramas) y no sobre letras individuales. Inventado por Charles Wheatstone en 1854 y popularizado por Lord Playfair, fue el primer cifrado poligráfico práctico y se utilizó para comunicaciones militares tácticas hasta la Primera Guerra Mundial.`,
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text" as const,
            pattern: "^[a-zA-Z ]*",
            title: "Por favor ingrese solo letras y espacios",
            placeholder: "Escribe tu texto aquí...",
            required: true
        },
        {
            name: "inputKey",
            label: "Clave:",
            type: "text" as const,
            pattern: "^[A-Za-z]+$",
            title: "Por favor ingrese una única palabra con caracteres alfabéticos, exceptuando la ñ. Sin espacios ni números",
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
    algorithm: playfairCipher
};
