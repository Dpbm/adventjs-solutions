const createCube = require('./main');

test('Advent js test Creating-xmas-decorations #1', () => {
	const result = '/\\_\\\n\\/_/';

	expect(createCube(1)).toBe(result);
});

test('Advent js test Creating-xmas-decorations #2', () => {
	const result = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/';

	expect(createCube(2)).toBe(result);
});

test('Advent js test Creating-xmas-decorations #3', () => {
	const result =
		'  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/';

	expect(createCube(3)).toBe(result);
});
