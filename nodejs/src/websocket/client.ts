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
  });
});