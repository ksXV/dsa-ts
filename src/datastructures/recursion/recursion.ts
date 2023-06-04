type int = number;

function factorial(n: int): int {
	if (n < 0) {
		return -1;
	}
	if (n == 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

function fibonacciSequence(n: int): int {
	if (n < 0) {
		return -1;
	}
	if (n <= 2) {
		return n;
	}
	return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

function reverseString(str: string): string {
	if (str === "") {
		return str;
	}
	return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(fibonacciSequence(10));
console.log(reverseString("foobarfoobar"));
console.log(factorial(4));
