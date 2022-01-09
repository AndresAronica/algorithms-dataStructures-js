class TreeNode {
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
		let newNode = new TreeNode(value);
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

	BFS() {
		let dataToReturn = [];
		let nodesToVisit = new Queue()
		let currentNode = this.root;

		nodesToVisit.enqueue(currentNode);

		while (nodesToVisit.size > 0) {
			// Saco el nodo actual de la queue, porque ya lo visite
			currentNode = nodesToVisit.dequeue().value;
			// Agrego su valor al array que voy a devolver
			dataToReturn.push(currentNode.value);
			// Me fijo si tiene elementos a la izquierda y a la derecha, para agregarlos a la queue
			if (currentNode.left) nodesToVisit.enqueue(currentNode.left);
			if (currentNode.right) nodesToVisit.enqueue(currentNode.right);
		}
		return dataToReturn;
	}
	
	// En PreOrder el primer nodo que se visita es root. Se visita de arriba hacia abajo
	DFSPreOrder() {
		let dataToReturn = [];
		function traverse(node) {
			// Pongo el nodo en el array porque ya lo visite y sigo bajando
			dataToReturn.push(node.value);

			// Sigo recorriendo de forma recursiva hacia abajo
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}
		traverse(this.root);
		return dataToReturn;
	}
	
	// En PostOrder el ultimo nodo que se visita es root. Se visita de abajo hacia arriba
	// Se puede usar para exportar la estructura del arbol de una forma facil de copiar/clonar/almacenar la estructura
	DFSPostOrder() {
		let dataToReturn = [];
		function traverse(node) {
			// Recorro de forma recursiva hasta el final del arbol
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);

			// Una vez que llegue al final, pongo el nodo en el array porque ya lo visite y vuelvo para arriba
			dataToReturn.push(node.value);
		}
		traverse(this.root);
		return dataToReturn;
	}

	// En InOrder se visita de izquierda a derecha, de abajo hacia arriba
	// Si se usa en un BST, el resultado van a ser los valores ordenados de forma ascendente
	DFSInOrder() {
		let dataToReturn = [];
		function traverse(node) {
			// Recorro de forma recursiva hasta el final del lado izquierdo del arbol
			node.left && traverse(node.left);
			// Una vez que llegue al final, pongo el nodo en el array porque ya lo visite y voy a visitar el lado derecho
			dataToReturn.push(node.value);
			// Se puede escribir de esta forma tambien. Misma logica que el if
			node.right && traverse(node.right);
		}
		traverse(this.root);
		return dataToReturn;
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