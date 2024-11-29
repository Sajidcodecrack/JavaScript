const prompt = require('prompt-sync')();
function vowelandconst(str) {
    let vowel = 0;
    let con = 0;

    for (char of str) {
        if (char >= 'a' && char <= 'z') {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                vowel++;
            }
            else {
                con++
            }

        }
    }
    console.log(`vowels are in the sentences are : ${vowel}`);
    console.log(`Consonants are in the sentencese are : ${con}`)
    return vowelandconst
}

let s=prompt("Enter the sentence : ");
vowelandconst(s);
