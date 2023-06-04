class LinkedListNodeS<T> {
  public value: T;
  public next: null | LinkedListNodeS<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
interface StackInterface<T> {
  peek(): null | T;
  isEmpty(): boolean;
  push(value: T): Stack<T>;
  pop(): T | null;
}
class Stack<T> implements StackInterface<T> {
  private top: null | LinkedListNodeS<T>;
  private bottom: null | LinkedListNodeS<T>;
  public length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  public peek() {
    if (this.top === null) {
      return null;
    }
    const topValue = this.top.value;
    return topValue;
  }
  public push(value: T) {
    const newNode = new LinkedListNodeS(value);
    newNode.next = this.top;
    this.top = newNode;
    if (this.bottom === null) {
      this.bottom = newNode;
    }
    this.length++;
    return this;
  }
  public pop() {
    if (this.top === null) {
      return null;
    }
    const topValue = this.top.value;
    const nextNode = this.top.next;
    this.top = nextNode;
    this.length--;
    return topValue;
  }
  public isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

//Discord
//Udemy
//google
