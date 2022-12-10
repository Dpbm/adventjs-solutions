function checkJump(heights) {
	let directionChanges = 0;
	let direction = 'up';
	let parabola = true;

	for (let i = 1; i < heights.length + 1; i++) {
		if (directionChanges > 1) {
			parabola = false;
			break;
		}

		if (i > heights.length - 1) break;

		let tempDirection = direction;

		if (heights[i] > heights[i - 1]) {
			tempDirection = 'up';
		} else if (heights[i] < heights[i - 1]) {
			tempDirection = 'down';
		}

		if (tempDirection != direction) {
			directionChanges++;
			direction = tempDirection;
		}
	}

	return parabola;
}

module.exports = checkJump;
