/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const newNode = new Node(val);

		if (this.first) {
			newNode.next = this.first;
		} else {
			this.last = newNode;
		}

		this.first = newNode;

		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		// Throws an error if the stack is empty
		if (!this.size) throw new Error("Stack is empty");

		const node = this.first;

		this.first = this.first.next;

		this.size--;

		if (this.size === 0) this.last = null;

		return node.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		if (this.first) {
			return this.first.val;
		}
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		if (this.size > 0) {
			return false;
		}

		return true;
	}
}

module.exports = Stack;
