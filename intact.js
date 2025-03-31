function reverseWords(sentence) {

    const words = sentence.split(' ');

    const reversedWords = words.reverse();

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const sentence = "JavaScript is fun";
console.log(reverseWords(sentence));
