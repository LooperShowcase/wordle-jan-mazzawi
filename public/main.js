const LINE_COUNT = 6;
const CHAR_COUNT = 5;

const unclewords = document.getElementById("words");

for (let i = 0; i < LINE_COUNT; i++) {
  const wordDiv = document.createElement("div");

  wordDiv.className = "word";
  for (let j = 0; j < CHAR_COUNT; j++) {
    const charDiv = document.createElement("div");
    charDiv.className = "char";
    wordDiv.appendChild(charDiv);
  }
  unclewords.appendChild(wordDiv);
}

let currentchar = 0;
let currentword = 0;
document.addEventListener("keydown", (event) => {
  console.log(event);
  const firstword = unclewords.children[currentword];

  if (event.code == "Enter") {
    if (currentchar == CHAR_COUNT) {
      currentword++;
      currentchar = 0;
    } else {
      alert("Error 178");
    }
  } else if (event.key == "Backspace") {
    if (currentchar > 0) {
      currentchar--;
      firstword.children[currentchar].innerHTML = "";
    }
  } else if (currentchar < CHAR_COUNT) {
    firstword.children[currentchar].innerHTML = event.key;
    currentchar++;
  }
});
