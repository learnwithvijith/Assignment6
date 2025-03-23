
let count = 0;

const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    

    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "Hello World";
console.log(cVowels(s)); 
