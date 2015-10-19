var fs = require('fs');

fs.readFileAsync("file.json").then(JSON.parse).then(function(val){
	console.log(val.success);
})
.catch(SyntaxError, function(e){
	console.error("invalid json in file");
})
.catch(function(e){
	console.error("unable to read file");
});