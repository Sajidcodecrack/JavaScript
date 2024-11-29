const prompt = require('prompt-sync')();
let num = 14;  // The correct number to guess
let turn = 5;  // Total number of attempts

for(let i = 1; i <= turn; i++){
    let Guessnum = +prompt(`Enter the number you want to guess. ${turn - (i - 1)} attempts left for you -> `);
    if(Guessnum===num){
        console.log(`Congraluation!You guessed the right number ${num}`);
        break;
    }
    else{
        // console.log(`Sorry! Wrong guess.Try again attempts left ${turn-1}`);
        if(turn==i){
            console.log("Sorry you are all out of attempts");
        }
    }
}
