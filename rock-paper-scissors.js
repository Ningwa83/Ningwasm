/* objects */
    
     let score = JSON.parse(localStorage.getItem('score')) ||  {
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
    /* function1 */

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
 if(result === 'you win'){score.wins += 1;
}
 else if(result === 'you lose'){score.losses += 1;
}
else if(result === 'tie'){score.ties += 1;}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.PNG" class="move-icon"> <img src="${computerMove}.PNG" class="move-icon"> computer`;
    }

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}


      /* function2 */

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