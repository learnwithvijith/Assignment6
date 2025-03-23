let str = "madam";  // Input string
let reversedStr = "";  // Initialize an empty string

// Loop through the string in reverse order
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];  // Append each character to reversedStr
}

// Check if the original string is the same as the reversed string
if (str === reversedStr) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
