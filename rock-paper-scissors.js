
  /* objects */
    
     let score = JSON.parse(localStorage.getItem('score')) ||  {
 plays: 0,
 wins: 0,
 losses: 0,
 ties: 0
};

updateScoreElement();

/*
if(!score){ 
score = {
 wins: 0,
 losses: 0,
 ties: 0
};
}
*/
    

/* function1 comparing playerMove with computerMove */

let isAutoPlaying = false;
let intervalId;
	
	function autoPlay(){
let inputElement = document.querySelector('.js-auto-play-button');
if(!isAutoPlaying){
intervalId = setInterval(() => {
const playerMove = pickComputerMove();
playGame(playerMove);
}, 1000);
inputElement.innerHTML = 'Stop  AutoPlaying';
isAutoPlaying = true;
}
else{
clearInterval(intervalId);

isAutoPlaying = false;
inputElement.innerHTML = 'Auto Play';
}
}

document.querySelector('.js-auto-play-button')
.addEventListener('click', () => {
autoPlay();
});
  // rock button
document.querySelector('.js-rock-button').addEventListener('click', () => {
display1();
setTimeout(function(){
clearInterval(intervalId2);
playGame('rock');
document.querySelector('.js-rock-button').innerHTML = `<img src="rock.PNG" class="move-icon">`;
}, 2000);
});
 	//paper button
document.querySelector('.js-paper-button').addEventListener('click', () => {
display2();
setTimeout(function(){
clearInterval(intervalId3);
playGame('paper');
document.querySelector('.js-paper-button').innerHTML = `<img src="paper.PNG" class="move-icon">`;
}, 2000);
});
	// scissors button
document.querySelector('.js-scissors-button').addEventListener('click', () => {
display3();
setTimeout(function(){
clearInterval(intervalId4);
playGame('scissors');
document.querySelector('.js-scissors-button').innerHTML = `<img src="scissors.PNG" class="move-icon">`;
}, 2000);
});

	document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  
  /*Add an if-statement condition to
  check if 'a' was pressed.*/

  } else if (event.key === 'a') {
    autoPlay();
  }

		  // Solution for 12w.
    else if (event.key === 'Backspace') {
      // Solution for 12w.
      // resetScore();

      // Solution for 12x.
      showResetConfirmation();
    }
});

    // another function
function playGame(playerMove)
{
const computerMove = pickComputerMove();
let result = '';


       if(playerMove === 'scissors')
{
   if(computerMove === 'rock')
{
result = 'you lose';
  }
else if(computerMove === 'paper')
{
result = 'you win';
  }
else if(computerMove === 'scissors'){
result = 'tie';
  }
  }

      else if(playerMove === 'rock')
{
  
if(computerMove === 'rock')
{
result = 'tie';
  }
else if(computerMove === 'paper')
{
result = 'you lose';
  }
else if(computerMove === 'scissors'){
result = 'you win';
  }
  }
     else if(playerMove === 'paper')
{
  
if(computerMove === 'rock')
{
result = 'you win';
  }
else if(computerMove === 'paper')
{
result = 'tie';
  }
else if(computerMove === 'scissors')
{
result = 'you lose';
  }
  }
 
// result section

if(result === 'you win'){score.wins += 1; score.plays ++;
}
else if(result === 'you lose'){score.losses += 1; score.plays ++;
}
else if(result === 'tie'){score.ties += 1; score.plays ++;}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
 


document.querySelector('.js-result').innerHTML = result;



document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.PNG" class="move-icon"> <img src="${computerMove}.PNG" class="move-icon"> computer`;
    }


/* function 3 updating scores */


function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `plays: ${score.plays}, wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
if(score.plays === 15)
    {
if(score.wins >= 8)
{
  alert(`Congrats! You won 🍲🥘  with Ningwa. Screenshot this pop up and send to Ningwa`);
}
else if(score.wins >= 5 && score.wins < 8)
{
  alert(`Congrats! You won ☕️☕️ with Ningwa`);
  }
  else if(score.wins < 5)
  {
alert('Sorry! its not your day');
  }
   resetScore(); 
    }
      }


      /* function2 generating computerMove*/

   
function pickComputerMove()
{
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3)
{
computerMove = ('rock');
  } 
else if(randomNumber >= 1/3 && randomNumber < 2/3)
{
computerMove = ('paper');
  }
else if (randomNumber >= 2/3 && randomNumber < 1)
{
computerMove = ('scissors');
  }
return computerMove;
  }
// reset score
   function resetScore(){
	score.plays = 0;
	score.wins = 0;
   score.losses = 0;
   score.ties = 0;
   localStorage.removeItem('score');
  updateScoreElement();


}
   document.querySelector('.js-reset-score-button').addEventListener('click', () => {
  showResetConfirmation();
});


   function showResetConfirmation(){
	document.querySelector('.js-reset-confirmation').innerHTML = `Are you sure you want to reset score?
	 <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
	 <button class="js-reset-confirm-no reset-confirm-button">No</button>`;
	document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
	resetScore();
	hideResetConfirmation();
	
   	document.querySelector('.js-result').innerHTML = '';
		document.querySelector('.js-moves').innerHTML = '';
	
	});
	document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
	hideResetConfirmation();
	})

     }

function hideResetConfirmation(){
 document.querySelector('.js-reset-confirmation').innerHTML = '';

     }

 //show tossing for rock button
  let intervalId2;
  function display1(){
  intervalId2 = setInterval(() => {
    if(document.querySelector('.js-rock-button').innerHTML === `<img src="rock.PNG" class="move-icon">`)
	{	
	document.querySelector('.js-rock-button').innerHTML = `<img src="paper.PNG" class="move-icon">`;
	}
      
else if(document.querySelector('.js-rock-button').innerHTML === `<img src="paper.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-rock-button').innerHTML = `<img src="scissors.PNG" class="move-icon">`;
	}

else if(document.querySelector('.js-rock-button').innerHTML === `<img src="scissors.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-rock-button').innerHTML = `<img src="rock.PNG" class="move-icon">`;
	}

}, 150);
		}

	//tossing for paper Button
	let intervalId3;
  function display2(){
  intervalId3 = setInterval(() => {
    if(document.querySelector('.js-paper-button').innerHTML === `<img src="paper.PNG" class="move-icon">`)
	{	
	document.querySelector('.js-paper-button').innerHTML = `<img src="scissors.PNG" class="move-icon">`;
	}
      
else if(document.querySelector('.js-paper-button').innerHTML === `<img src="scissors.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-paper-button').innerHTML = `<img src="rock.PNG" class="move-icon">`;
	}

else if(document.querySelector('.js-paper-button').innerHTML === `<img src="rock.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-paper-button').innerHTML = `<img src="paper.PNG" class="move-icon">`;
	}

}, 150);
		}
		
		//tossing for scissors Button
		let intervalId4;
  function display3(){
  intervalId4 = setInterval(() => {
    if(document.querySelector('.js-scissors-button').innerHTML === `<img src="scissors.PNG" class="move-icon">`)
	{	
	document.querySelector('.js-scissors-button').innerHTML = `<img src="rock.PNG" class="move-icon">`;
	}
      
else if(document.querySelector('.js-scissors-button').innerHTML === `<img src="rock.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-scissors-button').innerHTML = `<img src="paper.PNG" class="move-icon">`;
	}

else if(document.querySelector('.js-scissors-button').innerHTML === `<img src="paper.PNG" class="move-icon">` )
	{	
	document.querySelector('.js-scissors-button').innerHTML = `<img src="scissors.PNG" class="move-icon">`;
	}


}, 150);
}