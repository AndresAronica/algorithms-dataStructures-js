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

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		return this;
	}
}

/*
			10
	5				13
2		7		11		16
*/

let bstree = new BinarySearchTree();
bstree.root = new Node(10);
// bstree.root.right = new Node(15);
// bstree.root.left = new Node(7);
// bstree.root.left.right = new Node(9);
// bstree.root.left.left = new Node(5);