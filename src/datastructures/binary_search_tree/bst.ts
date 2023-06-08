interface INode<T> {
	left: INode<T> | null;
	right: INode<T> | null;
	value: T;
}

class TreeNode<T> {
	public left: INode<T> | null;
	public right: INode<T> | null;
	public value: T;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree<T> {
	root: null | INode<T>;

	constructor() {
		this.root = null;
	}
	insert(value: T) {
		const newNode = new TreeNode(value);
		if (this.root == null) {
			this.root = newNode;
			return this.root;
		}
		let currentNode = this.root;
		const True = true;
		//for some reason ts-lsp complains if this is true
		while (True) {
			if (currentNode.value > value) {
				if (currentNode.left === null) {
					currentNode.left = newNode;
					return this;
				}
				currentNode = currentNode.left;
			} else {
				if (currentNode.right === null) {
					currentNode.right = newNode;
					return this;
				}
				currentNode = currentNode.right;
			}
		}
		return this;
	}
	lookup(value: T) {
		if (this.root == null) {
			return this.root;
		}
		let currentNode = this.root;
		const True = true;
		//same here
		while (True) {
			if (currentNode.value === value) return currentNode;
			if (currentNode.value > value) {
				if (currentNode.left === null) {
					return currentNode;
				}
				currentNode = currentNode.left;
			} else {
				if (currentNode.right === null) {
					return currentNode;
				}
				currentNode = currentNode.right;
			}
		}
		return null;
	}
	remove(value: T) {
		if (this.root === null) {
			return null;
		}
		let currentNode: INode<T> | null = this.root;
		let parentNode: INode<T> | null = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				//Option one: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						// if parent > current value make current left child a child of the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
							// if parent < current value make current right child a child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}
					//Option two: Right child which doesn t have a left child
				} else if (currentNode.right.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						currentNode.right.left = currentNode.left;

						// if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;
							// if parent < current, make right child of the right the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}
					// Option three: Right child that has a left child
				} else {
					let leftMost = currentNode.right.left;
					let leftMostParrent = currentNode.right;
					while (leftMost.left !== null) {
						leftMostParrent = leftMost;
						leftMost = leftMost.left;
					}
					leftMostParrent.left = leftMost.left;
					leftMost.left = currentNode.left;
					leftMost.right = currentNode.right;
					if (parentNode === null) {
						this.root = leftMost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftMost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftMost;
						}
					}
				}
			}
		}
		return true;
	}
	breadthFirstSearch() {
		let currentNode = this.root;
		let list: T[] = [];
		let queue: (INode<T> | null)[] = [];
		queue.push(currentNode);
		while (queue.length) {
			currentNode = queue[0];
			for (let i = 1; i < queue.length; ++i) {
				queue[i - 1] = queue[i];
			}
			queue.length--;
			if (currentNode === null) {
				return null;
			}
			list.push(currentNode.value);
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}
	DFSInOrder() {
		return this.traverseInOrder(this.root, []);
	}
	DFSPostOrder() {
		return this.traversePostOrder(this.root, []);
	}
	DFSPreOrder() {
		return this.travesePreOrder(this.root, []);
	}
	private traverseInOrder(node: INode<T> | null, list: T[]) {
		if (!node) {
			return [];
		}
		if (node.left) {
			this.traverseInOrder(node.left, list);
		}
		list.push(node.value);
		if (node.right) {
			this.traverseInOrder(node.right, list);
		}
		return list;
	}
	private traversePostOrder(node: INode<T> | null, list: T[]) {
		if (!node) {
			return [];
		}
		list.push(node.value);
		if (node.left) {
			this.traversePostOrder(node.left, list);
		}
		if (node.right) {
			this.traversePostOrder(node.right, list);
		}
		return list;
	}
	private travesePreOrder(node: INode<T> | null, list: T[]) {
		if (!node) {
			return [];
		}
		if (node.left) {
			this.travesePreOrder(node.left, list);
		}
		if (node.right) {
			this.travesePreOrder(node.right, list);
		}
		list.push(node.value);
		return list;
	}
}
const tree = new BinarySearchTree<number>();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.breadthFirstSearch());
// console.log(tree.remove(6));

//     9
//  4     20
//1  6  15  170
