const selectSleigh = require('./main');

test('Advent js test Eletric-sleighs-wow', () => {
	const distance = 30;
	const sleighs = [
		{ name: 'Gorusuke', consumption: 0.3 },
		{ name: 'Madeval', consumption: 0.5 },
		{ name: 'Lolivier', consumption: 0.7 },
		{ name: 'Hyuuh', consumption: 1 },
	];
	expect(selectSleigh(distance, sleighs)).toBe('Madeval');
});
