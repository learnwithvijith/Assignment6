// pangram


function isPangram(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.toLowerCase().includes(alphabet[i])) {
            return false;
        }
    }
    return true 
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence)); 

