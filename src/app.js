const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;
 const numbers = [
        68,
        -68,
        27,
        94,
        72,
        -25,
        -51,
        32,
        10,
        64,
        -94,
        4,
        34,
        -86,
        90,
        81,
        20,
        -56,
        -91,
        -50
    ];
sumOfNumbers = 0;
if (sumOfNumbers && typeof sumOfNumbers === 'function'){
  for(let i = 0; i < numbers.length; i++)
    console.log(sumOfNumbers(numbers));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}