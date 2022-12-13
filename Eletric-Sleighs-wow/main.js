function selectSleigh(distance, sleighs) {
	sleighs.sort((a, b) => {
		return a.consumption * distance - b.consumption * distance;
	});

	return sleighs[1].name;
}

module.exports = selectSleigh;
