class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

// Se podria agregar como propiedad al nodo la hora de insercion en la lista, para agregarlo como comparacion y asegurarse de que ante nodos 2 con la misma prioridad, pase primero el que entro primero
// Generalmente, una priority queue no filtra solo por prioridad, sino por algun otro criterio tambien
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		// Creo el nodo a insertar
		let node = new Node(value, priority);

		// Lo agrego al final del array
		this.values.push(node);

		// Despues hago bubble up hasta encontrarle posicion
		this.bubbleUp();
	}

	bubbleUp() {
		// index va a controlar la posicion actual del elemento a ingresar
		let index = this.values.length - 1;

		const element = this.values[index];

		// Mientras no haya encontrado su posicion final...
		while(index > 0) {
			// Calculo el index del padre
			let parentIndex = Math.floor((index - 1) / 2);
			// Consigo el valor del padre
			let parentElement = this.values[parentIndex];

			if (parentElement.priority <= element.priority) break;
			
			// Si el padre es mas chico que el elemento que se inserta, los roto y pongo el indice actual en donde estaba el padre
			this.values[parentIndex] = element;
			this.values[index] = parentElement;
			index = parentIndex;
		}
	}

	// Elimina el nodo root (elemento mas grande de la coleccion)
	dequeue() {
		// Elemento que voy a devolver al final
		const min = this.values[0];
		// Elimino el ultimo elemento del final
		const lastElement = this.values.pop();

		// Si hay mas de un elemento, hace esta parte. Sino simplemente elimina root y lo devuelve
		if (this.values.length > 0) {
			// Pongo el ultimo elemento como root
			this.values[0] = lastElement;
			this.sinkDown();
		}

		return min;
	}

	sinkDown() {
		// Empiezo a recorrer desde root
		let index = 0;
		// Dos variables para acortar el codigo
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			// Busco indice y valor de los hijos del elemento que estoy revisando
			let leftChildIndex = (index * 2) + 1;
			let rightChildIndex = (index * 2) + 2;
			let leftChildElement, rightChildElement;
			let swap = null;

			// Controla que realmente exista un hijo a la izquierda
			if (leftChildIndex < length) {
				leftChildElement = this.values[leftChildIndex];
				// Pregunta a ver si los tiene que rotar
				if (leftChildElement.priority < element.priority) {
					// Swap se va a usar para guardar la posicion con la que hay que rotar
					swap = leftChildIndex;
				}
			}

			// Controla que realmente exista un hijo a la derecha
			if (rightChildIndex < length) {
				rightChildElement = this.values[rightChildIndex];
				// Pregunta a ver si los tiene que rotar
				// Si no iba a hacer swap con el izquierdo Y el hijo derecho es mas grande que el elemento
				// O si SI iba a hacer swap con el izquierdo, pero el derecho es mas grande que el izquierdo
				if ((swap === null && rightChildElement.priority < element.priority) || (swap !== null && rightChildElement.priority < leftChildElement.priority)) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break;

			// Hace el swap
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}

	}
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("resfrio", 5);
priorityQueue.enqueue("herida de bala", 1);
priorityQueue.enqueue("fiebre alta", 4);
priorityQueue.enqueue("brazo roto", 2);
priorityQueue.enqueue("covid", 3);