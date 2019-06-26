var express = require('express');
var app = express();

app.get('/Emplist', function(req, res){
	var emplist=
	[
	{id: 1000, firstName:"Minal", lastName:"Mudliyar", dept:"development"},
		{id: 3000, firstName:"Sneha", lastName:"Patil", dept:"development"},
			{id: 4000, firstName:"Harshada", lastName:"Mane", dept:"development"}
	];
			  
res.send(emplist);

});
app.listen(3000);
console.log("app listening at port 3000");