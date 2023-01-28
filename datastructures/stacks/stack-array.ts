interface StackArrInterface<T> {
  peek(): null | T;
  isEmpty(): boolean;
  push(value: T): StackArr<T>;
  pop(): T | null;
}

class StackArr<T> implements StackArrInterface<T> {
  private data: Array<T>;
  private length: number;
  constructor(value: T) {
    this.data = [];
    this.data.push(value);
    this.length = 1;
  }
  public peek(): T | null {
    if (this.length === 0) {
      return null;
    }
    return this.data[0];
  }

  public isEmpty() {
    return this.length === 0;
  }
  public push(value: T): StackArr<T> {
    this.data.unshift(value);
    this.length++;
    return this;
  }
  public pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const topItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.pop();
    this.length--;
    return topItem;
  }
}
const myArrStack = new StackArr("Google");

myArrStack.push("Linked In");
myArrStack.push("Udemy");
myArrStack.push("Discord");
console.log(myArrStack.peek());
myArrStack.pop();
console.log(myArrStack.peek());
console.log(myArrStack);
