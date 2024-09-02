let boxes = document.querySelectorAll(".box");
let turnO = true;
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newGame-btn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let count = 0;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// boxes.addEventListener("click", ()=>{
//     console.log("click")
// });

/// for enter X and O repetedly
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("btn was clicked");
    if (turnO) {
      //player O
      box.innerText = "O";
      turnO = false;
    } else {
      //player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinnwer();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// for disble box after winner show
const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enbleBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  turnO = true;
  enbleBtn();
  msgcontainer.classList.add("hide");
};

// to show Winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  disableBtn();
};

const gameDraw = () => {
  msg.innerText = "Game is Draw";
  msgcontainer.classList.remove("hide");
  disableBtn();
};

// To check winner
let checkWinnwer = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

    if (pos1val != "" && pos1val != "" && pos1val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winwer");
        showWinner(pos1val);
        return true;
      }
    }
  }
};

newGame.addEventListener("click", () => {
  resetGame();
});
resetBtn.addEventListener("click", resetGame);
if (count === 9) {
  console.log("draww");
}
