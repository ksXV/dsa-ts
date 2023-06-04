function selectionSort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		let lowest = arr[i];
		let position = -1;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < lowest) {
				lowest = arr[j];
				position = j;
			}
		}
		if (position === -1) {
			continue;
		}
		let temp = arr[i];
		arr[i] = lowest;
		arr[position] = temp;
	}
}

const arr = [1, 432, 56, 132, 543, 7, 876, 0, 321, 543];
selectionSort(arr);
console.log(arr);
