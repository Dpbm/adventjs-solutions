const getGiftsToRefill = require('./main');

test('Advent js test Doing-gifts-inventory', () => {
	const a1 = ['bike', 'car', 'bike', 'bike'];
	const a2 = ['car', 'bike', 'doll', 'car'];
	const a3 = ['bike', 'pc', 'pc'];

	const result = JSON.stringify(getGiftsToRefill(a1, a2, a3));

	expect(result).toBe('["doll","pc"]');
});
