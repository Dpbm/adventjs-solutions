const getMaxGifts  = require('./main');

test('Advent js test Optimizing-Santas-trips #1', () => {

    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20);

});


test('Advent js test Optimizing-Santas-trips #2', () => {

    expect(getMaxGifts([50], 15, 1)).toBe(0);

});


test('Advent js test Optimizing-Santas-trips #3', () => {

    expect(getMaxGifts([50], 100, 1)).toBe(50);

});


test('Advent js test Optimizing-Santas-trips #4', () => {

    expect(getMaxGifts([50, 70], 100, 1)).toBe(70);

});

test('Advent js test Optimizing-Santas-trips #5', () => {

    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100);

});


test('Advent js test Optimizing-Santas-trips #6', () => {

    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100);

});

test('Advent js test Optimizing-Santas-trips #7', () => {

    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100);

});