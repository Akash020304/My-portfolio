const textArray = ["Frontend Developer", "Web Designer", "Creative Coder", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 60;
const delayBetween = 1500;

const typeElement = document.querySelector(".type");

function type() {
  if (charIndex < textArray[index].length) {
    typeElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typeElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});
