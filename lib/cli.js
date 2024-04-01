const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const questions = require('./questions');
const { LogoText, Svg } = require('./svg');
const { Circle, Square} = require("./shapes");


class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt(questions)
      .then((responses) => {
        const Svg = this.generateSvg(responses);
        const markup = Svg.render();
        return writeFile("logo.svg", markup);
      })
      .then(() => console.log("logo created"))
      .catch((err) => {
        console.log(err);
        console.log("error, please double check");
      });
  }

  generateSvg(options) {
    const text = new LogoText(options.text, options.textColor);

    switch (options.shape) {
      case "square":
        const square = new Square(options.shapeColor);
        return new Svg(square, text);
      case "circle":
        const circle = new Circle(options.shapeColor);
        return new Svg(circle, text);
    }
  }
}

module.exports = CLI;

