var io = require('socket.io');



module.exports = function(server) {
  chat = io.listen(server);
  chat.sockets.on('connection', function (socket) {
    socket.on('chattoserver', function (data) {
      chat.sockets.emit('chattoclient', data);
    });
  });
}