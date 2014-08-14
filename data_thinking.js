 
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
					 {name : 'Manticore', details : 'Lion-human-scorpion hybrid'},
					 {name : 'Daemon', details : 'Incorporeal spirit', nation : 'greek'}];

	var creature_a = {name : 'Agloolik', details : 'Ice spirit that aids hunters and fishermen'};

	_.keys(creature_a);			// ['name' , 'details']
	_.values(creature_a); 	

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
	



	
