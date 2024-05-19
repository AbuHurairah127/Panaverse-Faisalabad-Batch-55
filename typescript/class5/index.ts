// functions
// function newFunction() {
//   console.log("Inside tool");
// }

// function sum() {
//   var num1: number = 50;
//   var num2: number = 20;
//   var num3: number = num1 + num2;
//   console.log("sum:", num3);
// }

// sum();
// sum();
// sum();
// sum();
// sum();
// sum();
// sum();
// sum();

// function multiply(num3: number) {
//   if (num3 % 2 === 0) {
//     return num3;
//   }
//   var multiply: number = num3 * 10;
//   return multiply;
// }

// function sum(_num1: number, _num2: number) {
//   var _sum: number = _num1 + _num2;
//   return _sum;
// }
// var newSum: number = sum(25, 20) + 25;
// console.log("newSum:", newSum);

// function resultSystem(eng: number, urdu: number) {
//   var result: number = eng + urdu;
//   var total: number = 200;
//   var percent: number = (result / total) * 100;
//   if (percent > 50) {
//     return "PASS";
//   } else {
//     return "FAIL";
//   }
// }
// console.log(resultSystem(20, 30));
// console.log(resultSystem(70, 30));
// var date = new Date();
// console.log("🚀 ~ file: index.ts:50 ~ date:", date);

// var myName = "ABUHURAIRAH";
// console.log(myName.toLowerCase());

// var num = Math.round(2.89798797979798543798752947);
// console.log("num:", num);
// var num1 = 30.873489237498145;
// console.log(num1.toFixed(3));

function sum(num1: number, num2: number, num3?: number) {
  if (num3) {
    var _sum = num1 + num2 + num3;
    return num1 + num2 + num3;
  }
  var _sum: number = num1 + num2;
  return _sum + 10;
}
if (sum(17, 20) % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}
const arrowFunc = () => {};

const sum2 = (_num1: number, _num2: number, _num3: number) => {
  var returnedValue = sum(10, 40, 50);
  var num3: number = _num2 + _num1 + returnedValue;
  console.log("Inside funciton", num3);
  return num3;
};
sum2(10, 20, 30);

const checkGreatestNumber = (
  num1: number,
  num2: number,
  num3: number
): void => {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num3 && num2 > num1) {
    console.log("num2", num2);
  } else {
    console.log("num3", num3);
  }
};

var output = checkGreatestNumber(10, 20, 30);
console.log("output:", output);

const function1 = () => {
  console.log("function1");
  const function2 = () => {
    console.log("function2");
  };
  function2();
  return "Something";
};
