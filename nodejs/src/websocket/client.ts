import { io } from '../http';

import { ConnectionsService } from '../services/ConnectionsService';
import { MessagesService } from '../services/MessagesService';
import { UsersService } from '../services/UsersService';

interface IParams {
  text: string;
  email: string;
}

//Cliente especifico
io.on('connect', (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on('client_first_access', async params => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create(email);

      await connectionsService.create({
        socket_id,
        user_id: (user as any).id,
      });

      user_id = (user as any).id;
    } else {
      user_id = (userExists as any).id;
      const connection_message = await connectionsService.findByUserId((userExists as any).id);

      if (!connection_message) {
        await connectionsService.create({
          socket_id,
          user_id: (userExists as any).id,
        });
      } else {
        (connection_message as any).socket_id = socket_id;
        await connectionsService.create(connection_message as any);
      }
    }

    await messagesService.create({
      text,
      user_id,
    });

    const allMessages = await messagesService.listByUser(user_id);
    socket.emit('client_list_all_messages', allMessages);

    const allUsers = await connectionsService.findAllWithoutAdmin();
    io.emit('admin_list_all_users', allUsers);
  });

  socket.on('client_send_to_admin', async params => {
    const { text, socket_admin_id } = params;

    const socket_id = socket.id;

    const { user_id } = await connectionsService.findBySocketID(socket_id) as any;

    const message = await messagesService.create({
      text,
      user_id,
    });

    io.to(socket_admin_id).emit('admin_receive_message', {
      message,
      socket_id,
    });

    let text_bot = `
        No momento estamos ocupados!! <br>
        1 - Saber mais sobre nlw <br>
        2 - Sobre o projeto
      `

    if(socket_admin_id === null || socket_admin_id === undefined ){
      if(text === "1"){
        text_bot ='<a href="https://nextlevelweek.com/" target="_blank">Sobre a NLW<a/>';
      }
      if(text === "2"){
        text_bot = '<a href="https://github.com/FranciscoWallison/nlw-05-nodejs" target="_blank">GitHub/FranciscoWallison/nlw-05-nodejs<a/>';
      }
      io.to(socket_id).emit('admin_send_to_client', {
        text: text_bot,
        socket_id: null,//
      });
    }
   
  });
});