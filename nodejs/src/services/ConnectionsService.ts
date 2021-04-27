import {connection}  from  '../database';
import { AppError } from '../errors/AppError';
import { Connection } from '../entities';

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

  async findAllWithoutAdmin() {

    // O relacionamento não esta retornando o objetos de cliente no mongoDB
    const connections = await (await connection).getCustomRepository(ConnectionsRepository)
    .find({
      where: {
        admin_id: null,
      },
     relations: ['user']
    });

    return connections;
  }

  async findBySocketID(socket_id: string) {
    const connection_socket = (await connection).getCustomRepository(ConnectionsRepository)
                              .findOne({ socket_id } as any);

    return connection_socket;
  }

  async updateAdminID(user_id: string, admin_id: string) {

    const connection_socket = await (await connection).getCustomRepository(ConnectionsRepository)
                            .findOne({ user_id } as any);
    
    if(connection_socket === undefined)
      throw new Error('Connection not exists.');

    await (await connection).getCustomRepository(ConnectionsRepository)
      .update(connection_socket, { admin_id } as any);

    // await (await connection).getCustomRepository(ConnectionsRepository)
    //   .createQueryBuilder()
    //   .update(Connection)
    //   .set({ admin_id } as any)
    //   .where('user_id = :user_id', {
    //     user_id,
    //   })
    //   .execute();
  }
}

export { ConnectionsService };