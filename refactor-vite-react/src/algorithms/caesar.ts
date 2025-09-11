// Función para cifrar/descifrar
export function caesarCipher(
    text: string,
    displacement: number,
    operation: "cipher" | "decipher"
) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const UPPER_ALPHABET = ALPHABET.toUpperCase();
    let result = "";

    // Lógica de cifrado
    for (let char of text) {
        if (ALPHABET.includes(char)) {
            const base = ALPHABET;
            const index =
                (base.indexOf(char) +
                    displacement * (operation === "cipher" ? 1 : -1) +
                    26) %
                26;
            result += base[index];
        } else if (UPPER_ALPHABET.includes(char)) {
            const base = UPPER_ALPHABET;
            const index =
                (base.indexOf(char) +
                    displacement * (operation === "cipher" ? 1 : -1) +
                    26) %
                26;
            result += base[index];
        } else {
            result += char; // Mantener caracteres no alfabéticos
        }
    }

    return result;
}
