"use strict";
const bigger = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
};
const printBiggest = (num1, num2) => {
    console.log(bigger(num1, num2));
};
const evenOrOddNumber = (num) => {
    return num % 2 == 0 ? "even" : "odd";
};
const getLength = (string) => {
    return string.length;
};
const returnAArray = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i + 1);
    }
    return arr;
};
const biggestInTheArray = (arr) => {
    let biggest = 0;
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] > biggest) {
            biggest = arr[num];
        }
    }
    return biggest;
};
const biggestInTheArr = (arr) => {
    return Math.max(...arr);
};
const me = {
    Name: "menashe",
    Age: 23,
    isStudent: true,
};
const printPerson = (object) => {
    console.log(object.Name, object.Age, object.isStudent);
};
const isMinor = (object) => {
    return object.Age < 18 ? true : false;
};
const readers = [
    {
        Person: {
            Name: "John",
            Age: 20,
            isStudent: true,
            favoriteBook: {
                Title: "The Great Gatsby",
                Author: "F. Scott Fitzgerald",
                Year: 1925,
            },
        },
    },
    {
        Person: {
            Name: "Jane",
            Age: 25,
            isStudent: false,
            favoriteBook: {
                Title: "Pride and Prejudice",
                Author: "Jane Austen",
                Year: 1813,
            },
        },
    },
    {
        Person: {
            Name: "Bob",
            Age: 30,
            isStudent: false,
            favoriteBook: {
                Title: "The Catcher in the Rye",
                Author: "J.D. Salinger",
                Year: 1951,
            },
        },
    },
];
const TheOldestReader = (array) => {
    let oldest = 0;
    let oldestIndex = -1;
    for (let reader = 0; reader < array.length; reader++) {
        let currentAge = array[reader].Person.Age;
        if (currentAge > oldest) {
            oldest = currentAge;
            oldestIndex = reader;
        }
    }
    return array[oldestIndex];
};
const TheOldestBook = (array) => {
    let oldest = 0;
    let oldestIndex = -1;
    for (let reader = 0; reader < array.length; reader++) {
        let oldYear = array[reader].Person.favoriteBook.Year;
        if (oldYear > oldest) {
            oldest = oldYear;
            oldestIndex = reader;
        }
    }
    return array[oldestIndex];
};
console.log(TheOldestBook(readers));
