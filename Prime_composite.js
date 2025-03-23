let number =17;
let isPrime =true;

if(number<=1){
    console.log(number+ "is not prime nor composite");
}else{
    for (let i=2; i < number; i++){
        if(number % i === 0){
            isPrime= false;
            break
        }
    }
    if (isPrime) {
        console.log(number + " is a prime number");
    }else{
        console.log(number + " is a composite number")
    }
}
