// usign apply in javascript - first functional programming bite 
// a function that return another function. 
var _ = require('underscore');

/* 
	This is your first taste of functional programming—a function that returns another
	function—but I’ll get to the meat of that later. The point is that apply is only one of
	many ways that JavaScript is a hugely flexible programming language.
	Another way that JavaScript proves its flexibility is that any function may be called with
	any number of arguments of any type, at any time. We can create a function unsplat
	that works opposite from splat , taking a function and returning another function that
	takes any number of arguments and calls the original with an array of the values given:
*/ 

function splat(fun){
	return function(array){
		return fun.apply(null, array);
	};
} ;

var addArrayElements = splat(function(x ,y){return x + y});
console.log(addArrayElements([1,5]));
console.log(addArrayElements([1,3,5]));

/* 
	Another way that JavaScript proves its flexibility is that any function may be called with
	any number of arguments of any type, at any time. We can create a function unsplat
	that works opposite from splat , taking a function and returning another function that
	takes any number of arguments and calls the original with an array of the values given:

*/ 

function unsplat(fun){
	return function(){
		return fun.call(null, _.toArray(arguments));
	};
};

var jointElements = unsplat(function(array){
	return array.join('')
});

var n_array = [4, 5 ,6];
console.log(n_array.join(' '));
console.log(jointElements('g', 4, 'k', 'l', 6));

/* 

	Every JavaScript function can access a local value named arguments that is an array-
	like structure holding the values that the function was called with. Having access to
	arguments is surprisingly powerful, and is used to amazing effect in JavaScript in the
	wild. Additionally, the call method is similar to apply except that the former takes the
	arguments one by one rather than as an array, as expected by apply . The trifecta of
	apply , call , and arguments is only a small sample of the extreme flexibility provided
	by JavaScript.

*/ 
