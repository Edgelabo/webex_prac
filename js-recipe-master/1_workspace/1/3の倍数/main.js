//
//3の倍数
//
// const number = 24;
// // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
// for (let n = 1; n <= number; n++) {
//   // n を 3 で割ったあまりが 0
//   if (n % 3 === 0) {
//     console.log(`${n}!!!!!!!`);
//   } else {
//     console.log(n);
//   }
// }

//
//FizzBuzz
//
// const number = 50;
// let flag = false;
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log("Fizz");flag = true;
//   }
//   if (n % 5 === 0){
//     console.log("Buzz");flag = true;
//   }
//   if (flag == false){
//     console.log(n);
//   }
//   flag = false;
// }

//
//3が大好き
//
const number = 24;
// n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  // n を 3 で割ったあまりが 0
  let x = String(n);
  if (n % 3 === 0) {
    console.log(`${n}!!!!!!!`);
  }else if(x.indexOf("3") != -1){
    console.log(`${n}!!!!!!!`);
  }
  else {
    console.log(n);
  }
}