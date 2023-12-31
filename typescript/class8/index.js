"use strict";
// let array: number[] = [2, -5, -8, -9];
// let array2: number[] = [];
// // 3
// //i = 3
// for (let i = 0; i < array.length; i++) {
//   array2.push((array[i] * 9) / 5 - 32);
// }
// console.log(array2);
// let arr: number[] = [1, 2, -3, 4, 5, -5, 7, 8, 9];
// let positiveArray: number[] = [];
// for (let integer = 0; integer < arr.length; integer++) {
//   if (arr[integer] > 0) {
//     positiveArray.push(arr[integer]);
//   }
// }
// console.log(positiveArray);
// let array: number[] = [1, -2, -3, -4, 5, -6]; //6 //5
// // update array no 1 = [1,-3,4,5,-6]
// let i = 0; //1//2
// while (i <= array.length - 1) {
//   if (array[i] < 0) {
//     array.splice(i, 1);
//   } else {
//     i++;
//   }
// }
// console.log("array", array);
// let arrayOfCart: string[] = ["Potatoes 5kg", "sugar 2k", "tea pack 10"];
// arrayOfCart.splice(arrayOfCart.length, 0, "Water bottle");
// console.log("🚀 ~ file: index.ts:34 ~ arrayOfCart:", arrayOfCart);
const checkIfEvenOrOdd = (sum2) => {
    if (sum2() % 2 === 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
};
const sum = () => {
    let num = 2;
    let num2 = 5;
    return num + num2;
};
checkIfEvenOrOdd(() => {
    let num = 2;
    let num2 = 5;
    return num + num2;
});
// let array: number[] = [32, 48, 55, 40, -1];
// array = array.map((value: number) => (value * 9) / 5 - 32);
// console.log("🚀 ~ file: index.ts:56 ~ array:", array);
// let array2: any;
// array2 = array.map((num) => {
//   if (num === 3) {
//     return num;
//   }
// });
// console.log(" array2:", array2);
// console.log(" array2:", array2);
//loop
//array length
//accepts a callback function
// let names: string[] = [
//   "Abu Hurairah",
//   "Naveed Sarwer",
//   "Ali",
//   "Sulman",
//   "bilal",
// ];
// let rollNos: string[] = [];
// rollNos = names.map((name: string, i: number) => {
//   return `${i + 1}`;
// });
// let ids: any = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let nature: string[] = [];
// ids = ids.map((val: number) => {
//   if ((val / 10) % 2 === 0) {
//     return "Even";
//   }
//   return "Odd";
// });
// console.log(nature)
// Filter
// array = array.filter((val: number, index: number) => {});
// console.log("array", array);
// let age = 18;
// let bool = age < 18 ? "false" : "true";
// ternary operator
// let bool = age < 18 && false;
let array = [-1, 2, 3, -4, -5, 6, 7, 8];
let array2 = array
    .filter((val) => val > 0 && val % 2 === 0)
    .map((val) => val ** 2);
console.log("array2", array2);
let alphabets = ["a", "b", "c", "e", "f", "i", "o", "u"];
let vowels = alphabets
    .filter((val) => val === "a" || val === "e" || val === "i" || val === "o" || val === "u")
    .map((val) => val.toUpperCase());
console.log(vowels);
// let fruits = ["apple", "banana", "grape"];
// fruits = fruits.filter((fruit: string) => fruit.length === 5);
// console.log("fruits", fruits);
let vowels2 = vowels.forEach((val, i) => {
    console.log(val);
    return val;
});
console.log("🚀 ~ file: index.ts:131 ~ vowels2 ~ vowels2:", vowels2);
