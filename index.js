var dog = require('./Dog');
var cat = require('./Cat.js');

var Tom = new dog('Tom');
var Cat = new cat();

Tom.eat(Cat);
console.log(Tom);
Tom.sayHi();