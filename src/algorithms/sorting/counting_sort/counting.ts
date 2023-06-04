function countingSort(arr: number[], radix: number, digit: number): number[] {
	//radix is the base
	//digit is the position we want to start counting from
	const numberOfItems = new Array(radix).fill(0);
	const result = new Array(arr.length).fill(0);
	for (let i = 0; i < arr.length; ++i) {
		const digitOfAi = Math.floor((arr[i] / radix ** digit) % radix);
		numberOfItems[digitOfAi]++;
	}
	for (let i = 1; i < numberOfItems.length; i++) {
		numberOfItems[i] += numberOfItems[i - 1];
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		let idxOfNumberOfItems = Math.floor((arr[i] / radix ** digit) % radix);
		numberOfItems[idxOfNumberOfItems]--;
		let resultIdx = numberOfItems[idxOfNumberOfItems];
		result[resultIdx] = arr[i];
	}
	return result;
}
const array = [3, 2, 1, 5, 7, 2, 9, 2, 1, 6, 5, 2, 1];
console.log(countingSort(array, 10, 0));
