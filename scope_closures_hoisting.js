/* 
	Variable scope, is an important foundational topic not only to functional programming, but to JavaScript in general. 
	The term “binding” refers to the act of assigning a value to a name in JavaScript via var assignment, function arguments,
	this passing, and property assignment. 

	Here we touches on dynamic scoping, as displayed in JavaScript’s this reference, and proceeds onto function-level scoping
	and how it works. All of this builds up to a discussion of closures, or functions that capture nearby variable bindings 
	when they are created. 

	The term “scope” has various meanings in common use among JavaScript programmers:

	+ The value of the this binding
	+ The execution context defined by the value of the this binding
	+ The “lifetime” of a variable
	+ The variable value resolution scheme, or the lexical bindings 
*/ 

	// global  ------------------------------------------------------  global  --------------------------------------------------

	// "use strict"  ------------------------------------------------  "use strict"  ---------------------------------------------
	// "use strict"				// "use strict"  -> can be use at start file/function to avoid the global vars problems 
	var _ = require('underscore');
	var crypto = require('crypto');

	// I’ll start with variables with the longest lifespan—that of the “life” ofthe program itself—globals, a global variable 
	// thisAGlobalVariable = "this is a global variable ! "; 			// with "use strict" raise a Reference Error 
	var thisAGlobalVariable = " secure global var";		

	// all variable without "var" are global 
	function foo(){
		return thisAGlobalVariable; 
	}
	foo(); 		

/*
	The problem with global variables, and the reason that they are so reviled, is that any piece of code can change them 
	for any reason at any time. This anarchic condition can make for severe pain and missed holidays.	

*/	

	
	// lexical scope  -----------------------------------------------  lexical scope  --------------------------------------------
	// Lexical scope refers to the visibility of a variable and its value analogous to its textual representation.

	lexical_var = "GLOBAL";
	function first(){
		var lexical_var = "FIRST";				// without var i change the global lexical_var 

		return function(){
			var lexical_var = "SECOND";
			return lexical_var; 
		}();

	}
	first();		// SECOND 


	// dynamic scope  -------------------------------------------------  dynamic scope  --------------------------------------------
/* 
	Very few languages use dynamic scope as their primary binding resolution scheme. Dynamic scoping, however, is a simplistic
	scheme used as the primary scoping mechanism in only a handful of modern pro-gramming languages. I'll show you how simulate 
	the dynamic scope how it works : 

*/
	// dynamic scoping is built on the idea of a global table of named values.At the heart of any JavaScript engine you will see—if 
	// one big honking lookup table:
	var globals = {};

	function makeBind(resolver){
		return function(k, v){
			var stack  = globals[k] || [];
			globals[k] = resolver(stack, v);
			return globals; 
		};
	};

	// With globals and makeBindFun in place, we can move onto the policies for adding bindings to the globals variable:
	var stackBinder = makeBind(function(stack, v) {
		stack.push(v);
		return stack;
	});
	var stackUnbinder = makeBind(function(stack) {
		stack.pop();
		return stack;
	});
/* 
	The function stackBinder performs a very simple task (i.e., it takes a key and a value and pushes the value onto the 
	global bindings map at the slot associated with the key).	Maintaining a global map of stacks associated with binding 
	names is the core of Dynamic scoping
*/ 
	stackBinder('name','ciccio');
	stackBinder('name','cicciosgamino');
	stackBinder('name','cicciosgamino_pop');
	// console.log(globals);
	stackUnbinder('name');				// get the all the value of var 'name'  --> cicciosgamino_pop 

	// dynamicLookup provides a way to look at the top value 
	function dynamicLookup(a){
		var a_array = globals[a] || [];
		return _.last(a_array);
	}

	dynamicLookup('name');				// cicciosgamino 

	// Javascript - this ----------------------------------------  Javascript - this  -----------------------------------------
	// this reference can point to different values depending on the context in which it was first created 
	// is also determined by the caller, as shown in the following:

	function returnThis(){
		return this; 
	};

	returnThis(); 						// global Node object 
	returnThis.call('booo');			// { '0': 'b', '1': 'o', '2': 'o', '3': 'o' }

