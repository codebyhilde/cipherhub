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

// Crea una matriz 5 x 5
function buildMatrix(key) {
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    const uniqueChars = new Set([...key, ...alphabet]);
    const matrixChars = Array.from(uniqueChars);
    
    // Creación de la matriz 5 x 5 como un mapa {1: [...], 2: [...], ...}
    const matrix = new Map();
    for (let row = 0; row < 5; row++) {
        const start = row * 5;
        matrix.set(row + 1, matrixChars.slice(start, start + 5));
    }
        
    return matrix;
}

function transformDigraphs(matrix, digraphs, operation) {
    let cipheredDigraphs = [];
    for (let i = 0; i < digraphs.length; i++) {
        const [char1, char2] = digraphs[i];
        const {posChar1, posChar2} = getPositionMap(matrix, char1, char2);
        let transformed;
        
        if (posChar1.row === posChar2.row) {
            transformed = rowShift(matrix.get(posChar1.row), posChar1.column, posChar2.column, operation);
        }
        else if (posChar1.column === posChar2.column) {
            transformed = columnShift(posChar1.column, posChar1.row, posChar2.row, matrix, operation);
        }
        else {
            transformed = boxShift(matrix, posChar1.row, posChar2.row, posChar1.column, posChar2.column);
        }
        
        cipheredDigraphs.push(...transformed);
    }
    
    return cipheredDigraphs;
}

// Obtener posicion de los digramas
function getPositionMap(matrix, char1, char2) {
    let posChar1 = null;
    let posChar2 = null;
    
    for (const [row, chars] of matrix) {
        for (let col = 0; col < chars.length; col++) {
            if (chars[col] === char1) {
                posChar1 = { row: row, column: col };
            } 
            
            if (chars[col] === char2) {
                posChar2  = { row: row, column: col };
            }

            if (posChar1 && posChar2) return {posChar1, posChar2};
        }
    }
    
    return {posChar1, posChar2};
}

// Desplazamiento en misma fila
function rowShift(row, col1, col2, operation) {
    const mod = operation === 'cipher' ? 1: -1;
    return [
        row[(col1 + mod + 5) % 5],
        row[(col2 + mod + 5) % 5]
    ];
}

// Desplazamiento en misma columna
function columnShift(col, row1, row2, matrix, operation) {
    const mod = operation === 'cipher' ? 1:-1;
    const rowCount = 5;
    
    
    // Convertir a base 0, aplicar cambio, luego volver a base 1
    const newRow1 = ((row1 - 1 + mod + rowCount) % rowCount) + 1;
    const newRow2 = ((row2 - 1 + mod + rowCount) % rowCount) + 1;
    
    return [
        matrix.get(newRow1)[col],
        matrix.get(newRow2)[col]
    ];
}

// Desplazamiento en forma de rectangulo
function boxShift(matrix, row1, row2, col1, col2) {
    return [
        matrix.get(row1)[col2],
        matrix.get(row2)[col1],
    ];
}