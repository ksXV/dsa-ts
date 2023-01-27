type LinkedListType<T> = {
  value: T;
  next: LinkedListType<T> | null;
};

class LinkedListNode<T> {
  public value: T;
  public next: null | LinkedListType<T>;
  constructor(item: T) {
    this.value = item;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: LinkedListType<T>;
  private length: number;
  private tail: LinkedListType<T>;
  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  public append(value: T) {
    const newNode = new LinkedListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  public prepend(value: T) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  public printList() {
    const array: Array<T> = [];
    let currentNode: LinkedListType<T> | null = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  public insert(index: number, value: T) {
    const newNode = new LinkedListNode(value);
    let currentNode: LinkedListType<T> | null = this.traverseList(index);
    if (currentNode === null) {
      return null;
    }
    const nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }
  public traverseList(index: number) {
    let currentNode: LinkedListType<T> | null = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  public remove(index: number) {
    let currentNode: LinkedListType<T> | null = this.traverseList(index);

    if (currentNode === null) {
      return null;
    }
    const nextNode = currentNode.next;
    const afterNode = nextNode!.next;
    currentNode.next = afterNode;
    this.length--;
    return this;
  }
  public reverse() {
    const currentLinkedList = this.printList();
    const currentLinkedListLength = currentLinkedList.length;
    const newList = new LinkedList(
      currentLinkedList[currentLinkedListLength - 1]
    );
    for (let i = currentLinkedListLength - 2; i >= 0; i--) {
      newList.append(currentLinkedList[i]);
    }
    return newList;
  }
}

const foo = new LinkedList<number>(3);
console.log(foo.append(5));
console.log(foo.prepend(7));
console.log(foo.append(2));
console.log(foo.insert(2, 10));
console.log(foo.printList());
console.log(foo.remove(2));
console.log(foo.printList());
console.log(foo.reverse().printList());
