import { caesarCipher } from "../algorithms/caesar";

export const caesarConfig = {
    name: "Cifrado César",
    breadcrumbName: "César",
    description: "El cifrado César es una técnica de cifrado por sustitución en la que cada letra del texto original se reemplaza por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. Por ejemplo, con un desplazamiento de 3, la letra 'A' se reemplazaría por 'D', 'B' se convertiría en 'E', y así sucesivamente. Este método, aunque simple, fue utilizado por Julio César en sus correspondencias secretas.",
    fields: [
        {
            name: "inputText",
            label: "Texto",
            type: "text" as const,
            placeholder: "Escribe tu texto aquí...",
            required: true
        },
        {
            name: "displacement",
            label: "Desplazamiento",
            type: "number" as const,
            min: 0,
            max: 26,
            defaultValue: 3,
            placeholder: "0",
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
    algorithm: caesarCipher
};
