function coinToss(){

let randomNumber = Math.random();
if(randomNumber >= 0 && randomNumber < 0.5){document.querySelector('.js-result').innerHTML = 'The result is HEAD<img src="heads.png" class="move-icon">'}
else if(randomNumber >= 0.5 && randomNumber < 1){document.querySelector('.js-result').innerHTML = 'The result is TAIL<img src="tails.png" class="move-icon">';
}

}