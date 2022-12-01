let boxArray = document.getElementsByClassName("grid-items");
let dialog = document.getElementById('backdrop')
let gameOver = document.getElementById('gameOver')
let resetButton = document.getElementById('reset-button')
let replay = document.getElementById('replay')
let playAgain = document.getElementById('playAgain')
let life = document.getElementById('life')
let score = document.getElementById('score')
let clicked = new Array(boxArray.length).fill(0);
let count = 0;

const mine = '<img src=\"pngegg.png\" width=\'60\' />'

resetButton.addEventListener("click", () => {
  console.log("clicked reset button");
  for (let box of boxArray) {
    box.innerHTML = "";
    box.style.backgroundColor = "rgb(191, 57, 43)";
  }
  clicked = new Array(boxArray.length).fill(0);
  count = 0;
  life.innerText = '💚💚💚';
  score.innerText = 'score : 0'
});
replay.addEventListener('click',()=>{
  resetButton.click()
  dialog.close()
})
playAgain.addEventListener('click',()=>{
  resetButton.click()
  gameOver.close()
})
for (let box in boxArray) {
  boxArray[box].addEventListener("click", (e) => {
      if (!clicked[box]) {
        e.target.style.textAlign = "center";
        e.target.style.fontSize = "3rem";
        if ((box+2) % Math.floor(Math.random() * 10) === 0) {
          e.target.innerHTML = mine;
          e.target.style.backgroundColor = "rgb(52, 152, 218)";
          life.innerText = life.innerText.slice(0,-2)
          if(life.innerText===''){
            gameOver.showModal()
          }
        } else {
          e.target.innerHTML = "🙂";
          e.target.style.backgroundColor = "rgb(191, 57, 43)";
          count += 1;
          setTimeout(()=>{
            if(count > 4){
              dialog.showModal()
            }
            score.innerText = score.innerText.slice(0,-1) + count
          },200)
        }
        clicked[box] = 1;
        console.log("clicked=>", clicked, "count = ", count);
      } else {
        console.log("choose another box");
      }
  });
}


