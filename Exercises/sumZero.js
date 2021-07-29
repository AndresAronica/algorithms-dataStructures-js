function sumZeroSimple(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}
sumZeroSimple([-4,-3,-2,-1,0,1,2,4,5]);

function sumZeroOptimized(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		// Si la suma es 0
		if (sum === 0) {
			// devuelvo el arr que me pide
			return [arr[left], arr[right]];
		// Sino, si es mayor a 0, significa que me pase, y deberia mover el puntero de la derecha mas a la izq, buscando un numero mas chico para comparar
		} else if (sum > 0) {
			right--;
		// Sino, si es menor a 0, me pase pero para el otro lado, y ya deberia mover el puntero izq mas a la derecha
		} else {
			left++;
		}
	}
}
sumZeroOptimized([-4,-3,-2,-1,0,1,2,3,10]);