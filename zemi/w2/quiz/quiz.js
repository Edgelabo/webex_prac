//選択肢取得
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const display = document.getElementById("feedback");
// const display2 = document.getElementById("feedback2");

choice1.onclick = function () {
  display.textContent = "残念、不正解！";
  // display2.textContent = "";
};
choice2.onclick = function () {
  display.textContent = "惜しい！";
  // display2.textContent = "";
};
choice3.onclick = function () {
  display.textContent =  "正解！！\nくしゃみの時速は約320㎞/hもあるそうです。";
  // display2.textContent = "くしゃみの時速は約320㎞/hもあるそうです。";
};