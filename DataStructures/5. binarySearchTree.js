class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// O(log n)
	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;

			// Recorro el arbol buscando si puedo insertar el nodo, y donde
			while (true) {
				// Si es duplicado, no lo voy a insertar
				if (value === current.value) return undefined;

				// Si el nodo tiene que ir a la izquierda...
				if (value < current.value) {
					// Si no hay nada a la izquierda, lo inserto
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					// Sino, el "iterador" pasa a la izquierda y sigue buscando
					current = current.left;
				} else { // Si el nodo tiene que ir a la derecha... misma logica
					if (current.right === null) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}

	}

	// O(log n)
	find(value) {
		// Implementacion del curso
		if (this.root === null) return null;
		if (this.root.value === value) return this.root;
		let current = this.root,
		found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value < current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;

		// Mi implementacion
		/*
		if (this.root === null) return null;
		if (this.root.value === value) return this.root;
		let current = this.root;
		while(true) {
			if (value <= current.value) {
				if (current.value === value) return current;
				if (current.left !== null) {
					current = current.left;
				}
				else { 
					return undefined;
				}
			} else {
				if (value === current.value) return current;
				if (current.right !== null) {
					current = current.right;
				} else {
					return undefined;
				}
			}
		}*/
	}

	// O(log n)
	contains(value) {
		// Implementacion del curso
		if (this.root === null) return null;
		if (this.root.value === value) return this.root;
		let current = this.root,
		found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value < current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}
}

/*
			10
	5				13
2		7		11		16
*/

let bstree = new BinarySearchTree();
bstree.insert(10);
bstree.insert(5);
bstree.insert(13);
bstree.insert(2);
bstree.insert(7);
bstree.insert(11);
bstree.insert(16);