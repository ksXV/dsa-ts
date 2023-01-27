type HashTableValues<T> = [string, T];

class HashTable<T> {
  private data: Array<HashTableValues<T>[]>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  public get(key: string) {
    const memoryAddress = this.hash(key);
    if (!this.data[memoryAddress].length) {
      return undefined;
    }

    for (let i = 0; i < this.data[memoryAddress].length; i++) {
      if (this.data[memoryAddress][i][0] === key) {
        return this.data[i][0];
      }
    }
    return undefined;
  }
  public set(key: string, value: T) {
    const memoryAddress = this.hash(key);
    if (!this.data[memoryAddress]) {
      this.data[memoryAddress] = [];
      this.data[memoryAddress].push([key, value]);
    } else {
      this.data[memoryAddress].push([key, value]);
    }
    return this;
  }
  public keys() {
    const hashMapKeys: string[] = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i][0][0] !== undefined) {
        hashMapKeys.push(this.data[i][0][0]);
      }
    }
    return hashMapKeys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
