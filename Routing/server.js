/*
  Created by: John Renner
  Date: 11/28/2012
  The horrors of using raw node for page routing
*/
var http = require("http");

var server = http.createServer(function(req, res){
  if (req.url === "/goodbye")
    req.end("Goodbye!");
  else
    req.end("Hello World!");
});

server.listen(1337, function(){
  console.log("Server listening on port 1337");
});
