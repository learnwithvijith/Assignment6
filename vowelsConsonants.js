function countVowelsConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vowelsCount = 0, consonantsCount = 0;
    
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);
}

let text = prompt("Enter a string: ");
countVowelsConsonants(text);
