// Solo va a hashear strings, no otros tipos de datos. Es una limitacion del curso, para evitar mas complejidad
class HashTable {
	// Tamaño por defecto, numero primo.
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	// Implementacion usando Separate Chaining
	// No maneja keys duplicadas. Si hay keys duplicadas, logicamente las guarda en la misma posicion (por hash), y al hacer get devuelve el que se inserto primero
	// Una opcion es hacer override del valor que ya existe para esa key
	set(key, value) {
		// Hasheo la key
		let index = this._hash(key);

		// Si no hay nada en esa posicion, creo el array contenedor
		if (!this.keyMap[index]) this.keyMap[index] = [];

		// Creo el array con key-value que voy a insertar dentro del array en ese index
		this.keyMap[index].push([key, value]);

		return index;
	}

	get(key) {
		// Hasheo la key
		let index = this._hash(key);

		// Reviso si hay algo en ese index
		if (this.keyMap[index] === null) return undefined;

		// Reviso si en ese index hay 1 solo elemento. Devuelvo solo el value
		if (this.keyMap[index].length == 1) return this.keyMap[index][0][1];

		// Si tiene mas de un elemento en ese index, recorro todos buscando la key. Devuelvo solo el value
		for (let i = 0; i < this.keyMap[index].length; i++) {
			if (key === this.keyMap[index][i][0]) return this.keyMap[index][i][1];
		}
	}

	values() {
		let valuesArray = [];
		// Recorro el array de arrays
		for	(let i = 0; i < this.keyMap.length; i++) {
			// Si el elemento esta vacio, paso al que sigue
			if (!this.keyMap[i]) continue;

			// Recorro el array en cada indice
			for (let j = 0; j < this.keyMap[i].length; j++) {
				// Reviso por duplicados
				if (!valuesArray.includes(this.keyMap[i][j][1]))
					valuesArray.push(this.keyMap[i][j][1]);
			}
		}
		return valuesArray;
	}

	keys() {
		let keysArray = [];
		// Recorro el array de arrays
		for	(let i = 0; i < this.keyMap.length; i++) {
			// Si el elemento esta vacio, paso al que sigue
			if (!this.keyMap[i]) continue;

			// Recorro el array en cada indice
			for (let j = 0; j < this.keyMap[i].length; j++) {
				// Reviso por duplicados
				if (!keysArray.includes(this.keyMap[i][j][0]))
					keysArray.push(this.keyMap[i][j][0]);
			}
		}
		return keysArray;
	}

	// Mala implementacion de una hash function. Es a modo de practica
	_hash(key) {
		let total = 0;
		// Los numeros primos ayudan a reducir las colisiones, separando los datos de forma mas "pareja"
		// Tambien suma si el array donde se guardan los valores tiene un length que es un numero primo
		let primeNumber = 31;
		// Math.min para que si el string es muy largo, nunca hacer un loop por mas de 100 chars
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			// -96 hace que te la posicion de la letra en el alfabeto
			let value = char.charCodeAt(0) - 96;
			total = (total * primeNumber + value) % this.keyMap.length;
		}
		return total;
	}
}

let hashTable = new HashTable(17);
hashTable.set("primeraKey", "hello1");
hashTable.set("segundaKey", "hello2");
hashTable.set("terceraKey", "duplicado");
hashTable.set("terceraKey", "duplicado");
hashTable.set("pepe", "hello4");

// Imprimir todos los valores usando .keys()
hashTable.keys().forEach(key => {
	console.log(hashTable.get(key));
})

// Imprimir todos los valores usando .values()
hashTable.values().forEach(value => {
	console.log(value);
});