// Función para cifrar/descifrar
export function vigenereCipher(
    text: string,
    key: string,
    operation: "cipher" | "decipher"
) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    let keyIndex = 0;
    let result = "";

    // Normalizar la clave a minúsculas
    key = key.toLowerCase();

    // Lógica de cifrado
    for (let char of text) {
        const lowerChar = char.toLowerCase();
        if (ALPHABET.includes(lowerChar)) {
            const charIndex = ALPHABET.indexOf(lowerChar);
            const keyChar = key[keyIndex % key.length]; // Manejo cíclico de la clave
            const shift = ALPHABET.indexOf(keyChar);

            let index;
            if (operation === "cipher") {
                index = (charIndex + shift) % 26;
            } else {
                index = (charIndex - shift + 26) % 26;
            }

            // Mantener mayúsculas/minúsculas originales
            if (char === char.toUpperCase()) {
                result += ALPHABET[index].toUpperCase();
            } else {
                result += ALPHABET[index];
            }

            keyIndex++;
        } else {
            result += char; // Conservar caracteres no alfabéticos
        }
    }

    return result;
}
