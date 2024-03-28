class LogoText {
    constructor(text,colour) {
    this.colour =colour;
    this.text = text;
    }
    render() {
        return `<text x="150" y=125 font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
}

class svg {
    constructor(shape, logtext) {
        this.shape = shape;
        this.logotext = logotext;
    }
    render() {
        const svg =`<svg version="1.1" width="300" height="200" xmls="http://www.w3.org/2000/svg">"${this.shape.render()}${this.colour}">${this.text}</text>`;
        return svg;
    }
}

module.exports = { LogoText, svg};