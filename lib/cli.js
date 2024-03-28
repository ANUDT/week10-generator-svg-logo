const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Square} = require ('./shapes');
const questions = require('.questions');
const { LogoText, svg } = require('./svg');

class CLI {
  constructor() {
   }
  run(){

    return inquirer
      .prompt(questions)
      .then ((responses)) => {
        const SVG = this.generateSvg(responses);
        const markup = SVG.render ();
        return writeFile("logo.svg", markup);
      
      };

      then(() => console.log('logo created'))
      .catch((err) => {
        console.log(err);
        console.log('error, please double check');
      });
  }

generateSvg(options) {

  const LogoTex = LogoTex(options.text, options.textColour);

  switch (options.shape) {
  case "square":
    const Square = new Square(options.shapeColour)
    return new SVG(Square, LogoText);
  case "circle":
    const Circle = new Circle(options.shapeColour)
    return new SVG(Circle, LogoText);
  }
 }
}

module.exports = CLI;
