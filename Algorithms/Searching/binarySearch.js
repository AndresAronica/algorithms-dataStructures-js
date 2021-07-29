function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((left + right) / 2);

	// La segunda parte del while es para que no se clave en el ultimo elemento
	while (arr[middle] !== val && left <= right) {

		//if (arr[middle] > val) right = middle -1;
		//else left = middle + 1;

		// Muevo el puntero izq/der segun corresponda
		(arr[middle] > val) ? right = middle -1 : left = middle + 1;

		// Reasigno el valor de middle
		middle = Math.floor((left + right) / 2);
	}

	//if (arr[middle] === val) return middle;
	//else return -1;
	// Es lo mismo que el if/else de arriba
	// Si arr[middle] al salir del while es igual al valor, te paso middle (index) sino -1
	return arr[middle] === val ? middle : -1;	
}

binarySearch([1,2,3,4,5], 4);