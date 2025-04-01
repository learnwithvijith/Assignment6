//  auther mohammed
//  date 22/3/25

// implement a program to check whether a string is palindrome or not

function plindrome (str){
let reversed = str.split('').reverse().join('')
return str=== reversed
}
console.log (palindrome("hello"))
consolr.log(palindrome("malayalam"))