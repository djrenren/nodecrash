var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello World");
});

server.listen(1337, function(){
  console.log("Server listening on port 1337");
});