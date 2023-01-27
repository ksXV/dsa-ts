function checkForFirstRecurringCharacter(arr1: Array<string | number>) {
  const length = arr1.length;

  if (!length) {
    return undefined;
  }
  if (length === 1) {
    return arr1[0];
  }
  const pastCharacters = new Map<string, boolean>();

  pastCharacters.set(String(arr1[0]), true);

  for (let i = 1; i < length; i++) {
    if (pastCharacters.get(String(arr1[i]))) {
      return arr1[i];
    }
    pastCharacters.set(String(arr1[i]), true);
  }

  return undefined;
}

console.log(checkForFirstRecurringCharacter([1, 5, 2, 3, 4, 5, 7, 8, 1]));
console.log(checkForFirstRecurringCharacter(["a", "b", "a", "b"]));
console.log(checkForFirstRecurringCharacter(["a", "b", "c", "d", "e", "f"]));
