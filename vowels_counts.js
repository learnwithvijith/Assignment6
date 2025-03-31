const inputString = "abcdefghijklmnopqrstuvwxyz"
const result = countVowelsAndConsonants(inputString)


function countVowelsAndConsonants(str) {
    str = str.toLowerCase()
    
    let vowelsCount = 0
    let consonantsCount = 0
    const vowels = 'aeiou'
    
    for (let char of str) {
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelsCount++ // Increment vowel count
            } else {
                consonantsCount++ // Increment consonant count
            }
        }
    }
    
    return {
        vowels: vowelsCount,
        consonants: consonantsCount
    }
}


console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`)
