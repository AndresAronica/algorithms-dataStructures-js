// Helper function para conseguir el numero que se encuentra en el indice que le paso (El indice empieza de derecha a izquierda)
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function para saber cuantos digitos tiene el numero que le paso
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function que devuelve la mayor cantidad de digitos que tiene un numero de la lista
function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigits = mostDigits(nums);

	for (let i = 0; i < maxDigits; i++) {
		
	}
}