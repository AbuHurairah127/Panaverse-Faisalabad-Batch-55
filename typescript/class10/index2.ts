import inquirer, { Answers, InputQuestion } from "inquirer";

const input: InputQuestion<Answers> = await inquirer.prompt([
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
