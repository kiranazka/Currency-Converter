import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\n Welcome to Currency Converter \n"));
//Define the list of Currency
let exchangeRate = {
    "USD": 1, // Base Currency
    "PKR": 275, // Pakistani Rupee
    "GBP": 0.8, // British Pound
    "ERU": 0.9, // ERU
    "AUD": 1.2, // Australian Dollar
    "CAD": 1.1, // Canadian Dollar
    "JPY": 110, // Japanese Yen
    "CNY": 6.9 // Chinese Yuan
};
// Prompt the User select Currenies to covert from to end
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "ERU", "AUD", "CAD", "JPY", "CNY"],
        message: "Select the Currency to convert From:",
    },
    {
        name: "to_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "ERU", "AUD", "CAD", "JPY", "CNY"],
        message: "Select the Currency to convert To:",
    },
    // user Amount input
    {
        name: "amount",
        type: "number",
        message: "Enter the Amount to convert:",
    }
]);
// perfrom currency conversion by using Formula
let result = exchangeRate[userAnswer.from_currency];
let ToAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount;
let basedAmount = amount / result;
let convertAmount = basedAmount * ToAmount;
// Display the converted Amount
console.log(chalk.strikethrough(`convertAmount = ${convertAmount}`));
