

function countVowelsAndConsonants(str){
    let vowels = 'aeiouAEIOU'
    let vowelCount=0
    let consonantCount= 0

   for (let character of str){
     if(character.match(/[a-zA-Z]/))
        {if (vowels.includes(character)){
            vowelCount++
        }else{consonantCount++}

        }
   }

}
return{
    vowels:vowelCount, consonants: consonantCount
}

console.log(countVowelsAndConsonants("meet mohammed"))