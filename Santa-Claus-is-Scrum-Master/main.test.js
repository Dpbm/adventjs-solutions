const getCompleted = require('./main');

test('Advent js test Santa-Claus-is-Scrum-Master #1', () => {
	expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3');
});

test('Advent js test Santa-Claus-is-Scrum-Master #2', () => {
	expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2');
});

test('Advent js test Santa-Claus-is-Scrum-Master #3', () => {
	expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1');
});

test('Advent js test Santa-Claus-is-Scrum-Master #4', () => {
	expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6');
});

test('Advent js test Santa-Claus-is-Scrum-Master #5', () => {
	expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3');
});

test('Advent js test Santa-Claus-is-Scrum-Master #6', () => {
	expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5');
});
