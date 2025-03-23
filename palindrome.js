// implement a program to check whether a string is palindrome or not 
let str = "malayalam";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(str, isPalindrome ? "is Palindrome" : "is not Palindrome");