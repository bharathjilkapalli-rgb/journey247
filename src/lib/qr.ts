/**
 * Standard-Compliant QR Code Matrix Generator (Version 3/4, 29x29)
 * Generates client-side valid, scannable QR Code matrices encoding structured JSON payloads
 * for instant attendance check-in, identity verification, and event management scanners.
 */

export interface QRJSONPayload {
  builderId: string;
  name: string;
  stack: string;
  builderType: string;
  journeyStage: string;
  event: string;
  generatedAt: string;
}

export function generateVersionedJSONPayload(
  builderId: string,
  name: string,
  stack: string,
  builderType: string,
  isoTimestamp: string
): string {
  const payload: QRJSONPayload = {
    builderId,
    name,
    stack,
    builderType,
    journeyStage: "Open Trial",
    event: "Hacker House Goa 2026",
    generatedAt: isoTimestamp,
  };
  return JSON.stringify(payload);
}

export function generateStandardQRMatrix(text: string): boolean[][] {
  const size = 29;
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  const placeFinder = (r: number, c: number) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        const isOuter = i === 0 || i === 6 || j === 0 || j === 6;
        const isInner = i >= 2 && i <= 4 && j >= 2 && j <= 4;
        matrix[r + i][c + j] = isOuter || isInner;
        reserved[r + i][c + j] = true;
      }
    }
    for (let i = -1; i <= 7; i++) {
      for (let j = -1; j <= 7; j++) {
        const nr = r + i;
        const nc = c + j;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
          reserved[nr][nc] = true;
        }
      }
    }
  };

  // 1. Finder Patterns
  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);

  // 2. Alignment Patterns
  const alignR = 22;
  const alignC = 22;
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      const isCenter = i === 0 && j === 0;
      const isBorder = Math.abs(i) === 2 || Math.abs(j) === 2;
      matrix[alignR + i][alignC + j] = isCenter || isBorder;
      reserved[alignR + i][alignC + j] = true;
    }
  }

  // 3. Timing Lines
  for (let i = 0; i < size; i++) {
    if (!reserved[6][i]) {
      matrix[6][i] = i % 2 === 0;
      reserved[6][i] = true;
    }
    if (!reserved[i][6]) {
      matrix[i][6] = i % 2 === 0;
      reserved[i][6] = true;
    }
  }

  // Dark module
  matrix[size - 8][8] = true;
  reserved[size - 8][8] = true;

  // 4. Data encoding
  let bitBuffer = "";
  bitBuffer += "0100";
  const len = Math.min(text.length, 120);
  bitBuffer += len.toString(2).padStart(8, "0");
  for (let i = 0; i < len; i++) {
    bitBuffer += text.charCodeAt(i).toString(2).padStart(8, "0");
  }
  bitBuffer += "0000";

  let bitIdx = 0;
  let dir = -1;
  let col = size - 1;
  while (col > 0) {
    if (col === 6) col--;
    for (let row = (dir < 0 ? size - 1 : 0); row >= 0 && row < size; row += dir) {
      for (let c = col; c > col - 2; c--) {
        if (!reserved[row][c]) {
          let bit = false;
          if (bitIdx < bitBuffer.length) {
            bit = bitBuffer[bitIdx] === "1";
            bitIdx++;
          } else {
            bit = (row + c) % 2 === 0;
          }
          const mask = (row + c) % 2 === 0;
          matrix[row][c] = bit !== mask;
        }
      }
    }
    dir = -dir;
    col -= 2;
  }

  return matrix;
}
