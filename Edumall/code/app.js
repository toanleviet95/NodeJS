// var sayHello = require("./hello");
// sayHello();
// var person = {
//     Name: "Viet Toan",
//     sayHello: function(){
//         console.log('Hello ' + this.Name);
//     }
// };
// person.sayHello();
// var ho = "Hung";
// console.log(ho);
// (function(ten){
//     var ho = "aaa";
//     console.log(ten);
// }("Toan"))

//-----------------------------------------------------

// var Emitter = require("events");

// var eventConfig = require("./config").events;

// var emitter = new Emitter();

// emitter.on(eventConfig.BAD_SCORE,function () {
//     console.log('Một môn nào đó bị điểm kém');
// });

// emitter.on(eventConfig.GOOD_SCORE,function(){
//     console.log('Có môn được điểm cao');
// });

// var scores = [10, 4];

// for (var s of scores){
//     if (s < 5 ){
//         emitter.emit(eventConfig.BAD_SCORE);
//     }else if(s == 10){
//         emitter.emit(eventConfig.GOOD_SCORE);
//     }
// }

//-------------------------------------------------


// var Events = require('events');

// var Util = require('util');

// function Dialog(){
//     this.message = 'Dialog message';
// }

// Util.inherits(Dialog, Events);

// Dialog.prototype.sayHello = function(data){
//     console.log(this.message + ' ' + data);
//     this.emit('Hello', data);
// }

// var dialog = new Dialog();

// dialog.on('Hello', function(data){
//     console.log('Emit Hello', data);
// });

// dialog.sayHello('Toan');

// ----------------------------------------

// var person = {
//     name: 'Toàn',
//     age: 20,
//     sayHello: function (param1, param2) {
//         console.log(`Tôi là ${this.name}
// Tôi ${this.age} tuổi
// Tham số:`,param1, param2);
//     }
// }

// person.sayHello('Tham số 1', 'Tham số 2');
// person.sayHello.call({name: 'Quang', age: 22},'Tham số 1', 'Tham số 2');
// person.sayHello.apply({name: 'Dũng', age: 22},['Tham số 1', 'Tham số 2']);

//----------------------------------------------

// var Util = require('util');

// var Person = function(){
//     this.name = "Toàn"
// }

// Person.prototype.sayHello = function(){
//     console.log(`Xin chào ${this.name}`);
// }

// var Student = function () {
//     Person.apply(this);
//     this.id = '1312604'
// }

// Util.inherits(Student, Person);

// var student = new Student();

// student.sayHello();

// ------------------------------------------

// 'use strict';

// class Person {
//     constructor(lastname, firstname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     sayHello() {
//         console.log(`Hello ${this.lastname} ${this.firstname}`);
//     }
// }

// var person = new Person('Lê', 'Toàn');
// person.sayHello();

// console.log(person.__proto__);

// ------------------------------------------------------
// var Dialog = require('./dialog');

// var dialog = new Dialog();

// dialog.on('hello', function(data){
//     console.log(`Emit ${data}`);
// });

// dialog.sayHello('Toan');

// ---------------------------------------------------------

// function firstFunction() {
//     console.log('I am first');
// }

// function secondFucntion() {
//     setTimeout(firstFunction, 5000);
//     console.log('I am second');
// }

// secondFucntion();

// -----------------------------------------------------------

// var buffer = new Buffer('Tôi là Toàn', 'utf8');

// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toString('ascii'));
// console.log(buffer.toJSON());

// buffer.write('Tèo');
// console.log(buffer.toString());

// ------------------------------------------------------------

// var buffer = new ArrayBuffer(8);

// var array = new Int32Array(buffer);

// array[0] = 12;
// array[1] = 23;

// console.log(array);

// ----------------------------------------------------------------
// function readData(callback){
//     var user = {
//         name: 'Toan'
//     }
//     callback(user);
// }

// readData(function () {
//    console.log(`Hello there`); 
// });

// readData(function (data) {
//    console.log(`Hello ${data.name}`); 
// });
// -------------------------------------------------------------------
// var fs = require('fs');

// var content = fs.readFileSync(__dirname + '/Readme.txt', 'utf8');
// console.log(content);

// fs.readFile(__dirname + '/Readme.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log('Done');

// ------------------------------------------------------------------

// var fs = require('fs');

// var zlib = require('zlib');

// var readable = fs.createReadStream(__dirname + '/Review.txt', {
//     encoding: 'utf8',
//     highWaterMark: 1024
// });

// var writeable = fs.createWriteStream(__dirname + '/ReviewCopy.txt');
// var compressed = fs.createWriteStream(__dirname + '/ReviewZip.txt.gz');

// var gzip = zlib.createGzip();

// readable.on('data', function (chunk) {
//     console.log(chunk.length);
//     writeable.write(chunk);
// })

// readable.pipe(writeable);
// readable.pipe(gzip).pipe(compressed);



