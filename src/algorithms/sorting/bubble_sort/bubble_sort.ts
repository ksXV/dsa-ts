function bubbleSort(foo: number[]) {
  for (let i = 0; i < foo.length; i++) {
    for (let j = i + 1; j < foo.length; j++) {
      if (foo[i] > foo[j]) {
        let aux = foo[i];
        foo[i] = foo[j];
        foo[j] = aux;
      }
    }
  }
}

const arr = [
  1, 5, 2, 6, 8, 1, 54, 3, 78, 12, 6, 2, 5, 3, 745, 6, 234, 12, 31, 321, 31, 4,
  235347, 65, 7,
];

bubbleSort(arr);
console.log(arr);
