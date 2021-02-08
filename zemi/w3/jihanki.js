const button100 = document.getElementById("button-100")
const display = document.getElementById("display")
const buttonCola = document.getElementById("button-cola")
const itemdisplay = document.getElementById("display2")
const oturidisplay = document.getElementById("display3")

let totalMoney = 0;

button100.onclick = function () {
  totalMoney += 100
  display.textContent = "投入金額: ¥" + totalMoney
  if (totalMoney >= 120) {
    buttonCola.style.color = "red"
  } else {
    buttonCola.style.color = "black"
  }
}
buttonCola.onclick = function () {
  if (totalMoney >= 120) {
    display2.textContent = "コーラが落ちた"
    totalMoney -= 120
    display.textContent = "投入金額: ¥" + totalMoney
    if (totalMoney <= 120) {
      oturi()
    }
  }
}
function oturi() {
  display.textContent = 0
  oturidisplay.textContent = totalMoney
  totalMoney = 0
}