//Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s: string): string {
  let result = "";
  let resultLength = 0;
  let right: number = 0;
  let left: number = 0;
  //iterate thourgh the string
  for (let i = 0; i < s.length; i++) {
    //odd length

    //we are picking the i position and then we are going left and right
    //offsetting them by one in order to check if the substring
    //is palindromic
    left = i;
    right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      //checking if the current substring is bigger than the last one
      if (right - left + 1 > resultLength) {
        result = s.slice(left, right + 1);
        resultLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    //even length
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resultLength) {
        result = s.slice(left, right + 1);
        resultLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }

  return result;
}

console.log(longestPalindrome("babad"));
