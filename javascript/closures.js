// function calcFunction(number) {
//   return function () {
//     console.log(1000 * number);
//   };
// }

// const calc = calcFunction(number = 8)
// console.log(calc());

// Practice return

// function calcFunc(number) {
//   return function () {
//     console.log(1000 * number);
//   };
// }

// const calc = calcFunc((number = 2));
// console.log(calc());

// Big closure function

// function calcFunction(number) {
//   return function (n) {
//     return n * number;
//   };
// }

// const multTen = calcFunction((number = 2));
// console.log(multTen((n = 10)));

// ## // ## https//:host.domain

// function urlGenerator(domain) {
//   return function (host) {
//     return `https://${host}.${domain}`;
//   };
// }

// const comUrl = urlGenerator((domain = "com"));
// console.log(comUrl(host='google'));

// const ruUrl = urlGenerator((domain = "ru"));
// console.log(ruUrl(host='yandex'));

// ## // ##
// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// const John = {
//   name: "John",
//   age: 20,
// };

// const Alex = {
//   name: "Alex",
//   age: 19,
// };
// function personInfo() {
//   console.log(`
//   Name: ${this.name},
//   age:${this.age}
//   `);
// }

// bind(John, personInfo)();
// bind(Alex, personInfo)();



// ## // ## Theme: Spread operator
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);