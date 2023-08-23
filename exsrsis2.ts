type arr = number[];
const sumOfEven = (array: arr): number => {
  let sum: number = 0;
  for (let num = 0; num < array.length; num++) {
    array[num] % 2 == 0 ? (sum += array[num]) : (sum += 0);
  }
  return sum;
};
// console.log(sumOfEven([1, 12, 3, 4, 5, 6, 7, 8, 9]));

interface rectangle {
  hight: number;
  length: number;
}
const AreaOfARectangle = (obj: rectangle): number => {
  return obj.hight * obj.length;
};
// console.log(AreaOfARectangle({ hight: 10, length: 5 }));

type Palindrome = number | string;
const checkIfPalindrome = (Palindrome: Palindrome): boolean => {
  const str = Palindrome.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
// console.log(checkIfPalindrome("helloolleh"));

const stringArr: string[] = ["aaaa", "bbbb", "cccc"];
const upperCase = (stringArr: string[]): string[] => {
  return stringArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};
// console.log(upperCase(stringArr));

const numArr: number[] = [1, 2, 3, 2, 1];
const deleteDuplicates = (numArr: number[]): number[] => {
  return [...new Set(numArr)];
};
// console.log(deleteDuplicates(numArr));

type names = {
  firstName: string;
  lastName: string;
};
const Acronyms = (obj: names): object => {
  const acronyms: names = {
    firstName: obj.firstName.charAt(0).toUpperCase(),
    lastName: obj.lastName.charAt(0).toUpperCase(),
  };
  return acronyms;
};
// console.log(Acronyms({ firstName: "menashe", lastName: "soffer" }));

type info = [
  {
    name: string;
    age: number;
  },
  {
    name: string;
    age: number;
  },
  {
    name: string;
    age: number;
  }
];
const averageAge = (array: info): number => {
  let average: number = 0;
  let sum: number = 0;
  for (let age = 0; age < array.length; age++) {
    sum += array[age].age;
    average += 1;
  }
  return sum / average;
};
// console.log(
//   averageAge([
//     {
//       name: "a",
//       age: 10,
//     },
//     {
//       name: "b",
//       age: 11,
//     },
//     {
//       name: "c",
//       age: 13,
//     },
//   ])
// );

interface minMax {
  min: number;
  max: number;
}
type minMaxArray = number[];
const checkMinMax = (array: minMaxArray): minMax => {
  const getMinMax: minMax = {
    min: Math.min(...array),
    max: Math.max(...array),
  };
  return getMinMax;
};
// console.log(checkMinMax([1, 12, 3, 4, 5, 6, 7, 8, 9]));

type upsideArray = any[];
const upsideDownArray = (array: upsideArray): upsideArray => {
  return array.reverse();
};
// console.log(upsideDownArray(["menashe", "soffer"]));
