function mergeSort(arr: number[]): number[] {
	if (arr.length === 1) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	let i = 0;
	let j = 0;

	const left: number[] = new Array(middle);
	const right: number[] = new Array(middle);

	for (; i < arr.length; i++) {
		if (i < middle) {
			left[i] = arr[i];
		} else {
			right[j++] = arr[i];
		}
	}

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
	const result = new Array(left.length + right.length);
	let i = 0;
	let j = 0;
	let result_i = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result[result_i++] = left[i++];
		} else {
			result[result_i++] = right[j++];
		}
	}
	while (i < left.length) {
		result[result_i++] = left[i++];
	}
	while (j < right.length) {
		result[result_i++] = right[j++];
	}
	return result;
}
const arr = [1, 432, 56, 132, 543, 7, 876, 0, 321, 543];
console.log(mergeSort(arr));
