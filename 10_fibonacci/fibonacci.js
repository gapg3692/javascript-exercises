const fibonacci = function(position) {
    let positionNumber = Number(position);
    if (positionNumber < 0) return "OOPS";
    if (positionNumber === 1) return 1;
    if (positionNumber === 0) return 0;
    let total = 0;
    return (total =
        fibonacci(positionNumber - 1) + fibonacci(positionNumber - 2));
};

// Do not edit below this line
module.exports = fibonacci;