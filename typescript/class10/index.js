import { db, age } from "./index2.js";
const cars = [
    {
        model: "Crown",
        price: 30000000,
        company: "toyota",
        isInsured: false,
        colors: ["Black", "Baige"],
        registration: {
            number: "123456789ABCDEFGHIJKL",
            city: "Islamabad",
        },
    },
    {
        model: "Crown",
        price: 60000000,
        company: "toyota",
        isInsured: false,
        colors: ["Black", "Baige"],
        registration: {
            number: "123456789ABCDEFGHIJKL",
            city: "Islamabad",
        },
    },
    {
        model: "Crown1",
        price: 90000000,
        company: "toyota",
        isInsured: false,
        colors: ["Black", "Baige"],
        registration: {
            number: "123456789ABCDEFGHIJKL",
            city: "Islamabad",
        },
    },
    {
        model: "Crown",
        price: 90000000,
        company: "toyota",
        isInsured: false,
        colors: ["Black", "Baige"],
        registration: {
            number: "123456789ABCDEFGHIJKL",
            city: "Islamabad",
        },
    },
    {
        model: "Crown",
        price: 90000000,
        company: "toyota",
        isInsured: false,
        colors: ["Black", "Baige"],
        registration: {
            number: "123456789ABCDEFGHIJKL",
            city: "Islamabad",
        },
    },
];
// let highestPrice: number = 0;
// cars.forEach((car, i) => {
//   if (car.price > highestPrice) {
//     highestPrice = car.price;
//   }
// });
// const highestPriceCar = cars.find((car) => car.price === highestPrice);
// console.log("🚀 ~ highestPriceCar:", highestPriceCar);
console.log(`my database = ${db + age}`);
