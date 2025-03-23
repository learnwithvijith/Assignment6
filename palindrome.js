

// implement a program to check whether a string is palindrome or not

let string = "malayalam"

let string1 = ""

for (let i = string.length-1 ; i>=0; i--){
      string1 += string[i]
}
// console.log(string1)

if (string === string1){
    console.log( "your word ",string," is palindrome")
}else{
    console.log("it is not a palindrome")
}