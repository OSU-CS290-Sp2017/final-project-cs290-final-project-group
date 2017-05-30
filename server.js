var path = require('path');
var fs = require('fs');
var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.get('*', function(req, res){
	res.status(404).send('404');
});

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});
