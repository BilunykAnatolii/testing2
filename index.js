function findCarNumber(codeWord, numbersString) {
  let carNumber = "";
  for (let i = 0; i < codeWord.length; i++) {
    const charCode = codeWord.charCodeAt(i);
    const correctIndex = charCode - 65;
    carNumber += numbersString[correctIndex]; // додавання чисел
  }
  return carNumber;
}

const codeWord = "Kyiv";
const numbersString =
  "91840723560405732869501597532715380792564152347981576423052155063186297498324950786324";
console.log(findCarNumber(codeWord, numbersString));
module.exports = { findCarNumber };
