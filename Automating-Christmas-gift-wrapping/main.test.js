const wrapping  = require('./main');

test('Advent js test automating-Christmas-gift-wrapping ', () => {

    const gifts = ['book', 'game', 'socks'];

    const wrapped = wrapping(gifts);

    expect(wrapped[0]).toBe("******\n*book*\n******");
    expect(wrapped[1]).toBe("******\n*game*\n******");
    expect(wrapped[2]).toBe("*******\n*socks*\n*******");

});