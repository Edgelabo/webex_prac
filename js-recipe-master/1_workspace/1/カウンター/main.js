//結果
const display = document.getElementById("display")
let result = "";
//記号
const plus = document.getElementById("plus-button")
const minus = document.getElementById("minus-button")
const multi = document.getElementById("multi-button")
const devide = document.getElementById("devide-button")
const eqal = document.getElementById("eqal-button")
//number
const button1= document.getElementById("1-button")
const button2 = document.getElementById("2-button")
const button3= document.getElementById("3-button")
const button4 = document.getElementById("4-button")
const button5 = document.getElementById("5-button")
const button6 = document.getElementById("6-button")
const button7 = document.getElementById("7-button")
const button8 = document.getElementById("8-button")
const button9 = document.getElementById("9-button")
const button0 = document.getElementById("0-button")

//数値の入力
button1.onclick = function () {
  display.textContent += "1";
  result += "1";
}
button2.onclick = function () {
  display.textContent += "2";
  result += "2";
}
button3.onclick = function () {
  display.textContent += "3";
  result += "3";
}
button4.onclick = function () {
  display.textContent += "4";
  result += "4";
}
button5.onclick = function () {
  display.textContent += "5";
  result += "5";
}
button6.onclick = function () {
  display.textContent += "6";
  result += "6";
}
button7.onclick = function () {
  display.textContent += "7";
  result += "7";
}
button8.onclick = function () {
  display.textContent += "8";
  result += "8";
}
button9.onclick = function () {
  display.textContent += "9";
  result += "9";
}
button0.onclick = function () {
  display.textContent += "0";
  result += "0";
}
//記号入力
plus.onclick = function () {
  display.textContent += "+";
  result += "+";
}
minus.onclick = function () {
  display.textContent += "-";
  result += "-";
}
multi.onclick = function () {
  display.textContent += "×";
  result += "*";
}
devide.onclick = function () {
  display.textContent += "/";
  result += "/";
}
//結果の出力
eqal.onclick = function () {
  console.log(typeof(result))
  display.textContent = eval(String(result));
}