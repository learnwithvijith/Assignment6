let string = "Sachin", vowels = "aeiou", count = 0, consonant = 0
for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase()
        if (vowels.indexOf(char)>-1) {
            count++
        } 
        else {
            consonant++
        }
    }
console.log("Vowels count : " + count)
console.log("Consonants count: " + consonant)
