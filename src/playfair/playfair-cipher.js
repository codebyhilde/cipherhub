// Normaliza el texto (mayúsculas, reemplaza J→I, elimina espacios) y devuelve un array
function prepareCipherInput(input) {
    return input
      .toUpperCase()
      .replace(/J/g, 'I')
      .replace(/\s/g, '')
      .split('');
}

// Texto plano a digramas
function inputToDigraphs(input) {
    const chars = prepareCipherInput(input);
    const digraphs = [];
    let i = 0;
  
    while (i < chars.length) {
        // Caso 1: Último carácter (longitud impar)
        if (i === chars.length - 1) {
            digraphs.push([chars[i], 'X']);
            break;
        }
  
        // Caso 2: Letras repetidas
        if (chars[i] === chars[i + 1]) {
            digraphs.push([chars[i], 'X']);
            i++;
        } 
        // Caso 3: Par normal
        else {
            digraphs.push([chars[i], chars[i + 1]]);
            i += 2;
        }
    }
  
    return digraphs;
}

console.log(inputToDigraphs('hello world'));

// Normaliza la clave y elimina duplicados
function prepareCipherKey(key) {
    let processedKey = new Set(prepareCipherInput(key));
    return Array.from(processedKey);
}

