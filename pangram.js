
function checkPangram(str) {
    str = str.toLowerCase();

    const set = new Set();

    for (let ch of str) {
    
        if (ch >= "a" && ch <= "z") {
            set.add(ch);
        }
    }
}

let str =
    "The quick brown fox jumps over the lazy dog";

if (checkPangram(str) == true)
    console.log(str + "\nIt is a pangram");
else
    console.log(
        str + "\nIt is a pangram"
    );

