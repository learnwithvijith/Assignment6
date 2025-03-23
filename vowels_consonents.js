function vowelsConsonents(string){
    let vowels = 0;
    let consonents  = 0;
    const vowelLetters = ["a","e","i","o","u"]
    let stringArray = string.split('');
    let lengthOfString = string.length;
    for(let i=0;i<lengthOfString;i++){
        if(vowelLetters.includes(stringArray[i])){
            vowels = vowels + 1;
        } else{
            consonents = consonents+1;
        }
    }
    console.log("Given string: ",string);
    console.log("No of vowels: ",vowels);
    console.log("No of consonents: ",consonents);
}
vowelsConsonents("education");