import {connection}  from  '../database';
import { AppError } from '../errors/AppError';

import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  constructor() {
    
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {

    try {
      const connection_message = (await connection).getCustomRepository(ConnectionsRepository)
      .create({
        socket_id,
        user_id,
        admin_id,
        id,
      } as any );

      await (await connection).getCustomRepository(ConnectionsRepository)
        .save(connection_message);
    } catch (error) {
      throw new AppError(error);
    }
   
  }

  async findByUserId(user_id: string) {
    const connection_message = (await connection).getCustomRepository(ConnectionsRepository)
      .findOne({ user_id } as any );

    return connection_message;
  }
}

export { ConnectionsService };