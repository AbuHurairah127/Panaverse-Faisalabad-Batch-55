let alphabets: string[] = ["a", "b", "c", "d"];
//last index = length -1

// const addAtEnd = (array: string[], val: string) => {
//   alphabets[array.length] = val;
//   return alphabets.length;
// };

// addAtEnd(alphabets, "o");
// addAtEnd(alphabets, "p");
// const newLenght = addAtEnd(alphabets, "q");
// console.log(alphabets, newLenght);

// const weekDays: string[] = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// const weekDay = "Sunday";
// switch ("Monday") {
//   case weekDays[0]:
//     console.log("Today is Monday");
//     break;
//   case weekDays[1]:
//     console.log("Today is Tuesday");
//     break;
//   case weekDays[2]:
//     console.log("Today is Wednesday");
//     break;
//   case weekDays[6]:
//     console.log("Today is Sunday");
//     break;

//   default:
//     break;
// }

alphabets[4] = "e";
alphabets[5] = "f";
alphabets[6] = "g";
alphabets[7] = "h";
alphabets[8] = "i";
alphabets[9] = "j";
alphabets[10] = "k";
alphabets[11] = "l";
alphabets[12] = "m";
alphabets[13] = "n";
// console.log(alphabets.length);

// console.log(`2 * 2 = 4`);
// console.log(`2 * 3 = 6`);
// console.log(`2 * 4 = 8`);
// console.log(`2 * 5 = 10`);

// Loop
// let val = 1; //2//3//4//5//6//7//8//9//10

// while (val < 10) {
//   console.log(val);
//   val++;
// }

// let numb: number = 1;
// while (numb <= 20) {
//   console.log(numb);
//   numb = numb + 2;
// }

// let arrayofnums = [];
// let val = 0;
// while (val < 10) {
//   arrayofnums[val] = val * 2;
//   val++;
// }

// let val2 = 9;
// while (val2 >= 0) {
//   console.log(arrayofnums[val2]);
//   val2--;
// }
// console.log("end program");

// let array: number[] = [
//   10, 11, 13, 14, 5, 56, 74, 34, 67, 78, 92, 300, 84302, 472, 123, 756, 88, 99,
//   100, 48, 27, 38, 34,
// ];

// let val: number = 0;
// while (val < array.length) {
//   if (val % 2 === 0) {
//     console.log(array[val]);
//   }
//   val++;
// }

// for (let i = 0; i <= 4; i++) {
//   let nums = [10, 20, 30, 40, 50];
//   console.log(nums[i]);
// }

// let number = -1;
// do {
//   console.log(number);
//   number--;
// } while (number > 0);

// let number = 11;
// do {
//   console.log(`2 * ${number} = ${number * 2}`);
//   number++;
// } while (number < 10);

// let i = 5;
// while (i >= 1) {
//   for (let j = 10; j >= 1; j--) {
//     console.log(`${i} * ${j} = ${j * i}`);
//   }
//   i--;
// }

let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = i * i;
}
let array2 = [];
for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) {
    array2[j] = j + 1;
  } else {
    array2[j] = j - 1;
  }
}
console.log("array2", array2);
console.log("array", array);
let array3 = [];
let k = 0,
  m = array.length - 1;
while (k < array.length) {
  array3[k] = array[k] + array2[m];
  k++, m--;
}

console.log("array3", array3);
