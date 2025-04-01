//  auther mohammed
//  date 22/3/25


// Implement a program to check whether a number is prime or composite 

let n=13
let i=2

for(i;i<n;i++){
    if(n%i===0){
        break;
   }
}
if(i===n){console.log("prime")}
else{console.log("composite")}