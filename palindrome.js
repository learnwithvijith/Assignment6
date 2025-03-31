const wordString = "MALAYALAM"

function isPalindrome(str) {
    str = str.toLowerCase()
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return str === reversedStr
}

console.log(`${wordString} is a palindrome: ${isPalindrome(wordString)}`)
