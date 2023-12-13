import tinycolor from "tinycolor2";

// Function to generate a random color
export function getRandomColor(existingColors: string | string[]) {
  let newColor;
  do {
    newColor = tinycolor.random().toHexString();
  } while (existingColors.includes(newColor));
  return newColor;
}

// Function to generate random colors for all cards
export function generateRandomColors(numCards: number) {
  const colors: string | string[] = [];
  for (let i = 0; i < numCards; i++) {
    colors.push(getRandomColor(colors));
  }
  return colors;
}
