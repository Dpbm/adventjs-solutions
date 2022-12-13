function getFilesToBackup(lastBackup, changes) {
	let index = 0;

	while (changes[index][1] <= lastBackup) index++;

	changes = changes.slice(index);

	const changedFiles = new Set(changes.map(([id, _]) => id));

	return [...changedFiles];
}

module.exports = getFilesToBackup;
