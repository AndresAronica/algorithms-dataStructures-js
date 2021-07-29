function maxSubarraySumSimple(arr, num) {
	if (num > arr.length) {
		return null;
	}

	let max = -Infinity;

	for (let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		console.log(temp, max);
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}
maxSubarraySumSimple([2,6,9,2,1,8,5,6,3], 3);

function maxSubarraySumOptimized(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	// Si el numero de numeros que quiero sumar es mas grande que la cantidad de elementos del array, salgo
	if (num > arr.length) return null;

	// Hago la primera suma
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	// temp y max van a tener el mismo valor por ahora
	tempSum = maxSum;

	// Arranco i = num porque ya tengo la primer suma hecha, y quiero poder restar el primer elemento de los que use para sumar, y sumarle el valor que le sigue en el array
	for (let i = num; i < arr.length; i++) {
		// Eso es lo que hace esta linea
		tempSum = tempSum - arr[i - num] + arr[i];
		// Aca simplemente le asigna el valor mas alto entre maxSum y tempSum a maxSum
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}
maxSubarraySumOptimized([2,6,9,2,1,8,5,6,3], 3);