const sumAll = function(sum1, sum2) {
    if (
        sum1 < 0 ||
        sum2 < 0 ||
        typeof sum1 !== "number" ||
        typeof sum2 !== "number"
    )
        return "ERROR";
    else if (sum1 <= sum2) return sumNumbersBetween(sum1, sum2);
    else return sumNumbersBetween(sum2, sum1);
};

function sumNumbersBetween(sum1, sum2) {
    let result = 0;
    for (; sum1 <= sum2; sum1++) result += sum1;
    return result;
}
// Do not edit below this line
module.exports = sumAll;