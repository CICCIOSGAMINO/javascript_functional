// Following some Javascript tools 

// existy(define the existence of something)  ------------------------------  existy()  --------------------------------------------- 
function existy(x){
	return x != null
};

existy(null); // false 
existy((function(){})()); 	// false 


// truthy(if should be considered a synonymfor true)  -----------------------  truthy()  --------------------------------------------
function truthy(x){
	return (x !== false) && existy(x)
};

truthy(0); 		// true
truthy('');		// true 

// fnull()  -----------------------------------------------------------------  fnull()  ---------------------------------------------
// we use a fnull() function with default value to avoid 
	var nums = [1,2,3, null, 5,7,11, undefined];
	_.reduce(nums, function(mem, n){
		return mem + n;
	});									// ERORR NaN 

	function existy(x){
	return x != null
	};									

	function fnull(fun /*, default */){
		var defaults = _.rest(arguments);
		
		return function(/* args */){
			var args = _.map(arguments, function(e, i){
				return existy(e) ? e : defaults[i];
			});
			return fun.apply(null, args);
		};
	};

	var safeMultiply = fnull(function(a, b){
		return a * b 
	}, 1, 1); 

	console.log(_.reduce(nums, safeMultiply));


