class Shape {
    constructor(color = "#000000") {
      this.color = color;
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      const svg = `<rect x="1000" y=40 width="120" height="120" fill="${this.color}" />`;
      return svg;
    }
  }
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
    render() {
      const svg = `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
      return svg;
    }
  }
  module.exports = { Shape, Square, Circle };