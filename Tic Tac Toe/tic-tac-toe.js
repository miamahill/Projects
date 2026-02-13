"use strict";
document.addEventListener('DOMContentLoaded', () => {
  
  const winpossibles = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  const rb = document.querySelector(".btn");
  let playero = "O";
  let playerx = "X";
  let cplayer = playerx;
  let game = false;
  let options;
  let clas = ".square.X";
  const board = document.getElementById("board");
  options = [" "," "," "," "," "," "," "," "," "]


  for(let m=1; m<10; m++){
    let newBox = document.createElement('div');
    newBox.id = m;
    newBox.classList.add('square');
    newBox.addEventListener("click", setPlay);
    rb.addEventListener("click", reset);
    board.append(newBox);
  }


  let sq = document.querySelectorAll('.square');
  sq.forEach(function(elem, index) {
  elem.addEventListener('mouseover', function(e) {
    e.target.classList.add('hover');
  });

  elem.addEventListener('mouseout', function(e) {
    e.target.classList.remove('hover');
    e.target.classList.add('hover-O');
  });
  });


function setPlay(){
  if (game){
    return;
  }

  let bdex = this.id;

  if (options[bdex-1] != ' '){
    return;
  }

  options[bdex-1] = cplayer;
  this.innerHTML = cplayer;
  

  if (cplayer == playero){
    cplayer = playerx;
    this.classList.add("O");
    this.classList.remove("X");
  }else{
    cplayer = playero; 
    this.classList.add("X"); 
    this.classList.remove("O");
  }
  checkWinner();
}

let cnt = -1;
function checkWinner(){
  for (let m of winpossibles){
    cnt++;
    if (options[m[0]]==options[m[1]] && options[m[1]]==options[m[2]] && options[m[0]] != " "){
      let i = options[m[0]];
      let winner = "Congratulations! " + i+ " is the Winner!";
      const status = document.getElementById("status");
      status.innerHTML = winner;
      status.setAttribute("class","you-won")
      game = true;
      console.log(winner);
    }
    
  }
}

function reset(){
  for(let m=1; m<10; m++){
    document.getElementById(m).innerHTML=" ";
  }
  document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O. ";
  document.getElementById("status").setAttribute("class","body");
  cplayer = playerx;
  options = [" "," "," "," "," "," "," "," "," "]
  game = false;
}

});

