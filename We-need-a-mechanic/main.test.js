const checkPart = require('./main');

test('Advent js test We-need-a-mechanic #1', () => {
	expect(checkPart('uwu')).toBe(true);
});

test('Advent js test We-need-a-mechanic #2', () => {
	expect(checkPart('miidim')).toBe(true);
});

test('Advent js test We-need-a-mechanic #3', () => {
	expect(checkPart('midu')).toBe(false);
});
