
const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter text for the logo. (Must not be more than 3 characters.)",
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color",
  },
  {
    name: "shape",
    type: "list",
    message: "Select a shape for the logo",
    choices: ["circle", "square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Enter a shape color",
  },
];

module.exports = questions;
