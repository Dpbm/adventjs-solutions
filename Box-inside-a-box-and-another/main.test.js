const fitsInOneBox  = require('./main');

test('Advent js test Box-inside-a-box-and-another #1', () => {

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ];

    expect(fitsInOneBox(boxes)).toBe(true);

});

test('Advent js test Box-inside-a-box-and-another #2', () => {

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ];

    expect(fitsInOneBox(boxes)).toBe(false);

});



test('Advent js test Box-inside-a-box-and-another #3', () => {

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ];
      

    expect(fitsInOneBox(boxes)).toBe(true);

});


