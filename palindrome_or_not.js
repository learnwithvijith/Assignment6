let a ="malayalam";
let ispalindrome = true;
for (let i =0; i <a.length /2; i++) {

    if (a[i] !== a[a.length -i -1])
    { ispalindrome = false;
        break;
    }
}

if (ispalindrome) {console.log(" is a palindrome")}
else {
    console.log ("is not a palindrome")
}