const caesar = function(text = "", shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetCapital = alphabet.toUpperCase();
    let textNew = "";
    for (let i = 0; i < text.length; i++) {
        if (alphabetCapital.includes(text.charAt(i)))
            textNew += search(text, alphabetCapital, i, shift);
        else if (alphabet.includes(text.charAt(i)))
            textNew += search(text, alphabet, i, shift);
        else textNew += text.charAt(i);
    }
    return textNew;
};

function findIndex(totalShift, textLength) {
    if (totalShift >= textLength) {
        return findIndex(totalShift - textLength, textLength);
    } else if (totalShift < 0 && -textLength < totalShift)
        return textLength + totalShift;
    else if (totalShift < 0 && -textLength >= totalShift)
        return findIndex(textLength + totalShift, textLength);
    else return totalShift;
}

function search(text, alphabet = "", index, shift) {
    return alphabet.charAt(
        findIndex(alphabet.indexOf(text.charAt(index)) + shift, alphabet.length)
    );
}

// const caesar = function(string, shift) {
//     return string
//       .split("")
//       .map(char => shiftChar(char, shift))
//       .join("");
//   };

//   const codeSet = code => (code < 97 ? 65 : 97);

//   // this function is just a fancy way of doing % so that it works with negative numbers
//   // see this link for details:
//   // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
//   const mod = (n, m) => (n % m + m) % m;

//   const shiftChar = (char, shift) => {
//     const code = char.charCodeAt();

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       return String.fromCharCode(
//         mod(code + shift - codeSet(code), 26) + codeSet(code)
//       );
//     }
//     return char;
//   };

// Do not edit below this line
module.exports = caesar;