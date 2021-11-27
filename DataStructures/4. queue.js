class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/*
	Siguiendo la logica de una linked list, los metodos serian push y shift.
	Los nombres para una queue son:
	push -> enqueue
	shift -> dequeue
*/
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// O(1)
	enqueue(value) {
		let node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			// Le digo al nodo que esta actualmente como last que el item que le sigue es el item recien creado
			this.last.next = node;
			this.last = node;
		}
		return ++this.size;
	}

	// O(1)
	dequeue() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.size--;
		return temp;
	}
}

let queue = new Queue();
queue.enqueue(534);
queue.enqueue(111);
queue.enqueue(555);