//given 2 arrays create a function that let's a user know (true/false) whether these
//two arrays contain any common items
//example:
//[a,b,c,x] and
//[z,y,i] should return false

//[a,b,c,x] and
//[z,y,x] should return true

function checkForMatchingLetters(arr1: string[], arr2: string[]) {
  const hashmap = new Map<string, boolean>();

  for (let item of arr1) {
    hashmap.set(item, true);
  }

  for (const item of arr2) {
    if (hashmap.get(item)) {
      return true;
    }
  }
  return false;
}

console.log(checkForMatchingLetters(["a", "b", "c", "x"], ["z", "y", "i"]));
