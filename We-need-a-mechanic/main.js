const reverseString = (text) => [...text].reverse().join('');

function checkPart(part) {
	if (part === reverseString(part)) return true;

	for (let i = 0; i < part.length; i++) {
		let newString = [...part];
		newString.splice(i, 1);
		newString = newString.join('');

		if (newString === reverseString(newString)) return true;
	}

	return false;
}

module.exports = checkPart;
