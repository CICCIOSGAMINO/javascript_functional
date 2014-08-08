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


// Comparator  ====================================================================================================
// a comparator is a function that takes two values and returns <1, >1 or zero (less, great, equal)
num = [1, 2, 6, -2, 0, -23, 56];

function compareLessGreatEqual(x,y){
	if(x < y) return -1;
	if(x > y) return 1;
	return 0;
}

function lessOrEqual(x, y){
	return x <= y;
}

console.log(num.sort(compareLessGreatEqual));
console.log(num.sort(lessOrEqual));

// comparator function, that takes a predicate anc converts it result to the -1/0/1 resut expected of comparator function 
function comparator(pred){
	return function(x, y){
		if(pred(x ,y)) return -1;
		else if(pred(y ,x)) return 1;
		else return 0;  
	}
}

console.log(" COMPARATOR : " + num.sort(comparator(lessOrEqual)));



// Data Abstraction  ===================================================================================================

function getFromCSV(str){
	return _.reduce(str.split("\n"), function(table, row){
		table.push(_.map(row.split(","), function(c){
			return c.trim();
		}));
		return table;
	}, []);
};

var peopleTable = getFromCSV("name,age,hair\nMerble,35,red\nBob,64,blonde");
console.log(peopleTable);