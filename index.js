'use strict';

const express = require('express');
const app = express();
var fs = require("fs");
//app.use(express.static(__dirname + '/views')); // html
//app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});



app.get('/api/v1/Order/:phoneNumber/GetOrderDetailsByPhone', function (req, res) {
   fs.readFile( __dirname + "/json/" + "orderDetails.json", 'utf8', function (err, data) {
       //console.log( data );
	   console.log(req.params.phoneNumber);
	   var num=req.params.phoneNumber;
	   var xpodata = JSON.parse( data );
	 console.log( xpodata.key==num?true:false);
	  console.log(xpodata.key);
       res.end( JSON.stringify(xpodata));
   });
})



