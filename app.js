// require the filesystem module
const fs = require("fs");

// require generatePage
const generatePage = require("./src/page-template.js");

//collect command-line arguments
const profileDataArgs = process.argv.slice(2);

// extract arguments and store them in their own variables
const [name, github] = profileDataArgs;

// create a file: filename, data written, and callback for error
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Checkout index.html to see the output!");
});
