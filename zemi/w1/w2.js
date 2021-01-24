const f1 = function (n) {
  return 3 * n + 1
}

const f2 = function (n) {
  return 10 ** n
}

const f3 = function (n) {
  return f1(n) + f2(n) // かっこいい！
}

var test = {
  name: "apple",
  mama: "ありぱ"
}
console.log(test.mama);