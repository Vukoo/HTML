var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();
app.use(express.static('public'));




 fs.readFile(pathname.substr(1), function (err, data) {
       
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());
          // Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
    
    app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

   
   // Read the requested file content from file system
  
}).listen(8081);

          
      }
      // Send the response body 
      response.end();
   });   


console.log('Server running at http://127.0.0.1:8081/');