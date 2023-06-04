function countingSort(arr: number[], radix: number, digit: number): number[] {
	const result = new Array(arr.length).fill(0);
	const freqArr = new Array(radix).fill(0);
	for (let i = 0; i < arr.length; ++i) {
		const idxOfFreqA = Math.floor((arr[i] / radix ** digit) % radix);
		freqArr[idxOfFreqA]++;
	}
	for (let i = 1; i < radix; ++i) {
		freqArr[i] += freqArr[i - 1];
	}

	for (let i = arr.length - 1; i >= 0; --i) {
		const idxOfFreqA = Math.floor((arr[i] / radix ** digit) % radix);
		freqArr[idxOfFreqA]--;
		const idxOfResult = freqArr[idxOfFreqA];
		result[idxOfResult] = arr[i];
	}
	return result;
}

function radixSort(arr: number[], radix: number): number[] {
	const max = Math.max(...arr);
	const nrOfDigits = Math.floor(Math.log(max) / Math.log(radix) + 1);
	let result = arr;
	for (let i = 0; i < nrOfDigits; ++i) {
		result = countingSort(result, radix, i);
	}
	return result;
}
const nArr = [10, 1, 100, 8, 1232, 321, 323, 321];
console.log(radixSort(nArr, 10));
