const Circle = require('./shapes.js');

describe('Circle', () => {

test('return SVG with correct attributes', () => {
    const circle = new Circle('red', 50);
    const svg = circle.render();

    expect(svg).toContain('<circle cx="100" cy="100" r="50" fill="red" />');
});

});