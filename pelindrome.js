

function reverseString(str){
    let count = 0


    for (let char of str){
    count++
    
}

let reversedStr = ''
for (let i = count - 1 ; i>=0;i--){
    reversedStr +=str[i]
}

return reversedStr
}
let input = 'hello'
let result = reverseString(input)

console.log('original',input)
console.log('reversed',result)
