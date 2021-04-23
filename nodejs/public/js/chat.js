document.querySelector('#start_chat').addEventListener('click', event => {
    const chat_help = document.getElementById('chat_help');
    const answers = document.getElementById('answers');
    chat_help.style.display = 'none';
  
    const chat_in_support = document.getElementById('chat_in_support');
    chat_in_support.style.display = 'block';
  
    const socket = io();
  
    const email = document.getElementById('email').value;
    const text = document.getElementById('txt_help').value;

    for (let index = 0; index <= 10; index++) {
      answers.innerHTML += '<a class="value" href="#"  onclick="onAnswers('+index+',\''+email+'\');" >'+index+'</a>'     
    }

    socket.on('connect', () => {
      const params = {
        email,
        text,
      };
  
      socket.emit('client_first_access', params, (call, err) => {
        if (err) {
          console.err(err);
        } else {
          console.log(call);
        }
      });
    });
  });