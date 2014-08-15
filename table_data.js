/* 

	Focus on the table structure, using Underscore’s object manipulation functions, you can derive an experience very
	similar to that of SQL, where logical data tables are filtered and processed according to a powerful declarative 
	specification. 

	To achieve a more fluent table processing API, we step it up beyond what Underscore provides and take advantage 
	of functional techniques. 

	The functions created implement a subset of the relational algebra on which all SQL engines are built.
*/ 

	function project(table, keys){
		return _.map(table, function(obj){
			return _.pick.apply(null, construct(obj, keys));
		});
	}

