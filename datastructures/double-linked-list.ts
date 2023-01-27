//double linked list
//a node should point at the next value and previous value
type DoubleLinkedListType<T> = {
  value: T;
  prevValue: DoubleLinkedListType<T> | null;
  next: DoubleLinkedListType<T> | null;
};

class DoubleLinkedListNode<T> {
  public value: T;
  public prevValue: DoubleLinkedListType<T> | null;
  public next: null | DoubleLinkedListType<T>;
  constructor(item: T, prevValue: DoubleLinkedListType<T> | null = null) {
    this.value = item;
    this.prevValue = prevValue;
    this.next = null;
  }
}

class DoubleLinkedList<T> {
  private head: DoubleLinkedListType<T>;
  private tail: DoubleLinkedListType<T>;
  private length: number;

  constructor(value: T) {
    this.head = {
      value,
      prevValue: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  public printList() {
    const array: Array<Array<T | null>> = [];
    let currentNode: DoubleLinkedListType<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.prevValue !== null) {
        array.push([currentNode.value, currentNode.prevValue.value]);
      } else {
        array.push([currentNode.value, null]);
      }
      currentNode = currentNode.next;
    }
    return array;
  }
  public traverseList(index: number) {
    let currentNode: DoubleLinkedListType<T> | null = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  public append(value: T) {
    let currentNode = this.tail;
    const newNode = new DoubleLinkedListNode(value, currentNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  public prepend(value: T) {
    const newNode = new DoubleLinkedListNode(value, null);
    newNode.next = this.head;
    this.head.prevValue = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }
  public insert(index: number, value: T) {
    let currentNode: DoubleLinkedListType<T> | null = this.traverseList(index);
    if (currentNode === null) {
      return null;
    }
    const newNode = new DoubleLinkedListNode(value, currentNode);
    let nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    currentNode = newNode.next;
    if (currentNode === null) {
      return null;
    }
    nextNode = currentNode.next;
    currentNode.prevValue = newNode;
    this.length++;

    return this;
  }

  //implement reverse
  public reverse() {}
}

const foo2 = new DoubleLinkedList(3);
foo2.append(5);
foo2.append(11);
foo2.append(16);
foo2.prepend(1);
foo2.insert(2, 2);
console.log(foo2.printList());
