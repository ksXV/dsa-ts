type int = number;

function insertionSort(arr: int[]) {
	for (let i = 1; i < arr.length; i++) {
		let temp = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}
}
const arr = [1, 432, 56, 132, 543, 7, 876, 0, 321, 543];
insertionSort(arr);
console.log(arr);
