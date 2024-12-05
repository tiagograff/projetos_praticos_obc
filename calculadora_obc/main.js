const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.querySelector("input");
const resultInput = document.getElementById("result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList = "error";
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", (event) => {
    const button = event.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied";
      button.classList.add("success");
      window.navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaaaaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("-primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("-primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});

document.getElementById("equal").addEventListener("click", calculate);

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }
  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (event.key === "Enter") {
    calculate();
  }
});