/* 	
	The value of the this reference is directly manipulable through the use of apply or call. That is, whatever object is 
	passed into them as the first argument becomes the referenced object. Libraries like jQuery use this as a way to pass
	context objects and event targets into first-class functions.
*/ 

	// _.bind()  --------------------------------------------------  _.bind()  -----------------------------------------------
	//  Underscore provides the function _.bind that allows you to lock the this reference from changing, like the following:
	// _.bind(function, obj, *arguments)   meaning that whenever the function is called, the value of this will be the object

	var myThis =_.bind(returnThis, 'ahahahha');
	myThis.call('booo');				// aahahha  


	// _.bindAll()  -----------------------------------------------  _.bindAll()  -------------------------------------------

	var buttonView = {label : 'underscore',
				  onClick : function(){alert('clicked : ' + this.label)},
				  onHover : function(){alert('hovering : ' + this.label)}
				};
	_.bindAll(buttonView, 'onClick', 'onHover');
	// jQuery('#underscore_button').bind('click', buttonView.onClick);

	// And thus, Underscore saves us from the perils of dynamic scoping.


	// function - scope -------------------------------------------  function - scope ---------------------------------------


	// hoisting  --------------------------------------------------  hoisting  ----------------------------------------------
	// The action of JavaScript to rearrange variable declarations is called hoisting. The implications of this are that any 
	// piece of code in the function can see all of the variables defined inside.
	function foo_count(n){
		for(var i = 0 ; i < n; i++);
		return i; 
	};
	foo_count(5);				// --> 5  hoisting 

	function foo_count_(n){
		for(this['i'] = 0; this['i'] < n; this['i']++);
		return this['i'];
	};

	foo_count_(99);				// --> 99  simulated hoisting with this object 
	i;							// --> 99

	// BE CAREFUL 
	foo_count_.call({}, 200);	// --> 200
	i;							// --> 99

	// BE CAREFUL 
	foo_count_.call(null, 399);
	i;							// --> 399 



	// closure  ------------------------------------------------  closure   ----------------------------------------------------
	/* 
		Languages without first-class functions can support closures, but they’re often greatly stunted. Thankfully, JavaScript 
		supports first-class functions, so its closures are a pow‐erful way to pass around ad hoc encapsulated states.

		Closure is a function that “captures” values near where it was born. 

		What is a closure? In a sentence, a closure is a function that captures the external bindings (i.e., not its own arguments) 
		contained in the scope in which it was defined for later use.
	*/ 

	function getHashKey(){
		var SECRET_KEY = "7c1789c3-942b-4855-b8e3-00d7f7efb9de"; 
		var shaHash = crypto.createHash('sha1');
		shaHash.update(SECRET_KEY);
		var hKey = shaHash.digest('hex');

		return function(){
			return "HASH KEY : " + hKey;
		};
	};


	var myKey = getHashKey()();
	myKey;									// HASH KEY : 15ff34260d2ecb18ccde7c3be9930553c00f12e8

	// The same with the ARGUMENTS 

	function genrateKey(SEEED){

		var shaHash = crypto.createHash('sha1');
		shaHash.update(SEEED);
		var hKey = shaHash.digest('hex');
		
		return function(){
			return SEEED + " : " + hKey; 
		};
	};

	genrateKey('cicciosgamino')();			//  cicciosgamino : fe03925f5be9f4a085e4b7ac56eee07da99c77a4


	// Simulate the closure using the function-scope this 
	function generateNewKey(SEEED){

		var shaHash = crypto.createHash('sha1');
		shaHash.update(SEEED);
		var hKey = shaHash.digest('hex');

		// use the this to pass info to inner function 
		this['SEEED'] = SEEED;
		this['hKey'] = hKey;
		// var that = this; 

		// return _.bind(function(){return this['SEEED'] + " : " + this['hKey']}, that);
		return function(){return this['SEEED'] + " : " + this['hKey']};

	}

	generateNewKey('cicciosgamino')();

	/* 
		Wow, keeping track of which variables are needed within the body of inner functions seems like a real pain. 
		If you needed to keep track manually, like in this example, then JavaScript would be exceedingly difficult 
		to write. Thankfully for us, the machinery driving variable capture is automatic and straightforward to use.

	*/ 


	// shadowing  -------------------------------------------------  shadowing  -----------------------------------------
	// two declaratio of the same variable 
	var shadow = 0;
	function goShadow(shadow){
		var shadow = 999;
		return ['Value is : ', shadow].join(''); 
	};

	goShadow();							//  999 

	var SHADOW = 0; 
	function cameOnShadow(SHADOW){
		return function(SHADOW){
			return " SHADOW : " + SHADOW;
		};
	};
	var a_shadow = cameOnShadow(10);
	a_shadow(99);						// 99 


	/* 
		trend to avoid shadowed variables when writing JavaScript code. If you’re not careful, then shadowing can cause 
		confusion if you’ve not accounted for it.
	*/ 