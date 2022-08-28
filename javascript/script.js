// Dinosaur cheat
// Runner.instance_.gameOver =()=>{}

// const car = {
//   model: "carolla",
//   brand: "toyota",
//   drive: function () {
//     console.log(this);
//   },
// };

// car.drive();

// const boom = car.drive;
// boom();

// console.log(this);

// const toad = {
//   xPos: 0,
//   yPos: 0,
//   moveLeft: function (unit) {
//     this.xPos -= unit;
//   },
//   moveUp: function (unit) {
//     this.yPos += unit;
//   },
//   moveDown: function (unit) {
//     this.yPos -= unit;
//   },
//   moveRight: function (unit) {
//     this.xPos += unit;
//   },
//   getPosition() {
//     console.log(this.xPos, this.yPos);
//     function inner() {
//       console.log(this);
//     }
//     inner();
//   },
// };
// toad.moveRight(50);
// toad.getPosition(50);

// Mini Game

// ============================================ ?

// 'this' method
// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//       // this - это "текущий объект"
//       alert(this.name);
//     }

//   };

//   user.sayHi();

// ============================================ ?

// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   alert( this.name );
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// admin['f']();

// ==============================================
// let user = {
//     firstName: "Илья",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi(); // true
// ============================================== // Error
// function Name() {
//     console.log(this);
// }

// Name()