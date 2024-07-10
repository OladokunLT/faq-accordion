// alert("Welcome Class");

let firstEl = document.querySelector(".first");
let answerEl = document.querySelector(".answer");
let iconEl = document.getElementById("plus");

firstEl.addEventListener("click", toggleShowAnswer);

function toggleShowAnswer() {
  answerEl.classList.toggle("open");

  const condition = answerEl.classList.contains("open");
  if (condition) {
    iconEl.src = "./assets/images/icon-plus.svg";
  } else {
    iconEl.src = "./assets/images/icon-minus.svg";
  }
}
