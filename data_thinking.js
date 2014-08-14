 
/* 
	we’ll take the approach of using minimal data types to represent abstractions, from
	sets to trees to tables. In JavaScript, however, although its object types are extremely powerful, 
	the tools provided to work with them are not entirely functional.

	Instead, the larger usage pattern associated with JavaScript objects is to attach methods for the purposes
	of polymorphic dispatch. Thankfully, you can also view an unnamed JavaScript object as simply an associative data
	store.

	If the only operations that we can perform on a Book object or an instance of an Employee type are setTitle or getSSN,
	then we’ve locked our data up into per-piece-of-information micro-languages (Hickey 2011). A more flexible approach to modeling
	data is an associative data technique. JavaScript objects, even minus the prototype ma‐chinery, are ideal vehicles
	for associative data modeling, where named values can be structured to form higher-level data models, accessed in uniform ways.

	Although the tools for manipulating and accessing JavaScript objects as data maps are sparse within JavaScript itself, 
	thankfully Underscore provides a bevy of useful opera‐tions. Among the simplest functions to grasp are _.keys , _.values
	and _.pluck

*/
	var _ = require('underscore');

	var creatures = [{name : 'Agloolik', details : 'Ice spirit that aids hunters and fishermen'},
					 {name : 'Wendigo', details : 'Anthropophagous spirit'},
					 {name : 'Manticore', details : 'Lion-human-scorpion hybrid', real : true},
					 {name : 'Daemon', details : 'Incorporeal spirit', nation : 'greek', real : false}];

	var creature_a = {name : 'Agloolik', details : 'Ice spirit that aids hunters and fishermen'};

	// _.keys()  --------------------------------------------------------  _.keys()  ---------------------------------------------
	_.keys(creature_a);			// ['name' , 'details']


	// _.values()  ------------------------------------------------------  _.values()  -------------------------------------------
	_.values(creature_a); 	


	// _.pluck()  -------------------------------------------------------  _.pluck()  -------------------------------------------
	// _.pluck takes an array of objects and a string and returns all of the values at the given key for each object in the array	
	_.pluck(creatures, 'name'); 		// [ 'Agloolik', 'Wendigo', 'Manticore', 'Daemon' ]


/* 

	Base on underscore.js function like _.keys, _.values, _.pluck  functions deconstruct the given objects into arrays,
	allowing you to perform sequential actions. 

	ex : _.values({name : 'Ciccio', age : 22}) 			// ['Ciccio', 22]

	Another way of viewing a JavaScript object is as an array of arrays, each holding a key and a value. 
	Underscore provides a function named _.pairs that takes an object and turns it into this nested array:
*/  

	_.pairs(creature_a);							// [ 'details', 'Ice spirit that aids hunters and fishermen' ] 
	_.map(creatures, _.pairs);						// [[['name', 'Agloolik'],[....] .... ]]

	// rebuild to object 
	_.object(_.map(creatures, function(x){
		return [x['name'] , x['details']];
	}));			
	// { Agloolik: 'Ice spirit that aids hunters and fishermen', Wendigo: 'Anthropophagous spirit', ... }


	// _.invert(obj)  --------------------------------------------------  _.invert()  -------------------------------------------
	_.invert({primo : 1, second : 2, third : 3});		// 	{ '1': 'primo', '2': 'second', '3': 'third' }


 /* 
 	Underscore also provides functions for filling in and removing values from objects according to the values that they take:
 */

 	// _.defaults()  ---------------------------------------------------  _.defaults()  -----------------------------------------
 	_.defaults(creature_a, {real : false});				// { name: 'Agloolik', details: ' ... ', real: false }


 	// _.omit()  -------------------------------------------------------   _.omit()   -------------------------------------------
 	_.omit(creature_a, 'details');						// { name: 'Agloolik', real: false }  --> 'details' is omitted 
   


 	// _.pick()  -------------------------------------------------------   _pick()   --------------------------------------------
 	_.pick(creature_a, 'details'); 		//  { details: 'Ice spirit that aids hunters and fishermen' }


 	// _.findWhere()  --------------------------------------------------  _.findWhere()  ----------------------------------------
 	_.findWhere(creatures, {real : true});  		// { name: 'Manticore', details: '...', real: true }   only first Object 


 	// _where()  -------------------------------------------------------  _.where()  --------------------------------------------
 	console.log(_.where(creatures, {real : false}));  //  [ { name: 'Daemon',details: '...', nation: 'greek', real: false } ]



	
