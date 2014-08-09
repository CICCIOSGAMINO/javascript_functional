/* 
	The term “first-class” means that something is just a value. A first-class function is one
	that can go anywhere that any other value can go—there are few to no restrictions. A
	number in JavaScript is a first-class thing, and therefore a first-class function has
	a similar nature.

*/ 

	// use underscore 
	var _ = require('underscore');

	// Intro function behaviour  -------------------------------------  functions behaviour  -----------------------------------------

	// a number can be store in a variable and so can a function too. 
	var fortyTwo = function(){return 42};

	// a number can be store in an Array the same for a function. 
	var fortyTwoArray = [42 , function(){return 42 }, (function(){return 42})()];
	console.log(fortyTwoArray[2]);

	// a number can be stored in an object the same for a function 
	var objFortyTwo = {number : 42, fun : function(){return 42}};

	// a number can be created as nedeed and so can a function too 
	42 + (function(){return 42})();

	// a number can be passed to a function and the same for functions   	** higher-order function 
	function foo(n , f){ return n + f()};

	foo(42 , function(){return 42});

	// a number can be returned from a function so can a function too 		** higher-order function 

	// return 42 
	// return function(){return 42}

	// Higher-order function  -------------------------------------------  higher-order functions -------------------------------------
	// 1 - take a function as an argument 
	// 2 - return a function as a result 



