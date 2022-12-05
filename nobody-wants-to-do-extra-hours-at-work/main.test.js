const countHours  = require('./main');

test('Advent js test nobody-wants-to-do-extra-hours-at-work ', () => {

    const holidays = ['01/06', '04/01', '12/25'];
    const year = 2022;

    expect(countHours(year, holidays)).toBe(4);

});