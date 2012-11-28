window.onload = function(){
  var chatEntry = document.getElementById('chatEntry'),
    chatBox = document.getElementById('chatbox'),
    client = io.connect('http://john.wireless.rit.edu:3000');

  function displayChat(info){
    chatbox.innerHTML +=
      "<div class='message'>" + info.text + "</div>";
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  client.on('chattoclient', displayChat);
  chatEntry.onkeypress = function(event) {
    if (event.keyCode !== 13 || this.value === '')
      return;
    client.emit('chattoserver', {
      text: this.value
    });
    this.value = '';
  }
}