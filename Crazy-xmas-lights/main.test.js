const countTime = require('./main');

test('Advent js test Crazy-xmas-lights #1', () => {
	expect(countTime([0, 1, 1, 0, 1])).toBe(7);
});

test('Advent js test Crazy-xmas-lights #2', () => {
	expect(countTime([0, 0, 0, 1])).toBe(21);
});

test('Advent js test Crazy-xmas-lights #3', () => {
	expect(countTime([0, 0, 1, 0, 0])).toBe(28);
});
