// Implement a program to reverse a string
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed String:", reversed);