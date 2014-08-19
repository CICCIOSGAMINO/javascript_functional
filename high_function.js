/* 
	An high order function is : 

	+ It's a first class function (means that something is just a value) 
	+ Take a function as an argument 
	+ return a function as a result 

	These struct are dominant in the functional progamming 
*/ 

	// underscore - functional Javascript 
	var _ = require('underscore');


	// high order  -------------------------------------------------  high order  ----------------------------------------------
	_.max([1,2,3,5,7,11,2719]);

	// _.max is a higher-order function that takes an optional sec‐ond argument. a function that is used to generate a numeric 
	// value from the object supplied to it.

	_.max([{name : 'ciccio', age : 19},{name : 'gnappi', age : 17}], function(obj){return obj.age});

	// This is a very useful approach to building functions because rather than baking in the comparison of numeric values, 

	// made generic  ------------------------------------------------  made generic  -------------------------------------------

	function populate(times, VALUE){
		return _.map(_.range(times), function(){return VALUE})
	};
	populate(5, 'HEllo');

	// function that repeats a value some number of times is good, a function that repeats a com‐putation some number of times 
	// is better.

	// OPTIMIZATION - 1 (FUNCTION NOT VALUE )
	function repeat(times, fun){
		return _.map(_.range(times), fun);
	};
	repeat(5, function(){return Math.floor((Math.random()*10)+1)});

/*	The function repeatedly is a nice illustration of the power of functional thinking. Bytaking a function instead of a value, 
	I’ve opened up “repeatness” to a world of possibility.Instead of bottoming out immediately on a fixed value at the call-site, 
	as repeat does,we can fill an array with anything.

	Often you’ll know precisely how many times a function should be called, but there will be other times when knowing when to quit
	is not about “times” but about conditions. In other words, you may want to instead calla given function until its return value 
	crosses some threshold, changes sign, becomes uppercase, and so on, and a simple value will not be sufficient.
*/ 

	// OPTIMIZATION - 2 (THRESHOLD)
	function iterateUntil(fun, check, init){
		var t = [];
		var result = fun(init);

		while(check(result)){
			t.push(result);
			result = fun(result);
		}
		return t;
	};
	
	iterateUntil(function(n){return n+n}, function(n){return n <= 1024}, 1);


	// function return function  ----------------------------------  function return function  -------------------------------------
	// A useful way to think about why you might create functions that return another function is that the arguments to the 
	// higher-order function serve to “configure” the behavior of the returned function. 

	function makeUniqueString(start){
		var COUNTER = start; 

		return function(prefix){
			return [prefix + '#' + COUNTER++].join('');
		};
	};

	var uniqueString = makeUniqueString(1000);
	console.log( 1 + ' : ' + uniqueString('ak-47') + " | " + 2 + " : " + uniqueString('A1-M1'));