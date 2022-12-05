const distributeGifts  = require('./main');

test('Advent js nobody-wants-to-do-extra-hours-at-work ', () => {

    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    expect(distributeGifts(packOfGifts, reindeers)).toBe(2);

});