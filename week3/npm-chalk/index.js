console.log("Hello world!");

//const chalk = require("chalk"); THIS IS COMMON JS, SO WILL NOT WORK WITH INDEX.JS CODED IN ES6!

import chalk from "chalk"; //This is correct for ES6

console.log(chalk.blue("Hello world!"));
console.log(chalk.bgBlue("Hello world!"));
console.log(chalk.blue.bgWhite("Hello world!"));
console.log(chalk.magenta.bgWhite.underline.italic("Hello world!"));
console.log(chalk.yellow.bgGray.strikethrough.underline("Hello world!"));
console.log(chalk.cyan.inverse.bold("This is fun!"));
