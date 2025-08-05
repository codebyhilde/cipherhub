// Función para cifrar/descifrar
function vigenereCipher(text, key, operation) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let keyIndex = 0;
    let result = "";
    
    // Normalizar la clave a minúsculas
    key = key.toLowerCase();
    
    // Lógica de cifrado
    for (let char of text) {
        const lowerChar = char.toLowerCase();
        if (alphabet.includes(lowerChar)) {
            const charIndex = alphabet.indexOf(lowerChar);
            const keyChar = key[keyIndex % key.length]; // Manejo cíclico de la clave
            const shift = alphabet.indexOf(keyChar);
            
            let index;
            if (operation === "cipher") {
                index = (charIndex + shift) % 26;
            } else {
                index = ((charIndex - shift) + 26) % 26;
            }
            
            // Mantener mayúsculas/minúsculas originales
            if (char === char.toUpperCase()) {
                result += alphabet[index].toUpperCase();
            } else {
                result += alphabet[index];
            }
            
            keyIndex++;
        } else {
            result += char; // Conservar caracteres no alfabéticos
        }
    }
    
    return result;
}

console.log(vigenereCipher("Hola, como estás?", "key", "cipher"));
console.log(vigenereCipher("Rsjk, gmws ccxáq?", "key", "decipher"));