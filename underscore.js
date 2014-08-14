// some underscore' s example 

var _ = require('underscore');


// _.map()   --------------------------------------------------------------  map()  -----------------------------------------
_.map([1,2,3,5,7,11,13], function(x){
	return x*x; 
}); 

// _.each()   -------------------------------------------------------------  each()  ----------------------------------------
_.each(['bud','hofferbraun','corona','moretti','peroni','becks','nastro'], function(word){
	// console.log(word.charAt(0).toUpperCase() + word.substr(1));
});



// _.sortBy()  ------------------------------------------------------------  sortBy()  --------------------------------------

_.sortBy([ 1, 2 ,3  ,-5 ,-6 -20, 100, 0], function(x){
	return x*x;		// return the Array num sorted by rule x*x 
}); 




// _.groupBy()  -----------------------------------------------------------  groupBy()  -------------------------------------
var albums = [{title : 'Pump Up The Valuum', type : 'punk rock'},
			  {title : 'Ribbed', type : 'punk rock'},
			  {title : 'Appetite for Destruction', type : 'heavy metal'},
			  {title : 'The Spaghetti Incident?', type : 'heavy metal'}];
_.groupBy(albums, function(a){
	return a.type; 
})


// _.countBy()  -----------------------------------------------------------  countBy()  ------------------------------------
_.countBy(albums, function(a){
	return a.type; 
})										// { 'punk rock': 2, 'heavy metal': 2 }





// _.first()  -------------------------------------------------------------  first()  ---------------------------------------
// pass the first n elements of an array 
_.first([1,2,3,4,5,6,7,8,9],3);				// 1 2 3 




// _.all()  ---------------------------------------------------------------  all()  -----------------------------------------
_.all([1,2,6,5,4,6,3], _.isNumber); 		// true 




// _.any()  ---------------------------------------------------------------  any()  -----------------------------------------
_.any(['a','v','g', 3], _.isNumber); 		// true 




// _.find()  --------------------------------------------------------------  find()  ----------------------------------------
_.find(['a','v','g', 3], _.isNumber);		// 3 



// _.value(obj)  ----------------------------------------------------------  value()  ---------------------------------------
// Extract the value of a wrapped object 
_([1,2,3,4,5]).value(); 			// [1,2,3,4,5]



// _.range([start], stop, [step])  ----------------------------------------  range()  ----------------------------------------
_.range(0,20,5);



// _.reduce(list, iterator, memo, [context])  ----------------------------  reduce()  ---------------------------------------
var sum = _.reduce([1,2,3,5,7,11,13,17,19],function(memo, n ){return memo +n }, 0);



// _.tap()  ---------------------------------------------------------------  tap()   ----------------------------------------
// _.tap(object, interceptor) 
// Invokes interceptor with the object, and then returns object. The primary purpose of this method is to "tap into" a method
// chain, in order to perform operations on intermediate results within the chain.
_.chain([1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71])
	.filter(function(n){return n %2 == 1})
	.tap(console.log)		// interceptor 
	.map(function(x){return x*x})
	.value();



// _.chain(obj)  -----------------------------------------------------------  chain()  --------------------------------------
// Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used.

var stooges = [{name : 'Curly', age : 25},{name : 'Blondy', age : 18}, {name : 'Brunette', age : 16}];

_.chain(stooges).value() 		// the same Obj 
_.chain(stooges)
	.sortBy(function(x){return x.age})
	.map(function(x){return x.name + ' is ' + x.age})
	.first()
	.value();					// Brunette is 16 