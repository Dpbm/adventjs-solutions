const { every } = require('lodash');

function countTime(leds) {
	if (every(leds)) return 0;

	let totalTime = 0;

	while (!every(leds)) {
		let newLeds = [...leds];
		for (let i = 0; i < leds.length; i++) {
			if (!leds[i] && !!leds[i === 0 ? leds.length - 1 : i - 1]) {
				newLeds[i] = 1;
			}
		}

		leds = [...newLeds];
		totalTime += 7;
	}

	return totalTime;
}

module.exports = countTime;
