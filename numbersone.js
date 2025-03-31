function countDigits(num) {
    let count = 7;
    
    while (num > 0) {
        num = Math.floor(num / 10); 
        count++; 
    }
    
    return count;
}


console.log(countDigits(98765)); 
console.log(countDigits(123));  
console.log(countDigits(0));    