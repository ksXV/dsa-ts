function searchForItem(arr: any[], item: any): boolean {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return true;
		}
	}
	return false;
}
