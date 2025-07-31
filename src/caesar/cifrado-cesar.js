// Función para cifrar/descifrar
function caesarCipher(text, displacement, operation) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = alphabet.toUpperCase();
    let result = "";
    
    // Lógica de cifrado
    for (let char of text) {
        if (alphabet.includes(char)) {
            const base = alphabet;
            const index = (base.indexOf(char) + displacement * (operation === "cipher" ? 1: -1) + 26) % 26;
            result += base[index];
        } else if (upperAlphabet.includes(char)) {
            const base = upperAlphabet;
            const index = (base.indexOf(char) + displacement * (operation === "cipher" ? 1:-1) + 26) % 26;
            result += base[index];
        } else {
            result += char; // Mantener caracteres no alfabéticos
        }
    }
    
    return result;
}

// Manejo del evento
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const copyBtn = document.getElementById("copy-btn");
    const resultContainer = document.getElementById("display-ciphered-text");
    const resultText = document.getElementById("show-ciphered-text");
    
    // Desplegar resultado
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const inputText = document.getElementById("input-text").value;
        const displacement = parseInt(document.getElementById("displacement-value").value);
        const operation = document.getElementById("operation").value;
        
        if (!operation) {
            alert("Por favor seleccione una operacion válida");
            return;
        }
        
        resultText.textContent = caesarCipher(inputText, displacement, operation);
        resultContainer.classList.remove("hidden");
    });
    
    // Función de copiado
    copyBtn.addEventListener("click", () => {
        const text = resultText.textContent;
        
        // Uso de API Web para copiar
        navigator.clipboard.writeText(text)
          .then(() => {
              copyBtn.innerHTML = '<i class="far fa-check"></i> ¡Copiado!';
              setTimeout(() => {
                  copyBtn.innerHTML = '<i class="far fa-copy"></i> Copiar';
              }, 1000);
        });
    });
});
