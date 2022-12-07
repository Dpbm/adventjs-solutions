function createCube(size) {
	let top = [];
	let bottom = [];

	for (let i = size; i > 0; i--) {
		const spacesQuantityTop = i - 1;
		const spaceTop = ' '.repeat(spacesQuantityTop);
		const initTop = '/\\'.repeat(size - spacesQuantityTop);
		const bodyTop = '_\\'.repeat(size);

		const spacesQuantityBottom = size - i;
		const spaceBottom = ' '.repeat(spacesQuantityBottom);
		const initBottom = '\\/'.repeat(i);
		const bodyBottom = '_/'.repeat(size);

		top.push(spaceTop + initTop + bodyTop);
		bottom.push(spaceBottom + initBottom + bodyBottom);
	}

	return top.join('\n') + '\n' + bottom.join('\n');
}

module.exports = createCube;
