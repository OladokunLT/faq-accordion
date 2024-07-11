// get all the sections into an array
const sections = document.querySelectorAll(".section");

console.log(sections); // [section1, section2, section3]

// loop through all the sections one after the other
for (let i = 0; i < sections.length; i++) {
  const element = sections[i]; // assign each section as element
  element.addEventListener("click", toggleShowAnswer);

  // function to run on click event
  function toggleShowAnswer() {
    const iconEl = element.querySelector("#plus");
    const answerEl = element.querySelector(".answer");

    // add or remove class "opened" to answerEl
    answerEl.classList.toggle("opened");

    // return true if answerEl contain "opened" else false
    const condition = answerEl.classList.contains("opened");

    // Change the icons to minus if answer is open
    // Change the icons to plus if hidden is open
    if (condition) {
      iconEl.src = "./assets/images/icon-minus.svg";
    } else {
      iconEl.src = "./assets/images/icon-plus.svg";
    }
  }
}
