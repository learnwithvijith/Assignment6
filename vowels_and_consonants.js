let str = "helloworld";
let vowels = 0;
let consonants = 0;
for (let i = 0; i <str.length; i++)
{let char =
    str[i].toLowerCase();
    if (char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u') {
        vowels++;
    }
    else if (char >='a' && char<= 'z') {
        consonants++; 
    }
}

console.log(vowels)
console.log(consonants)