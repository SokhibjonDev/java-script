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




// For
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i <= 100)

// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }


// ## Practice


// let answers = []
// let questions = [
//     'What`s your name',
//     'What`s your phone.number',
//     'How old are you',
// ]
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i])
// }

// let REQ = []

// let RES = [
//     'Hellomaleykum',
//     'Yaxshimisz',
//     'Bye Bye',
// ]

// for (let i = 0; i < RES.length; i++) {
//     REQ[i] = prompt(RES[i])
// }



// Theme : if else % // // //switch case
// ========================================= if else


// if (age < 18) {
//     alert('Xali vohli')
// } else if (age > 80) {
//     alert('Uje kech')
// } else {
//     alert('Vush kelibsiz')
// }



// Theme : function & return
// ============================================== function
// function Name(name) {
//     console.log(`Hi , I'm ${name}`);
// }

// Name(name = 'Sokhibjon')
// Name(name = 'Samar')



// ========== Topic . func () decloration



// Name(name = 'Sokhibjon')

// function Name(name) {
//     console.log(`Hi , I'm ${name}`);
// }



// ========== Topic . func () expression

// Function() with variable Let

// let myFunction = function () {
//     console.log('This func is exp.');
// }

// myFunction()


//Topic  Global view function()

// let num = 5

// function MyFunction(name) {
//     let num = 10
//     num++
//     console.log(num);
//     console.log(`Hi , I'm ${name}`);
// }

// MyFunction(name = 'John')
// console.log(num);


//Practice

// let users = [
//     {
//         name: 'John',
//         year: 20
//     },
//     {
//         name: 'Alex',
//         aage: 10
//     }
// ]

// function HelloWorldFromJS(name) {
//     console.log(users.length);
//     console.log(`Hello ${name}`);
// }
// console.log(users);
// HelloWorldFromJS(name = 'world')

// console.log(
//     2,
//     (2)[{}]
//     name
// );


// function MyFirstApp(name, age) {
//     alert(`Hi, My name's ${name}, I'm ${age}`)


//     function showSkills() {
//         let skills = ['HTML & CSS', 'Javascript']
//         for (let i = 0; i < skills.length; i++) {
//             alert(`Skills ${skills[i]}`)
//         }
//     }
//     showSkills()

//     function chekAge() {
//         if (age > 18) {
//             alert('Exacly data')
//         } else if (age < 18) {
//             alert('Super data')
//         }
//     }
//     chekAge()

//     function calcPow(num) {
//         return num * num
//     }
//     console.log(calcPow(5));

// }
// MyFirstApp(name = 'Sokhibjon', age = 15)


// ## // ##  context => this, bind , call and apply


// function sam(){
//     console.log(this);
// }

// sam()

// function sam() {
//     console.log(this)
// }

// const person = {
//     name: 'Samar',
//     age: 20,
//     callContext: sam(),
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// console.log('object');



/// Practice function( this, bind, call, apply)


// function sam() {
//     console.log(this);
// }
// const persone = {
//     name: 'Samar',
//     age: 20,
//     job: 'react-js',
//     callContext: sam,
//     callAnotherContext: sam.bind(this),
//     callInfoJob: function (number) {
//         console.group(`Name is ${this.name}info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${this.job}`);
//         console.log(`Contact is ${number}`);
//         console.groupEnd();
//     }
// }
// const frontEndDev = {
//     name: 'Yusuf',
//     age: 19,
//     job: 'javascript',
// }

// const fullInfo =  persone.callInfoJob.bind(frontEndDev)
// fullInfo('+998 ## ### ## ##')

// /// ## ## apply
// persone.callInfoJob.apply(frontEndDev, ['+998 ## ### ## ##'])

// /// ## ## call
// persone.callInfoJob.call(frontEndDev, '+998 ## ### ## ##')



// /// apply and call is !isReturn func()


