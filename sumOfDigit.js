//  auther mohammed
//  date 22/3/25

// Implement a program to find the sum of digits of a number 

let  n=654
let sum=0
while(n>0){
    let rem =n%10
    sum=sum+rem
    n=parseInt(n/10)
}
console.log(sum)