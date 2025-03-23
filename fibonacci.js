function fibonacciSeries(n){
    let first = 0;
    let second = 1;
    console.log(first);
    console.log(second);
    for ( let i = 0; i < n; i++ ) {        
        let next = first + second;
        first = second;
        second = next;
        console.log(next);
        
    }
}

let n = 10;
fibonacciSeries(n);
