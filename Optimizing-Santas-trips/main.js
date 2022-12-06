const { sum } = require('lodash');

function k_combinations(set, k) {
	//from https://gist.github.com/axelpale/3118596
	var i, j, combs, head, tailcombs;

	if (k > set.length || k <= 0) {
		return [];
	}

	if (k == set.length) {
		return [set];
	}

	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}

	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

function getCombinations(set) {
	// from https://gist.github.com/axelpale/3118596
	var k, i, combs, k_combs;
	combs = [];

	// Calculate all non-empty k-combinations
	for (k = 1; k <= set.length; k++) {
		k_combs = k_combinations(set, k);
		for (i = 0; i < k_combs.length; i++) {
			combs.push(k_combs[i]);
		}
	}
	return combs;
}

function getMaxGifts(giftsCities, maxGifts, maxCities) {
	if (maxGifts < 1 || giftsCities.length < 1 || maxCities < 1) return 0;

	if (maxCities == 1) {
		const gifts = giftsCities.sort((a, b) => b - a);
		let i = 0;
		while (gifts[i] > maxGifts) {
			i++;
		}
		return gifts[i] || 0;
	}

	const combinations = getCombinations(giftsCities);

	const validCombinations = combinations.filter(
		(combination) =>
			sum(combination) <= maxGifts && combination.length <= maxCities
	);

	const sortedCombinations = validCombinations.sort((a, b) => {
		const totalA = sum(a);
		const totalB = sum(b);

		if (totalA == totalB) return b.length - a.length;

		return totalB - totalA;
	});

	return sum(sortedCombinations[0]);
}

module.exports = getMaxGifts;
