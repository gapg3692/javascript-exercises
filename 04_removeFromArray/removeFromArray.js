const removeFromArray = function(...args) {
    // array.splice(array.indexOf(element), 1);
    // return array;
    const array = args[0];
    return array.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;