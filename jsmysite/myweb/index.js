const button100 = document.getElementById("button-100") //100円ボタン
const display = document.getElementById("display") //金額表示
//自販機ボタン
const buttonCola = document.getElementById("button-cola")
const buttonOrange = document.getElementById("button-orange")
const buttonCoffee = document.getElementById("button-coffee")
const buttonOturi = document.getElementById("bar")
//所持数
const bringMoney = document.getElementById("money")
const colaDisplay = document.getElementById("cola")
const orangeDisplay = document.getElementById("orange")
const coffeeDisplay = document.getElementById("coffee")

let totalMoney = 0; //投入金額
let BMoney = 1000; //所持金

//持ち物
const brings = {
  cola: 0,
  orange: 0,
  coffee: 0,
}
const cola = {
  btn: buttonCola,
  name: "コーラ",
  price: 150,
}
const orange = {
  btn: buttonOrange,
  name: "オレンジ",
  price: 100,
}
const coffee = {
  btn: buttonCoffee,
  name: "コーヒー",
  price: 120,
}　

//100円投入
button100.onclick = function () {
  if (BMoney <= 0) {
    return
  }
  totalMoney += 100
  BMoney -= 100
  display.textContent = totalMoney
  bringMoney.textContent = BMoney + "円"
  ranp(cola)
  ranp(orange)
  ranp(coffee)
}

//お釣りボタン
buttonOturi.onclick = function () {
  oturi()
}

//コーラ購入
buttonCola.onclick = function () {
  if(totalMoney < cola.price){return}
  buy(cola)
  brings.cola++
  colaDisplay.textContent = brings.cola + "個"
  if (totalMoney < cola.price) {oturi()}
}

//オレンジ購入
buttonOrange.onclick = function () {
  if(totalMoney < orange.price){return}
  buy(orange)
  brings.orange++
  orangeDisplay.textContent = brings.orange + "個"
  if (totalMoney < orange.price) {oturi()}
}

//コーヒー購入
buttonCoffee.onclick = function () {
  if(totalMoney < coffee.price){return}
  buy(coffee)
  brings.coffee++
  coffeeDisplay.textContent = brings.coffee + "個"
  if (totalMoney < coffee.price) {oturi()}
}

//購入処理
function buy(item) {
  totalMoney -= item.price
  display.textContent = totalMoney
}

//ランプ表示
function ranp(item) {
  if (totalMoney >= item.price) {
    item.btn.style.color = "red"
  } else {
    item.btn.style.color = "black"
  }
}

//お釣り処理
function oturi() {
  BMoney += totalMoney
  bringMoney.textContent = BMoney + "円"
  display.textContent = 0
  totalMoney = 0
  ranp(cola)
  ranp(orange)
  ranp(coffee)
}