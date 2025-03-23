function primeOrNot(n) {   
    for(let i = 2; i < n; i++){
        if (n % i === 0){ 
            return false;  
        } else{
            return true;
        }
    }
}

if(primeOrNot(6) === true){
    console.log("Prime");    
} else{
    console.log("Composite");    
}

    
        