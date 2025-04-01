
//  auther mohammed
//  date 22/3/25

// . Implement a program to display Fibonacci Series (0,1,1,2,3,5,8,.... n

let n=9
let a=0
let b=1
let next
console.log(a)
for( i=a;i<=n;i++){
        console.log(b)
    next=a+b
    a=b
    b=next
}