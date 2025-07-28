// Función para cifrar
function cipherText(text, displace) {
  let cipheredText = "";
  
  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i);
    
    let newChar = char + displace;
    
    cipheredText += String.fromCharCode(newChar);
  }
  
  return cipheredText;
}

// Función para descifrar
function decipherText(cipheredText, displace) {
  let decipheredText = "";
  
  for (let i = 0; i < cipheredText.length; i++) {
    let char = cipheredText.charCodeAt(i);
    
    let newChar = char - displace;
    
    decipheredText += String.fromCharCode(newChar);
  }
  
  return decipheredText;
}

// Se obtiene el id del botón para manejar el evento click
let sendInfo = document.getElementById("send-info");

sendInfo.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Elementos DOM
  let inputText = document.getElementById("input-text").value;
  let displacementValue = parseInt(document.getElementById("displacement-value").value);
  let operation = document.getElementById("operation").value;
  let displayCipheredText = document.getElementById("display-ciphered-text");
  let showCipheredText = document.getElementById("show-ciphered-text");
  
  let outputText = "";
  if (operation === 'cipher') {
    outputText = cipherText(inputText, displacementValue);
  } else if (operation === 'decipher') {
    outputText = decipherText(inputText, displacementValue);
  } else {
    alert("Seleccione una operación válida");
    return;
  }
  displayCipheredText.classList.remove("hidden");
  showCipheredText.textContent = outputText;
});
