var fs = require('fs');

fs.readFile("file.json", function(err, val){
	if(err){
		console.error("unable to read file");
	}
	else {
		try {
			val = JSON.parse(val);
			console.log(val.success);
		}
		catch(e){
			console.error("invalid json in file");
		}
	}
})