"use strict";
// // let car = ["color","white", 2023, true, "5 seater"];
// let car1 = {
//   color: "Black",
//   modelYear: 2023,
//   isInsured: true,
//   type: "Sedan",
// };
// let car2 = {
//   modelYear: 2024,
//   isInsured: false,
//   type: "SUV",
//   color: "White",
//   owners: ["Abu Hurairah", "Naveed Sarwar"],
//   startEngine: () => {
//     console.log("Starting Engine");
//     console.log("Engine Started");
//   },
// };
// // console.log("car2.color", car2.modelYear, car2.color);
// // car2.startEngine();
// let laptopColor = "Black";
// let laptopPrice = 800000;
// let laptop2Color = "Black";
// let laptop2Price = 123456;
// let laptops = ["Grey", 800000, "Black", 123456];
// let cars = [
//   {
//     type: "sedan",
//     make: "Toyota",
//     model: "Crown",
//   },
//   {
//     type: "SUV",
//     make: "Lexus",
//     model: "Lx600",
//   },
// ];
// console.log("cars[0]", cars[0].make);
// const hall = {
//   area: 12345,
//   chairsCount: 250,
//   heightInFt: 14,
//   chair: {
//     color: ["red", "Blue"],
//     type: "sofa",
//     material: "wood",
//     fixed: true,
//   },
//   AC_Count: 2,
//   AC: {
//     color: "white",
//     company: "Haier",
//   },
// };
// console.log("hall.chair.color[0]", hall.chair.color[0]);
// let car = {
//   brand: "BMW",
//   modelYear: 2023,
//   color: "black",
//   model: "M5 Competition",
//   isInsured: false,
//   registration: {
//     city: "Faisalabad",
//     no: 2345,
//   },
//   owner: ["Abu Hurairah", "Naveed Sarwar"],
//   startEngine: (_brand: string) => {
//     console.log("_brand", _brand);
//   },
// };
// const listOfCars = [
//   {
//     make: "Lexus",
//     color: "Black",
//     model: "Lx600",
//     type: "SUV",
//   },
//   {
//     make: "Toyota",
//     color: "Black",
//     model: "Crown",
//     type: "sedan",
//   },
//   {
//     make: "Mercedes-Benz",
//     color: "Black",
//     model: "S-Class Mayback",
//     type: "sedan",
//   },
// ];
// listOfCars.forEach((car) => {
//   if (car.type == "sedan") {
//     console.log(car.make);
//   }
// });
// listOfCars.push({
//   make: "Rolls Royce",
//   color: "Black",
//   model: "Phantom 8 Series 2",
//   type: "sedan",
// });
// console.log(listOfCars);
// const listOfStudents = [
//   {
//     name: "Abu Hurairah",
//     email: "dev.abuhurairah@gmail.com",
//     age: 20,
//   },
// ];
let car = [
    {
        make: "Rolls Royce",
        model: "Phantom 8 Series 2",
        modelYear: 2024,
    },
];
let cars;
// Make a todo list
// {
//   id: number;
//   text: string;
//   description: string;
// }
// Add Todo
// Delete a specific todo using id
// Update a todo text
// print all todos
let todos = [
    { id: 1, text: "Awake", description: "Wake up from sleep" },
    { id: 2, text: "Breakfast", description: "Breakfast" },
];
todos.splice(todos.length, 0, {
    id: 3,
    text: "Go to University",
    description: "Go to university to attend the viva exam",
});
todos.push({
    id: 4,
    text: "Lunch",
    description: "Lunch with friends after exam",
});
// console.log("todos after add", todos);
todos = todos.filter((todo) => todo.id > 2);
console.log("todos after delete", todos);
todos = todos.map((todo) => {
    if (todo.id === 1) {
        return Object.assign(Object.assign({}, todo), { text: "Wakeup for namaz" });
        // return {
        //   id: todo.id,
        //   description: todo.description,
        //   text: "Awake for namaz",
        // };
    }
    else {
        return todo;
    }
});
// console.log("todos after delete", todos);
