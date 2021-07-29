function pivot(arr, start=0, end=arr.length+1) {

	let pivot = arr[start];

	// Controla a donde vamos a cambiar el pivot al final, y es lo que se va a devolver
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			// Si el elemento en i es mas chico que pivot (el elemento que uso para comparar), entonces aumento swapIndex en 1, para saber hasta que posicion lo tengo que mover una vez termine de recorrer el array.
			swapIndex++;
			// Hace el swap
			[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
		}
	}
	[arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);

		// Lado izquierdo
		quickSort(arr, left, pivotIndex - 1);

		// Lado derecho
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

let arr = [4,8,2,1,5,7,6,3];

console.log(arr);
quickSort(arr);
console.log(arr);