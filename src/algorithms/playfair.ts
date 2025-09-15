type Digraphs = [string, string][];
type Grid = Map<number, string[]>;
type Operation = "cipher" | "decipher";

// Define la posición exacta de un cáracter dentro de la matriz
interface GridPosition {
    row: number;
    column: number;
}

const GRID_SIZE = 5;

// Normaliza el texto (mayúsculas, reemplaza J→I, elimina espacios) y devuelve un array
function prepareCipherInput(input: string) {
    return input.toUpperCase().replace(/J/g, "I").replace(/\s/g, "").split("");
}

// Texto plano a digramas
function inputToDigraphs(chars: string[]) {
    const digraphs: Digraphs = [];
    let i = 0;

    while (i < chars.length) {
        // Caso 1: Último carácter (longitud impar)
        if (i === chars.length - 1) {
            digraphs.push([chars[i], "X"]);
            break;
        }

        // Caso 2: Letras repetidas
        if (chars[i] === chars[i + 1]) {
            digraphs.push([chars[i], "X"]);
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

// Normaliza la clave y elimina duplicados
function prepareCipherKey(key: string) {
    let processedKey = new Set(prepareCipherInput(key));
    return Array.from(processedKey);
}

// Crea una matriz 5 x 5
function buildGrid(key: string[]) {
    const ALPHABET = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const UNIQUE_CHARS = new Set([...key, ...ALPHABET]);
    const gridChars = Array.from(UNIQUE_CHARS);

    // Creación de la matriz 5 x 5 como un mapa {1: [...], 2: [...], ...}
    const grid = new Map<number, string[]>();
    for (let row = 0; row < GRID_SIZE; row++) {
        const start = row * GRID_SIZE;
        grid.set(row + 1, gridChars.slice(start, start + GRID_SIZE));
    }

    return grid;
}

// Obtener posicion de los digramas
function getGridPosition(grid: Grid, char1: string, char2: string) {
    let charPosition1: GridPosition | null = null;
    let charPosition2: GridPosition | null = null;

    for (const [row, chars] of grid) {
        for (let col = 0; col < chars.length; col++) {
            if (chars[col] === char1) {
                charPosition1 = { row: row, column: col };
            }

            if (chars[col] === char2) {
                charPosition2 = { row: row, column: col };
            }

            if (charPosition1 && charPosition2)
                return { charPosition1, charPosition2 };
        }
    }

    return { charPosition1, charPosition2 };
}

// Desplazamiento en misma fila
function rowShift(
    row: string[],
    col1: number,
    col2: number,
    operation: Operation
) {
    const mod = operation === "cipher" ? 1 : -1;
    return [row[(col1 + mod + GRID_SIZE) % GRID_SIZE], row[(col2 + mod + GRID_SIZE) % GRID_SIZE]];
}

// Desplazamiento en misma columna
function columnShift(
    col: number,
    row1: number,
    row2: number,
    grid: Grid,
    operation: Operation
) {
    const mod = operation === "cipher" ? 1 : -1;

    // Convertir a base 0, aplicar cambio, luego volver a base 1
    const newRow1 = ((row1 - 1 + mod + GRID_SIZE) % GRID_SIZE) + 1;
    const newRow2 = ((row2 - 1 + mod + GRID_SIZE) % GRID_SIZE) + 1;

    return [grid.get(newRow1)[col], grid.get(newRow2)[col]];
}

// Desplazamiento en forma de rectangulo
function boxShift(
    grid: Grid,
    row1: number,
    row2: number,
    col1: number,
    col2: number
) {
    return [grid.get(row1)[col2], grid.get(row2)[col1]];
}

// Lógica de cifrado/descifrado
function transformDigraphs(
    grid: Grid,
    digraphs: Digraphs,
    operation: Operation
) {
    const cipheredDigraphs: string[] = [];
    for (let i = 0; i < digraphs.length; i++) {
        const [char1, char2] = digraphs[i];
        const { charPosition1, charPosition2 } = getGridPosition(
            grid,
            char1,
            char2
        );
        let transformed: string[] = [];

        if (charPosition1.row === charPosition2.row) {
            transformed = rowShift(
                grid.get(charPosition1.row),
                charPosition1.column,
                charPosition2.column,
                operation
            );
        } else if (charPosition1.column === charPosition2.column) {
            transformed = columnShift(
                charPosition1.column,
                charPosition1.row,
                charPosition2.row,
                grid,
                operation
            );
        } else {
            transformed = boxShift(
                grid,
                charPosition1.row,
                charPosition2.row,
                charPosition1.column,
                charPosition2.column
            );
        }

        cipheredDigraphs.push(...transformed);
    }

    return cipheredDigraphs;
}

// Función principal
export function playfairCipher(
    inputText: string,
    inputKey: string,
    operation: Operation
): string {
    // 1. Normalización del texto
    const plainText: string[] = prepareCipherInput(inputText);

    // 2. Normalización de la clave
    const key: string[] = prepareCipherKey(inputKey);

    // 3. Creación de la matriz
    const grid: Grid = buildGrid(key);

    // 4. Creación de los digramas
    let digraphs: Digraphs = inputToDigraphs(plainText);

    // 5. Cifrado/descifrado
    let cipheredDigraphs: string[] = transformDigraphs(
        grid,
        digraphs,
        operation
    );

    return cipheredDigraphs.join("");
}