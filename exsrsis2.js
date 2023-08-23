"use strict";
const sumOfEven = (array) => {
    let sum = 0;
    for (let num = 0; num < array.length; num++) {
        array[num] % 2 == 0 ? (sum += array[num]) : (sum += 0);
    }
    return sum;
};
const AreaOfARectangle = (obj) => {
    return obj.hight * obj.length;
};
const checkIfPalindrome = (Palindrome) => {
    const str = Palindrome.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
// console.log(checkIfPalindrome("helloolleh"));
const stringArr = ["aaaa", "bbbb", "cccc"];
const upperCase = (stringArr) => {
    return stringArr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
};
// console.log(upperCase(stringArr));
const numArr = [1, 2, 3, 2, 1];
const deleteDuplicates = (numArr) => {
    return [...new Set(numArr)];
};
const Acronyms = (obj) => {
    const acronyms = {
        firstName: obj.firstName.charAt(0).toUpperCase(),
        lastName: obj.lastName.charAt(0).toUpperCase(),
    };
    return acronyms;
};
const averageAge = (array) => {
    let average = 0;
    let sum = 0;
    for (let age = 0; age < array.length; age++) {
        sum += array[age].age;
        average += 1;
    }
    return sum / average;
};
const checkMinMax = (array) => {
    const getMinMax = {
        min: Math.min(...array),
        max: Math.max(...array),
    };
    return getMinMax;
};
const upsideDownArray = (array) => {
    return array.reverse();
};
console.log(upsideDownArray(["menashe", "soffer"]));
