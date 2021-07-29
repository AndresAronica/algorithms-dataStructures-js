function merge(arr1, arr2) {
	// Crear un array vacio
	let results = [];
	let i = 0;
	let j = 0;

	// Mientras tenga elementos en los 2 arrays para ir comparando
	while (i < arr1.length && j < arr2.length) {
		// Pregunto cual es mas chico, y ese lo pongo primero
		// Ademas, me muevo al siguiente elemento de ese mismo array para seguir comparando
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	// Una vez que sali del while que consulta si quedan elementos EN LOS 2 ARRAYS
	// Consulto en cual todavia me quedan elementos
	// Y simplemente pusheo al final de mi array results todos los elementos que queden del array que no termine de recorrer
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	// Si entra a uno de los 2, no entra al otro
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	// Devolver el array creado en la funcion
	return results;
}

// Merge sort es una funcion recursiva, por lo cual tiene que cumplir ciertas condiciones
function mergeSort(arr) {
	// Mi base case, por la condicion por la que dejo de hacer llamadas recursivas
	if (arr.length <= 1) return arr;
	// El punto en el cual divido el array en 2
	let mid = Math.floor(arr.length/2);
	// Sobre las mitades se llama a mergeSort
	// La logica de esto va a hacer que yo voy a tener toda la mitad izquierda dividida primero, ordenada despues antes de empezar a entrar a la mitad derecha
	// La mitad de la izquierda
	let left = mergeSort(arr.slice(0, mid));
	// La mitad de la derecha
	let right = mergeSort(arr.slice(mid));

	// Por ultimo llamo a merge sobre las 2 mitades para que haga el ordenamiento de esas 2 mitades
	return merge(left, right);
}

// La funcion merge debe recibir 2 arr ya ordenados para poder mergearlos, ordenandolos
//merge([1,10,50],[2,14,99,100]);

mergeSort([52,34231,3125,1,2,6,78,3,5,3,4]);