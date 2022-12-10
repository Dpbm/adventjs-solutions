const checkJump = require('./main');

test('Advent js test The-Santa-Claus-Sleight-jump #1', () => {
	expect(checkJump([1, 3, 8, 5, 2])).toBe(true);
});

test('Advent js test The-Santa-Claus-Sleight-jump #2', () => {
	expect(checkJump([1, 7, 3, 5])).toBe(false);
});
