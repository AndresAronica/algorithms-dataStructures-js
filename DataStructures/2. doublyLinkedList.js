class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			// Corta la segunda relacion
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}

	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.tail = null;
			this.head = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			// Corta la segunda relacion
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		let node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let i, currentNode;
		if (index <= this.length / 2) {
			i = 0;
			currentNode = this.head;
			while (i !== index) {
				currentNode = currentNode.next;
				i++;
			}
		} else {
			i = this.length - 1;
			currentNode = this.tail;
			while (i !== index) {
				currentNode = currentNode.prev;
				i--;
			}
		}
		return currentNode;
	}

	
	set(index, val) {
		let node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		// El operador '!!' transforma el resultado de la operacion a un bool, si devuelve un valor falsy es false, sino true
		if (index === this.length) return !!this.push(val);
		if (index === 0) return	!!this.unshift(val);
		
		let newNode = new Node(val);
		let prevNode = this.get(index-1);
		let nextNode = prevNode.next;

		prevNode.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let removedNode = this.get(index);
		// let prevNode = removedNode.prev;
		// let nextNode = removedNode.next;

		// prevNode.next = nextNode;
		// nextNode.prev = prevNode;

		// Otra forma de hacerlo, menos clara pero sin necesidad de declarar variables
		// El siguiente del nodo anterior va a ser el siguiente del nodo a borrar
		removedNode.prev.next = removedNode.next;
		// El previo del nodo siguiente va a ser el previo del nodo a borrar
		removedNode.next.prev = removedNode.prev;

		removedNode.prev = removedNode.next = null;

		this.length--;
		return removedNode;
	}
}

let dll = new DoublyLinkedList();
dll.push("Andres");
dll.push("Diego");
dll.push("Gonzalo");