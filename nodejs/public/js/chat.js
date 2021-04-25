let socket_admin_id = null;
let emailUser = null;
let socket = null;

document.querySelector('#start_chat').addEventListener('click', event => {
  const chat_help = document.getElementById('chat_help');
  chat_help.style.display = 'none';

  const chat_in_support = document.getElementById('chat_in_support');
  chat_in_support.style.display = 'block';

  socket = io();

  const email = document.getElementById('email').value;
  emailUser = email;
  const text = document.getElementById('txt_help').value;

  const answers = document.getElementById('answers');
  //teste avaliativo
  answers.innerHTML = "";
  for (let index = 1; index <= 10; index++) {
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

  socket.on('client_list_all_messages', messages => {
    var template_client = document.getElementById('message-user-template').innerHTML;
    var template_admin = document.getElementById('admin-template').innerHTML;

    messages.forEach(message => {
    
      if (message.admin_id === null || message.admin_id === undefined ) {
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email,
        });

        document.getElementById('messages').innerHTML += rendered;
      } else {
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text,
        });

        document.getElementById('messages').innerHTML += rendered;
      }
      const element_text = document.getElementById("text_support");
      element_text.scrollTop = element_text.scrollHeight - element_text.clientHeight;

    });
  });

  socket.on('admin_send_to_client', message => {
    socket_admin_id = message.socket_id;

    const template_admin = document.getElementById('admin-template').innerHTML;

    const rendered = Mustache.render(template_admin, {
      message_admin: message.text.replace("/\n/g", "<br/>"),
      atendente: socket_admin_id === null ? "Bot" : "Atendente"
    });

    document.getElementById('messages').innerHTML += rendered.replaceAll("&lt;br&gt;", "<br/>");
    const element_text = document.getElementById("text_support");
    element_text.scrollTop = element_text.scrollHeight - element_text.clientHeight;

  });
});

document.querySelector('#send_message_button').addEventListener('click', event => {
  const text = document.getElementById('message_user');

  const params = {
    text: text.value,
    socket_admin_id,
  };

  socket.emit('client_send_to_admin', params);

  const template_client = document.getElementById('message-user-template').innerHTML;

  const rendered = Mustache.render(template_client, {
    message: text.value,
    email: emailUser,
  });

  document.getElementById('messages').innerHTML += rendered;

  text.value = '';
  const element_text = document.getElementById("text_support");
  element_text.scrollTop = element_text.scrollHeight - element_text.clientHeight;

});