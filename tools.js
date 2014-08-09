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


