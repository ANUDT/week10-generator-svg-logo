const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Square} = require ('./shapes');
const questions = require('.questions');
const { LogoText, Svg } = require('./svg');
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Square } = require("./shapes");
const questions = require("./questions");
const { LogoText, Svg } = require("./svg");

class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt(questions)
      .then((responses) => {
        const svg = this.generateSvg(responses);
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
    const text = LogoText(options.text, options.textColour);

    switch (options.shape) {
      case "square":
        const square = new Square(options.shapeColour);
        return new Svg(square, text);
      case "circle":
        const cirlce = new Circle(options.shapeColour);
        return new Svg(cirlce, text);
    }
  }
}

module.exports = CLI;

