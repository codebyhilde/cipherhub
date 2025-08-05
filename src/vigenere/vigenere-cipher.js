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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("display-ciphered-text");
    const resultText = document.getElementById("show-ciphered-text");
    
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const inputText = document.getElementById("input-text").value;
        const inputKey = document.getElementById("input-key").value;
        const operation = document.getElementById("operation").value;
        
        resultContainer.classList.remove("hidden");
        resultText.textContent = vigenereCipher(inputText, inputKey, operation);
    });
    
    copyBtn.addEventListener("click", () => {
        const text = resultText.textContent;
        navigator.clipboard.writeText(text)
          .then(() => {
              copyBtn.innerHTML = '<i class="far fa-check"></i> ¡Copiado!';
              setTimeout(() => {
                  copyBtn.innerHTML = '<i class="far fa-copy"></i> Copiar';
              }, 1000);
          });
    });
});