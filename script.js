alert("You have 10 guesses. Guess 1-10");

let answer = 3;
let guess = prompt("Whats's your guess?");

for(let i = 0; i < 10; i++){
	if(answer == guess){
		alert("You guessed correctly");
		break;
	}else{
		guess = prompt("Please Try Again");
	}
}	