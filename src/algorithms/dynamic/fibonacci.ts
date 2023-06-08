function memoizedFibo(): (n: number) => number {
	const cache: Record<number, number> = {};

	return function fibo(n: number): number {
		if (n in cache) {
			return cache[n];
		}
		if (n < 2) {
			return n;
		}
		cache[n] = fibo(n - 1) + fibo(n - 2);
		return cache[n];
	};
}
