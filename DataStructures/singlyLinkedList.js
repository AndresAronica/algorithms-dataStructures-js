class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let node = new Node(val);
		// Edge case para el primer push()
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			// Le digo al nodo que esta actualmente como tail que el item que le sigue es el item recien creado
			this.tail.next = node;
			// Asigno como tail el nodo recien creado
			this.tail = node;
		}
		this.length++;
		// devuelvo la instancia de SinglyLinkedList
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;
		// quiero buscar el ultimo elemento que tiene un next != null, o sea que voy a llegar hasta el elemento previo a tail
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// O(1)
	shift() {
		if (!this.head) return undefined;
		let head = this.head;
		this.head = head.next;
		this.length--;
		if (this.length === 0) this.tail = null;
		return head;
	}

	// O(1)
	unshift(val) {
		let node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
			// let oldHead = this.head;
			// this.head = node;
			// this.head.next = oldHead;
		}
		this.length++;
		return this;
	}

	// O(n)
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let i = 0;
		let currentNode = this.head;

		while (i !== index) {
			currentNode = currentNode.next;
			i++;
		}
		return currentNode;
	}

	//O(n)
	set(index, val) {
		let node = this.get(index);
		// if (!node) return false;
		// else {
		// 	node.val = val;
		// 	return true;
		// }
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	// O(n)
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		// El operador '!!' transforma el resultado de la operacion a un bool, si devuelve un valor falsy es false, sino true
		if (index === this.length) return !!this.push(val);
		if (index === 0) return	!!this.unshift(val);
		
		let newNode = new Node(val);

		let prevNode = this.get(index-1);
		let nextNode = prevNode.next;
		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
		return true;

		// let prevNode = this.get(index-1);
		// let nextNode = this.get(index);
		// prevNode.next = newNode;
		// newNode.next = nextNode;
		// this.length++;
		// return true;
	}

	// O(n)
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let removedNode = prevNode.next;
		prevNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let prev = null;

		for(let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;

			prev = node;
			node = next;
		}
		return this;
	}

	// traverse() {
	// 	let current = this.head;
	// 	while (current) {
	// 		console.log(current.val);
	// 		current = current.next;
	// 	}
	// }
}

let ll = new SinglyLinkedList();
ll.push(23);
ll.push(111);
ll.push(534);
//ll.pop();