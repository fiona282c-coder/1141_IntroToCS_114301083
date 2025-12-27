const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("op");
const calcBtn = document.getElementById("calcBtn");
const resultEl = document.getElementById("result");

function toNumber(v) {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return n;
}

function round2(n) {
  return Number(n).toFixed(2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function calculate() {
  const a = toNumber(num1El.value);
  const b = toNumber(num2El.value);
  const op = opEl.value;

  if (a === null || b === null) {
    resultEl.textContent = "Result = Invalid input";
    return;
  }

  let ans = null;

  if (op === "+") ans = add(a, b);
  if (op === "-") ans = subtract(a, b);
  if (op === "*") ans = multiply(a, b);
  if (op === "/") ans = divide(a, b);

  if (ans === null) {
    resultEl.textContent = "Result = Invalid input";
    return;
  }

  resultEl.textContent = "Result = " + round2(ans);
}

calcBtn.addEventListener("click", calculate);
