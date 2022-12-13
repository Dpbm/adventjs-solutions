const getFilesToBackup = require('./main');

test('Advent js test Backups-for-Santa-Claus-files', () => {
	const lastBackup = 1546300800;

	const changes = [
		[1, 1546300800],
		[2, 1546300800],
		[1, 1546300900],
		[1, 1546301000],
		[3, 1546301100],
	];

	const result = JSON.stringify(getFilesToBackup(lastBackup, changes));
	expect(result).toBe('[1,3]');
});
