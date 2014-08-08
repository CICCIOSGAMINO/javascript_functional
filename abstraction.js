/* 

	Hiding data and behavior (which has the side effect of providing a more agile change
	experience) is just one way that functions can be units of abstraction. Another is to
	provide an easy way to store and pass around discrete units of basic behavior. 

*/ 

// underscore library (feel the power)
var _ = require('underscore');

// JavaScript’s syntax to denote looking up a value in an array by index:
var letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters[2]);

// example of a function that abstracts array indexing behavior could be called nth
function N_nth(array, n){
	return array[n];
}
console.log(N_nth(letters,2));

// However, the function will fail if given something unexpected
console.log(N_nth({},1));

/* 
	Therefore, if I were to think about the abstraction surrounding a function nth , I might
	devise the following statement: nth returns the element located at a valid index within a
	data type allowing indexed access. A key part of this statement is the idea of an indexed
	data type. To determine if something is an indexed data type, I can create a function
	isIndexed , implemented as follows: */ 

function isIndexing(data){
	return _.isArray(data) || _.isString(data);
}

console.log(isIndexing({}));
console.log(isIndexing(letters));

/* 
	The function isIndexed is also a function providing an abstraction over checking if a
	piece of data is a string or an array. Building abstraction on abstraction leads to the
	following complete implementation of nth :  */ 

console.log('We re going to the final version ' ); 

function nth(array, n){
	if(!_.isNumber(n)) return('FAIL:Expected a NUMBER like index !! ');
	if(!isIndexing(array)) return('FAIL:NON Supported or NON indexing type !! ');
	if((n < 0) || (n > array.length -1 )) return('FAIL:Index values out of bounds !!');

	return array[n];
}


console.log(nth(letters, 4));

// ADD one more Abstraction level =================================================================================
function secondItem(a){
	return nth(a, 1);
}

console.log('Came ON ... more abstraction !! ');
console.log(secondItem(letters));

// The second function allows me to appropriate the correct behavior of nth for a different but related use case:
console.log(secondItem(['x','z']));
console.log(secondItem('GRUNT'));