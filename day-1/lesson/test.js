function caesarCipher(text, shift) {
  let result = "";

  for (let char of text) {
    if (char >= "A" && char <= "Z") {
      // Hitta position (A=0, B=1, ...)
      const pos = char.charCodeAt(0) - "A".charCodeAt(0);

      // Flytta position med wrap-around
      const newPos = (pos + shift) % 26;

      // Konvertera tillbaka till bokstav
      const newChar = String.fromCharCode(newPos + "A".charCodeAt(0));
      result += newChar;
    } else {
      result += char; // Behåll mellanslag, punkter etc
    }
  }

  return result;
}
