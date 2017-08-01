'use strict';

var Events = require('events');

module.exports = class Dialog extends Events{
    constructor(){
        super();
        this.message = 'Hello';
    }
    sayHello(data){
        console.log(`Hello ${data}`);
        this.emit('hello', data);
    }
}