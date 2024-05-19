import inquirer from "inquirer";
const input = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "What is your age?",
    },
    {
        name: "operator",
        type: "list",
        message: "Please choose one of them",
        choices: ["+", "-", "*", "/"],
    },
]);
console.log("input", input);
