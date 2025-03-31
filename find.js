
function getProduct(n) 
{ 
	let product = 1; 

	while (n != 0) 
	{ 
		product = product * (n % 10); 
		n = Math.floor(n / 10); 
	} 
	return product; 
} 

let n = 234; 

document.write(getProduct(n)); 

