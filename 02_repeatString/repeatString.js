const repeatString = function(text, repeats) {
    if (repeats < 0) return "ERROR";
    let currentText = "";
    for (let i = 0; i < repeats; i++) {
        currentText += text;
    }
    return currentText;
};

// Do not edit below this line
module.exports = repeatString;