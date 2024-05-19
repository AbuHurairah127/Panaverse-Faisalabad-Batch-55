import inquirer from "inquirer";
export const askPin = async () => {
    const pin = await inquirer.prompt([
        {
            name: "pin",
            type: "password",
            mask: "*",
            message: "Enter your Pin: ",
        },
    ]);
    return pin;
};
