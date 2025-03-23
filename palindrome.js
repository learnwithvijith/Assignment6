function palindrome(string){
    let reversedString = string.split('').reverse().join('');
    if(string === reversedString){
        return true;
    } else {
        return false;
    }
        
}
if(palindrome("malayalam") === true){
    console.log("Its palindrome");    
} else {
    console.log("Not a palindrome");
    
}