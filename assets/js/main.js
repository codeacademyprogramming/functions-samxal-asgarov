// const firstNumber = prompt('Please enter a number'); //string
// const secondNumber = prompt('Please enter a second number'); //string '1000', 'salam'
// const thirdNumber = prompt('Please enter a third number'); //string '1000', 'salam'
// const result = Number(firstNumber) + parseInt(secondNumber) + (+thirdNumber);

// alert(result);

// const firstNumberSecondExpression = prompt('Please enter a number'); //string
// const secondNumberSecondExpression = prompt('Please enter a second number'); //string '1000', 'salam'
// const thirdNumberSecondExpression = prompt('Please enter a third number'); //string '1000', 'salam'
// const resultSecond = Number(firstNumberSecondExpression) + parseInt(secondNumberSecondExpression) + (+thirdNumberSecondExpression);

// alert(resultSecond);

// Pure functions;
// Hoisting;
function sumNumbers(
    textForFirstPrompt = 'Please enter first number',
    textForSecondPrompt = 'Please enter second number',
    textForThirdPrompt = 'Please enter third number'
) {
    const firstNumber = prompt(textForFirstPrompt);
    const secondNumber = prompt(textForSecondPrompt);
    const thirdNumber = prompt(textForThirdPrompt);

    const result = Number(firstNumber) + Number(secondNumber) + Number(thirdNumber);
    return result;
}

function addTwoNumbers(a = 0, b = 0) {
    if (typeof a === 'string' || typeof b === 'string') {
        throw 'You can not add strings'
    }
    return a + b;
}

// console.log(addTwoNumbers(100, '300'))

// const result = sumNumbers(
//     'Zehmet olmasa birinci reqemi daxil edin',
//     'Zehmet olmasa ikinci reqemi daxil edin',
//     'Zehmet olmasa uchuncu reqemi daxil edin'
// );
// console.log(result);
// alert(result);
// console.log(result);
// console.log(sumNumbers());


// const result2 = sumNumbers(
//     'Pojalusta vvedite 1 nomer',
//     'Pojalusta vvedite 2 nomer',
//     'Pojalusta vvedite 3 nomer'
// );

// const result3 = sumNumbers();

// console.log(findMax(1, 2, 3, 4, 5, 6, 100));

// function findMax(...numbers) {
//     let maxNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// }

// sumAllNumbers(1, 2, 3, 4, 5, 60, 100); //1241

// function sumAllNumbersWithArguments() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// function sumAllNumbersWithRestOperator(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     // if we don't specify return statement it will automatically return undefined
//     // return undefined
//     return sum;
// }

// console.log(sumAllNumbersWithArguments(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(sumAllNumbersWithRestOperator(1, 2, 3, 4, 5, 6, 7, 8));

// const func = function () {

// }

// func();

const func = (a = [], b = {}, c = 5, d = '') => {

}

const func2 = () => { }
const func3 = a => { }

const func4 = (a, b) => a + b;

const isOlder = age => {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

// const isOlderClean = age => age > 18 ? 'boyukdur' : 'kichikdir';
const isOlderClean = age => age > 18;

console.log(isOlderClean(30));
console.log(isOlderClean(15));

const userObject = {
    firstname: 'Mubariz',
    lastname: 'Mayil-zade',
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    getFullNameWithArrowFunc: () => {
        return userObject.firstname + " " + userObject.lastname;
    }
}

// userObject.getFullName();
// console.log(userObject.getFullNameWithArrowFunc());

/*
    Differences between arrow functions and function declaration
    1. Arrow functions do not have `arguments` keyword
    2. There is a `this` keyword difference between arrow functions and function declarations
    3. You can not call arrow functions before their declarations
*/

func();
func2();

function someFunc() {

}

someFunc(50)(100); // 150