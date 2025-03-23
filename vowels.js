function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[a-z]/.test(char)) {
            if ('aeiou'.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    console.log(`Vowels: ${vowelsCount}`);
    console.log(`Consonants: ${consonantsCount}`);
}

let inputString = "Hello World!";
countVowelsAndConsonants(inputString);
