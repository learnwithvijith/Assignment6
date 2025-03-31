function countVowelsAndConsonants(str) {

    let vowels = "aeiouAEIOU"

    let vowelCount = 0;

    let consonantCount = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") { 
            
            if (vowels.includes(char)) {

                vowelCount++; 
            } else {
                consonantCount++; 
            }
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}


let result = countVowelsAndConsonants("Hello World");

console.log("Vowels:", result.vowels); 

console.log("Consonants:", result.consonants); 