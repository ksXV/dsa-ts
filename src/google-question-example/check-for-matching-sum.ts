//given an array and a number find a pair that added up sums up to the given number (true/false)
//example n = 9 , arr = [6,4,3,2,1,7]

function checkForMatchingSum(n: number, arr: number[]) {
  const set = new Set<number>();

  for (const item of arr) {
    if (set.has(item)) {
      return true;
    } else {
      set.add(n - item);
    }
  }

  return false;
}

console.log(checkForMatchingSum(9, [6, 2, 7, 3, 1]));
