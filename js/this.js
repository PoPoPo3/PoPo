'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.work = function() {
//         console.log(`${ this.name} успешный проггер!`);
//     }
// }

// User.prototype.teach = function() {
//     console.log(`${this.name} учит JS`)
// };

// const rodik = new User('Rodik', 31);

// rodik.teach();

function showThis() {
    console.log(this);
}

showThis();