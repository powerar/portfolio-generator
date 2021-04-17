// // require the filesystem and inquirer module
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
// const fs = require("fs");

// // require generatePage
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// // create a file: filename, data written, and callback for error
// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Checkout index.html to see the output!");
// });
