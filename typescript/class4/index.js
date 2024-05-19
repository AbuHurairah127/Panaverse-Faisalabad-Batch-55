"use strict";
// var name1: string = "Abu Hurairah";
// var age1: number = 10;
// console.log("name1 before if", name1);
// // Conditional
// // If - statement
// var result1: boolean = age1 > 18;
// // var result2: boolean = !result1;
// if (age1 > 18) {
//   console.log("age1", age1);
//   console.log("age1", age1);
//   console.log("age1", age1);
// }
// console.log("name1 after if", name1);
// var marks: number = 85;
// if (marks >= 90) {
//   console.log("A+ Grade");
// } else if (marks >= 50) {
//   console.log("C Grade");
// } else if (marks >= 80) {
//   console.log("A grade");
// } else if (marks >= 70) {
//   console.log("B Grade");
// }
// if (marks > 50) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }
// var year: number = 2023;
// if (year % 4 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }
// var nationality
// var attendance_percentage: number = 76;
// var theory_marks: number = 76;
// var practical_marks: number = 76;
// if (attendance_percentage > 75) {
//   console.log("You are allowed to sit in exam");
//   if (theory_marks > 50) {
//     console.log("pass in theory");
//     if (practical_marks > 50) {
//       console.log("Passed Over all");
//     } else {
//       console.log("fail in practical");
//     }
//   } else {
//     console.log("fail in theory");
//   }
// } else {
//   console.log("you're not eligible for the exams");
// }
// var units: number = 200;
// // 50 - 2
// // 100 - 3
// // 200 - 4
// // 500 - 5
// if (units >= 0 && units < 50) {
//   console.log(units * 2);
// } else if (units >= 50 && units <= 100) {
//   var price: number = units * 3;
//   var tax: number = price * 0.25;
//   price += tax;
//   console.log(price);
// } else if (units > 100 && units <= 200) {
//   var price = units * 4;
//   var tax = price * 0.5;
//   price += tax;
//   console.log(price);
// } else if (units > 200 && units <= 500) {
//   var price: number = units * 5;
//   var tax = price * 0.75;
//   price += tax;
//   console.log(price);
// } else if (units > 500) {
//   var price: number = units * 6;
//   var tax: number = price;
//   price += tax;
//   console.log("price", price);
// } else {
//   console.log("invalid number");
// }
// Create a program that simulates a simple ATM. Ask the user for their account balance, and then check if they have enough funds to withdraw a certain amount. If yes, update the balance; otherwise, display an insufficient funds message.
// var accountBalance: number = 15000;
// var withdrawAmount: number = 10000;
// if (accountBalance >= withdrawAmount) {
//   console.log(
//     `you have withdrew ${withdrawAmount} and your remaining balance is ${
//       accountBalance - withdrawAmount
//     }`
//   );
// } else {
//   console.log(`sorry, you don't have enough money in your account`);
// }
// Design a program +
// at takes a month as input (1-12) and prints the number of days in that month.
// var month: number = 7;
// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   console.log("days are 31");
// } else if (month === 2) {
//   console.log("Days are 28");
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log("days are 30");
// } else {
//   console.log("Invalid month");
// }
// Create a program that asks the user to enter three numbers. Determine and print whether the sum of any two numbers is equal to the third.
// var num1: number = 10;
// var num2: number = 20;
// var num3: number = 50;
// if (num1 + num2 === num3 || num2 + num3 === num1 || num3 + num1 === num2) {
//   console.log("sum matched");
// } else {
//   console.log("sum did not match");
// }
// ===========
// switch case
// var weekday: number = 2;
// switch (weekday) {
//   case 1: {
//     console.log("Monday");
//     break;
//   }
//   case 2: {
//     console.log("tuesday");
//     break;
//   }
//   case 3: {
//     console.log("wednesday");
//     break;
//   }
//   case 4: {
//     console.log("Thursday");
//     break;
//   }
//   case 5: {
//     console.log("friday");
//     break;
//   }
//   default:
//     console.log("weekend");
//     break;
// }
// if (weekday === 1) {
//   console.log("monday");
// } else if (weekday === 2) {
//   console.log("tuesday");
// } else if (weekday === 3) {
//   console.log("wednesday");
// } else if (weekday === 4) {
//   console.log("thursday");
// } else if (weekday === 5) {
//   console.log("Friday");
// } else if (weekday === 6) {
//   console.log("saturday");
// } else if (weekday === 7) {
//   console.log("sunday");
// } else {
//   console.log("Wrong input");
// }
// var month: string = "March";
// switch (month) {
//   case "January": {
//     console.log(1);
//     break;
//   }
//   case "Feb": {
//     console.log(2);
//     break;
//   }
//   case "March": {
//     console.log(3);
//     break;
//   }
// }
// var num1: number = 10;
// var num2: number = 20;
// var op: string = "-";
// switch (op) {
//   case "+":
//     console.log(`Sum is = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`Difference is = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`Product is = ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`Division is = ${num1 / num2}`);
//     break;
//   default:
//     console.log(`Add correct operator`);
//     break;
// }
var given_alphabet = "a";
switch (given_alphabet) {
    case "a":
        console.log("Vowel");
        break;
    case "e":
        console.log("Vowel");
        break;
    case "i":
        console.log("Vowel");
        break;
    case "a":
        console.log("Vowel");
        break;
    case "o":
        console.log("Vowel");
        break;
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Not a vowel");
        break;
}
