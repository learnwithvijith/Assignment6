
let str = 'hello'

let vowels = 0
let consonants =0
let lowerStr = str

let vowelList = 'aeiou'
let length = lowerStr.length


for (let i = 0; i<length; i++){

    if(vowelList.includes(char)){
        vowels++
    }else if(char>='a' && char <='z'){
        consonants++
    }

}

console.log('Vowels',vowels)
console.log('Consonants',consonants)