'use strict';
/*Client side*/
const socket = io.connect('http://localhost:3001/');
let vPerson = document.getElementById('person'),
    vAppChat= document.getElementById('app-chat'),
    vWelcomeRutan= document.getElementById('welcome-rutan'),
    vUser = document.getElementById('usr'),
    vMsg = document.getElementById('msg'),
    vButtonSend = document.getElementById('send'),
    vWrittingMsg = document.getElementById('writting-msg'),
    vOutput = document.getElementById('output');
//
vButtonSend.addEventListener('click', function (e) {
  if(vMsg.value){
    socket.emit('chat',{
      msg: vMsg.value,
      user: vUser.value });
    }
  vMsg.value = '';

});

vMsg.addEventListener('keyup', function(e) {
  if(vPerson.value){
    socket.emit('typing', {
      name: vUser.value,
      text: vMsg.value
    })
  }
});


//msg som kommer från server
//saknar tid och klockan
socket.on('chat',function(data){
  vWrittingMsg.innerHTML = '';
  vOutput.innerHTML += `<p><strong> ${data.user}: </strong> ${data.msg} </p>`;
});
//
socket.on('typing',function(data){
  if (data.text) {
    vWrittingMsg.innerHTML = `<p><em> ${data.name} skriver ...`;
  }else{
    vWrittingMsg.innerHTML='';
  }
})

function goIn(){
  if(vPerson.value){
    vWelcomeRutan.style.display= 'none';
    vAppChat.style.display = 'block';
    let userNamn = vPerson.value;
    vUser.value = userNamn;
    vUser.readOnly = true;
  }
}
