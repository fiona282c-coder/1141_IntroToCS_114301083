let answer = generateAnswer();
let count = 0;

const inputField = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const record = document.getElementById("record");

guessBtn.addEventListener("click", play);
inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") play();
});

function generateAnswer() {
  let arr = [];
  for (let i = 0; i <= 9; i++) arr.push(String(i));

  let result = "";
  while (result.length < 4) {
    let idx = Math.floor(Math.random() * arr.length);
    result += arr[idx];
    arr.splice(idx, 1);
  }
  return result;
}

function play() {
  const guess = inputField.value.trim();

  if (!isValid(guess)) {
    alert("Invalid input. Please enter exactly 4 digits with no duplicates.");
    return;
  }

  count++;
  const ab = checkAB(guess, answer);

  record.textContent += "第" + count + "次: " + guess + " → " + ab + "\n";
  inputField.value = "";
  inputField.focus();

  if (ab === "4A0B") {
    alert("Correct! Total attempts: " + count);
  }
}

function isValid(str) {
  if (str.length !== 4) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

function checkAB(guess, ans) {
  let A = 0;
  let B = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === ans[i]) {
      A++;
    } else {
      for (let j = 0; j < 4; j++) {
        if (guess[i] === ans[j]) {
          B++;
          break;
        }
      }
    }
  }
  return A + "A" + B + "B";
}
