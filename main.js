var pluralize = function(string, count){
	if(count > 1 || count === 0){
		return string + "s";
	} else {
		return string;
	}

};