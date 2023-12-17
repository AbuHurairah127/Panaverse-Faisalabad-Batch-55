// Scopes

// const age: number = 21;

// let _name: string = "John Doe";

// {
//   let a = 10;
//   {
//     console.log(a);
//   }
// }

// const sum = () => {
//   let num = 10;
//   let num2 = 20;
// };

// let a = 10;
// a += 20;
// const b = 10;
// b += 20; //error

// Arrays

let student1: string = "Ali";
let student2: string = "Abu Hurairah";
let singleRollNo = () => {
  return 1;
};

// let studentNames: string[] = [];
// let myName = studentNames[1];
// console.log("myName:", myName);

// lastIndex = arrayLength -1
// console.log(studentNames[singleRollNo()]);
// console.log(studentNames[5], studentNames[0], studentNames[3]);

// let rollNo: number[] = [1, 2, 3, 4];
// let data = 2;
// console.log(rollNo[data]);
// console.log(studentNames[rollNo[1]], rollNo[1]);
// console.log(studentNames[studentNames.length - 2]);

// studentNames.push("Wali", "Irum", "Yahya", "Abdullah", "Abdul Rehman");
// studentNames.pop(); //Abdul Rehman
// studentNames.pop(); //Abdullah
// studentNames.pop(); //Yahya
// console.log(studentNames.push("Shahzad"));
// console.log(" studentNames:", studentNames);
// let removedVale = studentNames.pop();
// if (removedVale) {
//   studentNames.push(removedVale);
// }
// console.log("After pop", studentNames);

// let studentNames: string[] = ["Ali", "Abu Hurairah"];
// console.log(studentNames.unshift("Naveed Sarwar", "Abdullah"));
// console.log(studentNames);

// console.log(names.pop()); //will return removed elem
// console.log(names.shift()); // same as above
// console.log(names.push("Ahmad")); // will return new array length
// console.log(names);
// console.log(names.unshift("Ali")); //same as above

// let returnedValue = names.push("Abdullah");
// console.log("🚀 ~ file: index.ts:71 ~ returnedValue:", returnedValue);

// let names: string[] = [
//   "Ali",
//   "Yahya",
//   "Abu Hurairah",
//   "Naveed Sarwar",
//   "Abdullah",
// ];
// console.log("Before", names);
// names.splice(0, 0, "Abu Hurairah");

// console.log("After", names);

// let todos: string[] = [
//   "Wake up",
//   "Offer Prayer",
//   "Morning Walk",
//   "Breakfast",
//   "University",
//   "Have Lunch",
//   "Take a nap",
//   "Have Lunch",
//   "Work on Assignment",
//   "Have Lunch",
//   "Match",
//   "Dinner",
//   "Sleep",
// ];

// todos.splice(1, 1);
// todos.splice(todos.indexOf("Have Lunch"), 1, "Prepare Lunch");

// todos.splice(4, 0, "Get ready");
// todos.splice(todos.length - 1, 1);
// console.log(todos);
// console.log(todos.indexOf("Have Lunch"));

let a = [10, 20, 30, 40, 50]; //123
let b = a.slice(0); //234
let c = a.splice(2, 2);
console.log(c);
console.log(a.includes(10));
