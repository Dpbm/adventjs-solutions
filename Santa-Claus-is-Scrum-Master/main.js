const minToH = (min) => min / 60;
const sToH = (s) => s / 3600;

function reduceFraction(factor, base) {
	while (Number.isInteger(base / factor) && base != 1 && factor != 1) {
		base /= factor;
		factor /= factor;
	}

	while (base % 2 == 0 && factor % 2 == 0 && base != 1 && factor != 1) {
		base /= 2;
		factor /= 2;
	}

	return { factor, base };
}

function findFraction(n) {
	let repeatedNumbers = {};

	for (let number of String(n).substring(2)) {
		if (repeatedNumbers[number]) {
			repeatedNumbers[number]++;
		} else {
			repeatedNumbers[number] = 1;
		}
	}

	const totalDizima = Object.keys(repeatedNumbers).filter(
		(keyNumber) => repeatedNumbers[keyNumber] > 1
	);

	if (totalDizima.length > 0) {
		const factor = Number(totalDizima.join('')) - Number(String(n)[0]);
		const base = Number('9'.repeat(totalDizima.length));

		const { factor: newFactor, base: newBase } = reduceFraction(
			factor,
			base
		);

		return `${newFactor}/${newBase}`;
	}

	const factor = Number(String(n).replace('.', ''));
	const base = 10 ** String(n).substring(2).length;

	const { factor: newFactor, base: newBase } = reduceFraction(factor, base);

	return `${newFactor}/${newBase}`;
}

function getCompleted(part, total) {
	if (part === total) return '1/1';

	const [ph, pm, ps] = part
		.split(':')
		.map((partNumber) => Number(partNumber));

	const [th, tm, ts] = total
		.split(':')
		.map((partNumber) => Number(partNumber));

	const totalInH = th + minToH(tm) + sToH(ts);
	const partInH = ph + minToH(pm) + sToH(ps);

	if (partInH === 1) return `1/${totalInH}`;

	if (totalInH === 1) {
		return String(partInH * 10)
			.substring(0, 3)
			.replace('.', '/');
	}

	const divideTime = partInH / totalInH;

	if (divideTime === 0.5) {
		return '1/2';
	}

	return findFraction(divideTime);
}

module.exports = getCompleted;
