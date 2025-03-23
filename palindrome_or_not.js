// 9.implement a program to check whether a string is palindrome or not.

let str = "malayalam"
let palindrome = "true"

for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        palindrome = "false"
    }
}

if (palindrome === "true") {
    console.log(str, "is a palindrome")
}else {
    console.log(str, "is not a palindrome")
}
    
