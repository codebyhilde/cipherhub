// Valida que la clave sea alfabética (sin números/símbolos)
function isValidVigenereKey(key) {
    return /^[a-zA-Z]+$/.test(key);
}

function vigenereCipher(text, key, operation) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = alphabet.toUpperCase();
    let result = "";
    
    for (let char of text) {
        if (alphabet.includes(char)) {
            const base = alphabet;
            const index = ((base.indexOf(char) + base.indexOf(key)) * (operation === "cipher" ? 1: -1) + 26) % 26;
            result += base[index];
        } else if (upperAlphabet.includes(char)) {
            const base = upperAlphabet;
            const index = ((base.indexOf(char) + base.indexOf(key)) * (operation === "cipher" ? 1: -1) + 26) % 26;
            result += base[index];
        } else {
            result += char;
        }
    }
    
    return result;
}

