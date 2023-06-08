function binarySearch(arr: number[], item: number) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (arr[middle] === item) {
			return middle;
		} else if (arr[middle] > item) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return null;
}

const arrN = [1, 2, 3, 4, 6, 78, 100];
console.log(binarySearch(arrN, 1));
