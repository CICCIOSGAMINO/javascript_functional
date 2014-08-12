/*
	Applicative programming is defined as the calling by function B of a function A, supplied
	as an argument to function B originally. 

	Use in Node.js + underscore package 

*/ 

var _ = require('underscore')

var nums = [100236,2,6,5,5,3];

function doubleAll(array){
	return _.map(array, function(x){
		return x*x;
	})
}

function sum(array){
	return _.reduce(array, function(memo, n){
		return memo + n; 
	})
}

function div(x, y){
	return x / y;
}

// reduce ( --> )
// console.log(_.reduce(nums, div));			// 111
// console.log(_.reduceRight(nums, div));		// 9.97 

// reduce(array, function(memo, n){})
function avg(array){
	return _.reduce(array, function(memo, n){
		return memo + n;
	}) / _.size(array);
}

// console.log(doubleAll(nums));
// console.log(avg(nums));


// _.isEqual , _.isEmpty ,_.isElement , _.isArray , _.isObject , _.isArguments , _.isFunction , _.isString ,
// _.isNumber , _.isFinite , _.isBoolean , _.isDate , _.isRegExp , _.isNaN , _.isNull ,_.isUndefined
_.find(['a','v','g', 3], _.isNumber);		// 3 
_.reject(['a','v','g', 3], _.isNumber); 	// ['a','v','g']

// complement function 
function complement(pred){
	return function(){
		return !pred.apply(null, _.toArray(arguments));
	}
}

console.log(_.filter(['a', 1, 'B', 2, 6, 'x'], _.isNumber)); 					// [1, 2, 6]
console.log(_.filter(['a', 1, 'B', 2, 6, 'x'], complement(_.isNumber)));		// 



