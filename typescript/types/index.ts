type Car = { model: string; modelYear: number; isRegistered: boolean };
type English = string;

// Primitive Data Types

let name1: English = "Abu Hurairah";
let age: number = 20;
let age1: number = 20.5;
let num1: number = -20.5;
let isMarried: boolean = false;
let unDefined: undefined = undefined;
let null1: null = null;

// User Defined Data types

let names: string[] = ["Abu Hurairah", "Naveed Sarwar", "Sulman"];
let ages: number[] = [10, 20, 30, 40];
let array: [...number[], string] = [10, 20, 30, 40, "Abuhurairah"];

let car1: Car = {
  model: "Rolls Royce Phantom 8 V2",
  modelYear: 2024,
  isRegistered: true,
};

// Any

let value: any = "Abu Hurairah";
value = 20;
value = null;
value = undefined;
value = false;
value = ["Abc ", "Def"];
value = [20, 40];
