

// Implement a program that prints numbers from 1 to n. 
// For multiples of 3, print "Fizz" instead of the number.
//  For multiples of 5, print "Buzz".
//  For numbers which are multiples of both 3 and 5, print "FizzBuzz"


let n = 20
let i = 1

for (i; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if(i % 5 === 0){
        console.log('Buzz')
    }else{
    console.log(i)
}
}

