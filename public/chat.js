'use strict';
let vPerson = document.getElementById('person'),
    vAppChat= document.getElementById('app-chat'),
    vWelcomeRutan= document.getElementById('welcome-rutan'),
    vUser = document.getElementById('usr');

function goIn(){
  if(vPerson.value){
    vWelcomeRutan.style.display= 'none';
    vAppChat.style.display = 'block';
    let userNamn = vPerson.value;
    vUser.value = userNamn;
    vUser.readOnly = true;
  }
}
