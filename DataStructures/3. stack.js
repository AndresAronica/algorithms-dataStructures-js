class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/*
	En un stack, se espera que Push y Pop sean O(1)
	Lo mejor es usar los metodos shift & unshift de una LinkedList (llamandolos push & pop por claridad)
*/
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// O(1)
	push(value) {
		let node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		return ++this.size;
	}

	// O(1)
	pop() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.size--;
		return temp.value;

		// Asi lo habia hecho yo, tambien funcionaba bien
		/*
		if (!this.first) return undefined;
		let temp = this.first;
		this.first = temp.next;
		this.size--;
		if (this.size === 0) this.last = null;
		return temp;*/
	}
}

let stack = new Stack();
stack.push(534);
stack.push(111);
stack.push(555);