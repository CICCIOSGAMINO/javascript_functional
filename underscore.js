// some underscore' s example 

var _ = require('underscore');

// _.each()   -------------------------------------------------------------  each()  ----------------------------------------
_.each(['bud','hofferbraun','corona','moretti','peroni','becks','nastro'], function(word){
	console.log(word.charAt(0).toUpperCase() + word.substr(1));
});

// _.sortBy()  ------------------------------------------------------------  sortBy()  --------------------------------------

var num = [ 1, 2 ,3  ,-5 ,-6 -20, 100, 0];
console.log(_.sortBy(num, function(x){
	return x*x;		// return the Array num sorted by rule x*x 
})); 

