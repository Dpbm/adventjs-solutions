function getGiftsToRefill(a1, a2, a3) {
	/*
        const a1 = ['bike', 'car']
        const a2 = ['bike', 'doll', 'car']
        const a3 = ['bike', 'pc'] 
    */
	a1 = new Set(a1);
	a2 = new Set(a2);
	a3 = new Set(a3);

	/*
        ['bike', 'car', 'bike', 'doll', 'car', 'bike', 'pc']
    */

	const dataArray = [...a1, ...a2, ...a3];
	let totalAppearances = {};
	dataArray.forEach((value) => {
		const totalValue = totalAppearances[value];
		totalAppearances[value] = !totalValue ? 1 : totalValue + 1;
	});

	const unique = Object.entries(totalAppearances)
		.filter(([element, total]) => total == 1)
		.map(([element, total]) => element);

	return unique;
}

module.exports = getGiftsToRefill;
