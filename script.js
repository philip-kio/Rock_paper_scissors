let player_score= 0;
let computer_score= 0;
let player_selection= prompt('rock, or paper, or scissors?');
let choice=['rock','paper','scissors'];

function computerplay(choice){
    
    let  x= choice[Math.floor(Math.random() * choice.length)];
    return x;
}
 const computer_selection= computerplay(choice);
function playRound(player_selection, computer_selection){
    player_selection.toLowerCase();
    if (player_selection=== computer_selection){
        console.log(`Its a Tie Player ${player_score} vs Computer ${computer_score}`);
     }
     else if (player_selection==='rock' && computer_selection==='scissors'){
         player_score ++;
         console.log(`Player Won! Player  ${player_selection} beats ${computer_selection} player ${player_score} vs computer ${computer_score}`);
     }
     else if (player_selection==='paper' && computer_selection==='rock'){
         player_score ++;
         console.log(`Player Won! Player ${player_selection} beats ${computer_selection} player ${player_score} vs computer ${computer_score}`);
     }
     else if (player_selection==='scissors' && computer_selection==='paper'){
         player_score ++;
         console.log(`Player Won! Player ${player_selection} beats ${computer_selection} player ${player_score} vs computer ${computer_score}`);
     }
    else{
        computer_score ++;
        console.log(`Computer Won! computer ${computer_selection} beats ${player_selection}. Player ${player_score} vs computer ${computer_score}`);
     
    }
}

playRound(player_selection,computer_selection)