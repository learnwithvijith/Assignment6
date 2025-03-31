function countWords(sentence) {

    let count = 1;

    for (let char of sentence) {
        if (char === ' ') {
            count++;
        }
    }

    return count;
}
let sentence = "Hello world how are you";
console.log("Number of words:", countWords(sentence));
