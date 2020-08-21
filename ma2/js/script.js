// question 1
const backgroundButton = document.querySelector("#bg");
backgroundButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// question 2
const buttonToggle = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

buttonToggle.onclick = function () {
  togglee.classList.toggle("extra");
};

// question 3
const select = document.querySelector("select");
const paragraphSize = document.querySelector(".paragraphs-container");
select.onchange = function () {
  const selectedSize = this.value;
  paragraphSize.innerHTML = "";
  for (i = 0; i < selectedSize; i++) {
    paragraphSize.innerHTML += `<p class="paragraph"></p>`;
  }
};

// question 4
const input = document.querySelector(".input");
const count = document.querySelector(".char-count");

textInput.onkeyup = function () {
  console.log(event.target.value.lenght);
};

// question 5
function scroll() {
  if (window.scrollY >= 35) {
    document.body.classList.add("highlight");
  } else {
    document.body.classList.remove("highlight");
  }
}
window.onscroll = scroll;
