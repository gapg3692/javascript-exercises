// const findTheOldest = function(array) {
//     return array.reduce(
//         (previousValue, currentValue) => {
//             if (currentValue.yearOfDeath === undefined) {
//                 let fecha = new Date();

//                 if (
//                     previousValue.yearOfDeath - previousValue.yearOfBirth <
//                     fecha.getFullYear() - currentValue.yearOfBirth
//                 )
//                     return currentValue;
//                 else return previousValue;
//             } else if (previousValue.yearOfDeath === undefined) {
//                 let fecha = new Date();
//                 if (
//                     fecha.getFullYear() - previousValue.yearOfBirth <
//                     currentValue.yearOfDeath - currentValue.yearOfBirth
//                 )
//                     return currentValue;
//                 else return previousValue;
//             } else if (
//                 previousValue.yearOfDeath - previousValue.yearOfBirth <
//                 currentValue.yearOfDeath - currentValue.yearOfBirth
//             )
//                 return currentValue;
//             else return previousValue;
//         }, { yearOfDeath: 0, yearOfBirth: 0 }
//     );
// };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;