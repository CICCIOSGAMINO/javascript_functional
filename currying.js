/* 
	In mathematics and computer science, currying is the technique of translating the evaluation
	of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions,
	each with a single argument (partial application). It was introduced by Moses Schönfinkel and later
	developed by Haskell Curry.

*/ 


// ----------------------------------------------- CURRYING ----------------------------------------------- 

	// start with a function like that 
	function multiply(x ,y){
		return x*y
	}; 

	// and currying the function by derive the following functions 
	function curriedMultiply(x){
		return function(y){
			return x*y; 
		}
	}

	// is a simple multiply by 3 function to use : 
	var multiply3 = curriedMultiply(3);
	console.log(multiply3(5));
	console.log(curriedMultiply(3)(5));


// ------------------------------------------- CURRYING THE CALLBACK -------------------------------------
var fs = require('fs');

console.log('Go CURRYING CALLBACK'); 

function curriedWriteLog(path, text){
	return function(callback){
		fs.writeFile(path, text, callback);
	}
};

//  we apply this currying principle to node APIs, to single out the callback parameter (applied to the Node.js fs ) 

var writeLog = curriedWriteLog('message.txt', " All Goog Again ! ");
writeLog(function(err){
	if(err) throw err;
	console.log('FILE : WRITED ! ');
});

/* 
	The interesting part is that if we are smart, we can implement curriedReadFile so that it starts the asynchronous
	read operation. And we are not forced to use the reader right now. We can keep it around, pass it to other
	functions and have our program do other things while the I/O operation progresses. When we need the result, we will call
	the reader with a callback.

	By currying, we have separated the initiation of the asynchronous operation from the retrieval of the result. This is very 
	powerful because now we can initiate several operations in a close sequence, let them do their I/O in parallel, and 
	retrieve their results afterwards. Here is an example:

*/ 

function curriedReadFile(filename, options){
	return function(callback){
		fs.readFile(filename, options, callback);
	};
};

/* 

	By currying, we have separated the initiation of the asynchronous operation from the retrieval of the result. This is
	very powerful because now we can initiate several operations in a close sequence, let them do their I/O in parallel, 
	and retrieve their results afterwards. Here is an example:

*/ 

var opts = {'encoding' : null };
var readOne = curriedReadFile('message.txt', opts);
var readTwo = curriedReadFile('message.txt',opts);

readOne(function(err, data){
	if(err) throw err;
	console.log('1:' + data);
});

readTwo(function(err, data){
	if(err) throw err;
	console.log('2:' + data);
})


