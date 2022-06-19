const ftoc = function(temperature) {
    if (temperature === 32) return 0;
    return Number((temperature = ((temperature - 32) * 5) / 9).toFixed(1));
};

const ctof = function(temperature) {
    if (temperature === 0) return 32;
    return Number((temperature = (temperature * 9) / 5 + 32).toFixed(1));
};

// const ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10;
//  };

//  const ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10;
//  };

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};