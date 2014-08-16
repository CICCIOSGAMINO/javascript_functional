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

	// "use strict"  ------------------------------------------------  "use strict"  ---------------------------------------------
	"use strict"				// "use strict"  -> can be use at start file/function to avoid the global vars problems 

	// I’ll start with variables with the longest lifespan—that of the “life” ofthe program itself—globals, a global variable 
	// thisAGlobalVariable = "this is a global variable ! "; 			// with "use strict" raise a Reference Error 
	var thisAGlobalVariable = " secure global var";		

	// all variable without "var" are global 
	function foo(){
		return thisAGlobalVariable; 
	}
	foo(); 				